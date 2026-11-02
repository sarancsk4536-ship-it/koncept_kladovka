(() => {
  'use strict';

  const PRODUCTS=window.KLADOVKA.products;
  const CATEGORIES=window.KLADOVKA.categories;
  const SCENARIOS=window.KLADOVKA.scenarios;
  const SELECTION=window.KLADOVKA_SELECTION;
  const PICKUPS=[
    {id:'lugovaya',name:'На Луговой',description:'Район Луговой'},
    {id:'pervaya',name:'На Первой Речке',description:'Район Первой Речки'},
    {id:'churkin',name:'На Чуркине',description:'Район Чуркина'}
  ];
  const LABELS=Object.fromEntries(CATEGORIES.map(c=>[c.id,c.name]));
  const STORAGE_KEY='kladovka-saved-v2';
  const INTERVALS={14:'Раз в 2 недели',28:'Раз в 4 недели',42:'Раз в 6 недель',56:'Раз в 8 недель',84:'Раз в 12 недель',91:'Раз в 13 недель',182:'Раз в полгода'};
  const byId=id=>PRODUCTS.find(p=>p.id===id);
  const $=selector=>document.querySelector(selector);
  const escape=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const icon=(name,extra='')=>`<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const money=value=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(value)+' ₽';
  const unitMoney=value=>new Intl.NumberFormat('ru-RU',{maximumFractionDigits:2}).format(value)+' ₽';
  function isoDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
  }
  function addDays(days, start) {
    const date = start ? new Date(start + 'T12:00:00') : new Date();
    date.setDate(date.getDate() + days);
    return isoDate(date);
  }
  function validDate(date) {return typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(new Date(date + 'T12:00:00').getTime());}
  function prettyDate(date) {return validDate(date) ? new Date(date + 'T12:00:00').toLocaleDateString('ru-RU', {day:'numeric',month:'long'}) : 'Дата не задана';}
  const fresh=()=>({version:2,shelf:[],cart:[],orders:[],pickup:'lugovaya',sequence:0,scenarioAnswers:{}});
  let storageAvailable=true;
  function readState(){
    try{
      const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
      if(!data||data.version!==2)return fresh();
      const out=fresh();
      const items=(array,full)=>Array.isArray(array)?array.filter(p=>p&&byId(p.id)).filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i).map(p=>({id:p.id,qty:Math.max(1,Math.min(20,parseInt(p.qty)||1)),...(full?{selected:p.selected!==false,mode:['manual','remind','auto'].includes(p.mode)?p.mode:'manual',interval:INTERVALS[Number(p.interval)]?Number(p.interval):42,nextDate:validDate(p.nextDate)?p.nextDate:addDays(42),paused:!!p.paused}:{})})):[];
      out.shelf=items(data.shelf,true);out.cart=items(data.cart,false);
      out.pickup=PICKUPS.some(p=>p.id===data.pickup)?data.pickup:out.pickup;
      out.orders=Array.isArray(data.orders)?data.orders.filter(o=>o&&/^KL-\d+$/.test(o.id)&&Array.isArray(o.items)&&o.items.every(x=>byId(x.id)&&Number.isInteger(x.qty)&&x.qty>0&&x.qty<=20)&&PICKUPS.some(p=>p.id===o.pickup)&&validDate(o.date)).slice(-20).map(o=>({...o,total:o.items.reduce((n,x)=>n+byId(x.id).price*x.qty,0)})):[];
      out.sequence=Math.max(0,parseInt(data.sequence)||0,...out.orders.map(o=>parseInt(o.id.split('-')[1])||0));
      if(data.scenarioAnswers&&typeof data.scenarioAnswers==='object')for(const scenario of SCENARIOS){
        const raw=data.scenarioAnswers[scenario.id];if(!raw||typeof raw!=='object')continue;
        const clean={};for(const q of scenario.questions){
          if(q.type==='dimensions'&&raw[q.id]){const d=raw[q.id];clean[q.id]={width:Number(d.width)||'',depth:Number(d.depth)||'',height:Number(d.height)||''};}
          else if(q.options?.some(o=>o.value===raw[q.id]))clean[q.id]=raw[q.id];
        }out.scenarioAnswers[scenario.id]=clean;
      }
      return out;
    }catch(_){return fresh();}
  }
  let state=readState();
  let category='all',query='',sort='featured',productLimit=12,showAllScenarios=false;
  let modalKind='',lastFocus=null,toastTimer,activeScenario=null,answers={},recommendations=[];
  let checkoutDate=addDays(1),checkoutSave=true;
  const dialog=$('#app-dialog');

  function persist() {
    try {localStorage.setItem(STORAGE_KEY, JSON.stringify(state));}
    catch (_) {if(storageAvailable){storageAvailable=false;toast('Браузер не разрешил сохранение. Данные доступны до закрытия страницы.');}}
  }
  function toast(message) {
    clearTimeout(toastTimer);
    $('#toast').textContent=message;
    $('#toast').classList.add('is-visible');
    toastTimer=setTimeout(() => $('#toast').classList.remove('is-visible'), 3200);
  }
  function quantity(items) {return items.reduce((n,p) => n+p.qty,0);}
  function total(items) {return items.reduce((n,p) => n+byId(p.id).price*p.qty,0);}
  function stepper(id,scope,qty) {
    return `<div class="stepper" aria-label="Количество"><button type="button" data-action="quantity" data-scope="${scope}" data-id="${id}" data-delta="-1" aria-label="Уменьшить количество" ${scope==='shelf'&&qty===1?'disabled':''}>${icon('minus')}</button><span>${qty}</span><button type="button" data-action="quantity" data-scope="${scope}" data-id="${id}" data-delta="1" aria-label="Увеличить количество" ${qty>=20?'disabled':''}>${icon('plus')}</button></div>`;
  }
  function productCard(p){
    const saved=state.shelf.some(x=>x.id===p.id);
    const perUnit=p.unit==='уп.'?'':` · ${unitMoney(p.price/p.volume)} / ${p.unit}`;
    return `<article class="product-card"><div class="product-art"><button type="button" class="art-button" data-action="detail" data-id="${p.id}" aria-label="Подробнее: ${p.name}"><img src="./assets/${p.art}.svg" alt="${p.name}" width="220" height="260" loading="lazy"></button><span class="product-tag">${p.tag}</span><button type="button" class="save-button ${saved?'is-saved':''}" data-action="save" data-id="${p.id}" aria-label="${saved?'Убрать из кладовки':'Сохранить в кладовке'}: ${p.name}" aria-pressed="${saved}">${icon('heart')}</button></div><div class="product-info"><p class="product-subtitle">${p.line}</p><a class="product-title" href="#" data-action="detail" data-id="${p.id}">${p.name}</a><p class="product-meta">${p.amount}${perUnit}</p><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-button" type="button" data-action="add" data-id="${p.id}">${icon('plus')}В корзину</button></div></div></article>`;
  }
  function renderProducts(){
    const featured=['grease-daily','laundry-soft','dish-soft','organizer-small','led-E27-800-2700','glue-wood','shoe-leather-protect','litter-wood-5','soil-universal','bags','food-plastic-1-fridge','battery-AA-4'];
    const rank=id=>featured.includes(id)?featured.indexOf(id):999;
    const list=PRODUCTS.filter(p=>(category==='all'||p.category===category)&&`${p.name} ${p.sourceCategory} ${p.specs.join(' ')} ${LABELS[p.category]}`.toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru')));
    list.sort((a,b)=>sort==='price-asc'?a.price-b.price:sort==='price-desc'?b.price-a.price:rank(a.id)-rank(b.id));
    $('#category-tabs').innerHTML=[{id:'all',name:'Всё для дома'},...CATEGORIES].map(c=>`<button type="button" data-category="${c.id}" class="${category===c.id?'is-active':''}" aria-pressed="${category===c.id}">${c.name}</button>`).join('');
    $('#product-grid').innerHTML=list.slice(0,productLimit).map(productCard).join('');
    $('#catalog-empty').classList.toggle('hidden',!!list.length);
    $('#catalog-count').textContent=list.length?`Показано ${Math.min(productLimit,list.length)} из ${list.length}`:'';
    $('#catalog-more').classList.toggle('hidden',list.length<=productLimit);
  }
  function scenarioCard(scenario){
    return `<button class="scenario-card" type="button" data-action="scenario" data-id="${scenario.id}">${icon(scenario.icon)}<div><strong>${scenario.title}</strong><span>${scenario.description}</span></div>${icon('arrow')}</button>`;
  }
  function renderScenarios(){
    const popular=['laundry','dishes','kitchen-clean','storage','lamp','food'];
    const list=showAllScenarios?SCENARIOS:popular.map(id=>SCENARIOS.find(x=>x.id===id));
    $('#scenario-grid').innerHTML=list.map(scenarioCard).join('');
    const button=document.querySelector('[data-action="all-scenarios"]');
    button.innerHTML=(showAllScenarios?'Свернуть':'Все задачи')+' '+icon('arrow');
    button.setAttribute('aria-expanded',String(showAllScenarios));
  }
  function emptyState(title,description) {
    return `<div class="empty-state">${icon('shelf')}<h2>${title}</h2><p>${description}</p><div class="empty-buttons"><button class="button button-primary" type="button" data-action="quiz">Подобрать по задаче ${icon('arrow')}</button><button class="button button-secondary" type="button" data-action="sample">Собрать базовый набор</button></div></div>`;
  }
  function renderShelf() {
    const selected=state.shelf.filter(p => p.selected);
    $('#shelf-content').innerHTML=state.shelf.length ? `<div class="shelf-summary"><p>Выбрано товаров: ${quantity(selected)}<strong>${money(total(selected))}</strong></p><button class="button button-primary" type="button" data-action="repeat-shelf" ${selected.length?'':'disabled'}>Повторить выбранное ${icon('arrow')}</button></div><div class="shelf-list">${state.shelf.map(item => {const p=byId(item.id);return `<article class="shelf-row"><input type="checkbox" data-select-shelf="${p.id}" aria-label="Выбрать: ${p.name}" ${item.selected?'checked':''}><img src="./assets/${p.art}.svg" alt="${p.name}" width="60" height="76"><div class="shelf-product"><h3>${p.name}</h3><p>${p.amount} · ${money(p.price)} за упаковку</p><a href="#plans">${icon('repeat')}${item.mode==='manual'?'Повтор вручную':item.paused?'Пополнение на паузе':`Следующий раз ${prettyDate(item.nextDate)}`}</a></div>${stepper(p.id,'shelf',item.qty)}<span class="price">${money(p.price*item.qty)}</span><button class="icon-button" type="button" data-action="remove-shelf" data-id="${p.id}" aria-label="Убрать из кладовки: ${p.name}">${icon('trash')}</button></article>`;}).join('')}</div>` : emptyState('Соберём вашу кладовку','Сохраните знакомые товары или начните с конкретной задачи. Спросим о параметрах, которые действительно важны.');
    renderOrders();
  }
  function renderOrders() {
    $('#orders-content').innerHTML=state.orders.length ? `<section class="order-history"><h2>Мои заказы</h2>${state.orders.slice().reverse().slice(0,5).map(o => `<div class="order-line"><div><strong>${escape(o.id)} · ${money(o.total)}</strong><span>${PICKUPS.find(p=>p.id===o.pickup).name} · ${prettyDate(o.date)} · ${quantity(o.items)} товаров</span></div><button type="button" data-action="order-detail" data-id="${escape(o.id)}">Посмотреть</button></div>`).join('')}</section>` : '';
  }
  function option(value,label,current) {return `<option value="${value}" ${value===current?'selected':''}>${label}</option>`;}
  function renderPlans() {
    const scheduled=state.shelf.filter(x=>byId(x.id).repeatDays>0||x.mode!=='manual');
    $('#plans-content').innerHTML=scheduled.length ? `<div class="plan-grid">${scheduled.map(item => {const p=byId(item.id);return `<article class="plan-card"><div class="plan-card-head"><img src="./assets/${p.art}.svg" alt="${p.name}" width="65" height="70"><div><h3>${p.name}</h3><p>${p.amount} · ${money(p.price*item.qty)} за ${item.qty} уп.</p></div></div><p class="status-dot ${item.paused||item.mode==='manual'?'paused':''}">${item.mode==='manual'?'Повтор вручную':item.paused?'Расписание на паузе':item.mode==='auto'?'Автопополнение настроено':'Напоминание настроено'}</p><div class="plan-fields" style="margin-top:17px"><label><span class="field-label">Следующая дата</span><input class="field" type="date" data-plan-field="nextDate" data-id="${p.id}" value="${item.nextDate}" min="${addDays(0)}"></label><label><span class="field-label">Периодичность</span><select class="field" data-plan-field="interval" data-id="${p.id}">${Object.entries(INTERVALS).map(([n,label])=>option(Number(n),label,item.interval)).join('')}</select></label><label style="grid-column:1/-1"><span class="field-label">Как пополнять</span><select class="field" data-plan-field="mode" data-id="${p.id}">${option('manual','Покупаю вручную',item.mode)}${option('remind','Сначала напомнить и спросить',item.mode)}${option('auto','Повторять автоматически',item.mode)}</select></label></div><div class="plan-actions"><button class="button button-secondary button-small" type="button" data-action="skip-plan" data-id="${p.id}" ${item.mode==='manual'?'disabled':''}>Пропустить цикл</button><button class="text-link" type="button" data-action="pause-plan" data-id="${p.id}" ${item.mode==='manual'?'disabled':''}>${item.paused?'Возобновить':'Поставить на паузу'}</button></div></article>`;}).join('')}</div>` : emptyState('Пополнение по вашему ритму','Сохраните средство для стирки, пакеты для мусора или другой расходник. Вы сможете выбрать удобную частоту и способ пополнения.');
  }
  function update() {
    $('#shelf-count').textContent=state.shelf.length;
    $('#cart-count').textContent=quantity(state.cart);
    $('#cart-count').setAttribute('aria-label',`В корзине ${quantity(state.cart)} товаров`);
    renderProducts();renderScenarios();renderShelf();renderPlans();
  }
  function route() {
    const hash=location.hash.replace('#','');
    const current=['shelf','plans'].includes(hash)?hash:'home';
    document.querySelectorAll('.view').forEach(view => view.classList.toggle('hidden',view.id!==`view-${current}`));
    document.querySelectorAll('[data-route]').forEach(link => {const active=link.dataset.route===current;link.classList.toggle('is-active',active);active?link.setAttribute('aria-current','page'):link.removeAttribute('aria-current');});
    if(hash==='catalog')requestAnimationFrame(()=>$('#catalog').scrollIntoView({behavior:'smooth'}));
    else window.scrollTo({top:0,behavior:'instant'});
  }
  function closeModal() {dialog.close();}
  function showModal(kind,html,drawer=false) {
    if(!dialog.open)lastFocus=document.activeElement;
    modalKind=kind;dialog.classList.toggle('drawer',drawer);
    dialog.setAttribute('aria-labelledby','modal-title');
    $('#dialog-content').innerHTML=html;
    if(!dialog.open)dialog.showModal();
    document.body.classList.add('dialog-open');dialog.scrollTop=0;
    const heading=$('#modal-title');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
  }
  function modalHeader(title,description='') {
    return `<div class="dialog-header"><div><h2 id="modal-title">${title}</h2>${description?`<p>${description}</p>`:''}</div><button class="icon-button" type="button" data-action="close" aria-label="Закрыть окно">${icon('close')}</button></div>`;
  }
  function addToShelf(id,qty=1) {
    if(!byId(id))return;
    const item=state.shelf.find(p=>p.id===id);
    if(item){item.qty=Math.max(item.qty,qty);return;}
    const interval=byId(id).repeatDays||42;
    state.shelf.push({id,qty,selected:true,mode:byId(id).repeatDays?'remind':'manual',interval,nextDate:addDays(interval),paused:false});
  }
  function toggleSave(id) {
    if(!byId(id))return;
    if(state.shelf.some(p=>p.id===id)){state.shelf=state.shelf.filter(p=>p.id!==id);toast('Товар убран из кладовки');}
    else {addToShelf(id);toast('Сохранено в вашей кладовке');}
    persist();update();
    if(modalKind==='detail')showDetail(id);
  }
  function addToCart(id,qty=1,notify=true) {
    if(!byId(id))return;
    const item=state.cart.find(p=>p.id===id);
    if(item)item.qty=Math.min(20,item.qty+qty);else state.cart.push({id,qty:Math.min(20,qty)});
    persist();update();if(notify)toast('Добавлено в корзину');
  }
  function showDetail(id){
    const p=byId(id);if(!p)return;
    const saved=state.shelf.some(item=>item.id===id);
    const matchingTasks=SCENARIOS.filter(x=>p.matches[x.id]);
    showModal('detail',modalHeader(p.name,LABELS[p.category])+`<div class="dialog-body"><div class="detail-layout"><div class="detail-art"><img src="./assets/${p.art}.svg" alt="${p.name}" width="180" height="220"></div><div class="detail-copy"><div class="eyebrow">${p.sourceCategory}</div><h3>${p.amount}</h3><p class="price">${money(p.price)}</p>${p.unit!=='уп.'?`<p>${unitMoney(p.price/p.volume)} за ${p.unit}</p>`:''}<p>${p.specs.map(escape).join('<br>')}</p></div></div><div class="why-box"><strong>${icon('spark')}На что обратить внимание</strong>${p.description}${p.dimensions?'<br>Размер указан как ширина × глубина × высота. Сравните с внутренними размерами места хранения.':''}</div>${matchingTasks.length?`<div style="margin-top:19px"><span class="field-label">Не уверены в выборе?</span><button class="text-link" type="button" data-action="scenario" data-id="${matchingTasks[0].id}">${matchingTasks[0].title} ${icon('arrow')}</button></div>`:''}<div class="detail-actions"><button class="button button-primary" type="button" data-action="add" data-id="${p.id}">${icon('plus')}В корзину</button><button class="button button-secondary" type="button" data-action="save" data-id="${p.id}">${icon('heart')}${saved?'В моей кладовке':'Сохранить'}</button></div></div>`);
  }
  function startQuiz(){
    activeScenario=null;
    showModal('picker',modalHeader('Какую задачу решаем?','Выберите дело. Дальше только вопросы по существу.')+`<div class="dialog-body"><div class="task-picker">${SCENARIOS.map(scenarioCard).join('')}</div></div>`);
  }
  function startScenario(id){
    activeScenario=SCENARIOS.find(x=>x.id===id);if(!activeScenario)return;
    answers=JSON.parse(JSON.stringify(state.scenarioAnswers[id]||{}));
    for(const q of activeScenario.questions)if(q.type==='dimensions'&&!answers[q.id])answers[q.id]={width:'',depth:'',height:''};
    recommendations=[];renderQuiz();
  }
  function renderQuiz(){
    const scenario=activeScenario;if(!scenario)return;
    const questions=scenario.questions.map((q,index)=>{
      let fields='';
      if(q.type==='dimensions')fields=`<div class="dimensions-grid">${[['width','Ширина, см'],['depth','Глубина, см'],['height','Высота, см']].map(([key,label])=>`<label>${label}<input class="field" type="number" inputmode="decimal" min="0.1" max="300" step="0.1" value="${escape(answers[q.id]?.[key]||'')}" data-dimension="${key}" data-question="${q.id}" placeholder="Например, ${key==='width'?40:key==='depth'?30:15}"></label>`).join('')}</div>`;
      else fields=`<div class="choice-grid">${q.options.map(o=>{
        const unavailable=scenario.id==='lamp'&&q.id==='brightness'&&answers.base==='E14'&&o.value==='1100';
        return `<button type="button" class="choice ${answers[q.id]===o.value?'is-selected':''}" data-action="answer" data-question="${q.id}" data-value="${o.value}" aria-pressed="${answers[q.id]===o.value}" ${unavailable?'disabled':''}>${o.label}${unavailable?'<span>В каталоге нет такого сочетания</span>':''}</button>`;
      }).join('')}</div>`;
      return `<section class="question-block"><h3><span class="question-num">0${index+1}</span>${q.title}</h3>${fields}${q.hint?`<p class="question-hint">${q.hint}</p>`:''}</section>`;
    }).join('');
    showModal('quiz',modalHeader(scenario.title,'Подбор по вашей задаче')+`<div class="dialog-body"><button class="scenario-back" type="button" data-action="quiz">${icon('arrow')}Выбрать другую задачу</button>${questions}</div><div class="dialog-footer"><span class="dialog-note">Уточните ${scenario.questions.length} важных параметра</span><button class="button button-primary" type="button" data-action="show-results" ${SELECTION.complete(scenario,answers)?'':'disabled'}>Подобрать решение ${icon('arrow')}</button></div>`);
  }
  function renderResults(){
    const scenario=activeScenario;if(!scenario)return;
    const selected=recommendations.filter(r=>r.selected);
    const sum=selected.reduce((n,r)=>n+byId(r.id).price,0);
    let body='';
    if(!recommendations.length)body=`<div class="no-result">${icon('search')}<h3>Точного совпадения пока нет</h3><p>В каталоге нет товара, который отвечает всем выбранным условиям. Не будем заменять его несовместимым вариантом. Можно изменить параметры или поискать товар самостоятельно.</p><button class="button button-secondary" type="button" data-action="edit-answers">Изменить параметры</button></div>`;
    else body=`<div class="result-top"><strong>Подходит под выбранные параметры</strong>Проверьте подборку и оставьте только то, что вам нужно.</div><div class="recommend-list">${recommendations.map(r=>{const p=byId(r.id);return `<label class="recommend-row"><input type="checkbox" data-recommend="${p.id}" ${r.selected?'checked':''}><img src="./assets/${p.art}.svg" alt="${p.name}" width="55" height="65"><div><h3>${p.name}</h3><div class="result-meta">${p.amount}${p.role==='extra'?' · Дополнение':''}</div><p>${escape(r.reason)}</p></div><span class="price">${money(p.price)}</span></label>`;}).join('')}</div>`;
    showModal('results',modalHeader('Нашли для вашего дела',scenario.title)+`<div class="dialog-body"><button class="scenario-back" type="button" data-action="edit-answers">${icon('arrow')}Изменить ответы</button>${body}</div>${recommendations.length?`<div class="dialog-footer"><div><span class="dialog-note">Выбранные товары</span><div class="selection-total">${money(sum)}</div></div><button class="button button-primary" type="button" data-action="quiz-save" ${selected.length?'':'disabled'}>В мою кладовку ${icon('arrow')}</button></div>`:''}`);
  }
  function showCart() {
    if(!validDate(checkoutDate)||checkoutDate<addDays(0))checkoutDate=addDays(1);
    const items=state.cart;
    let content=items.length?`<div class="cart-items">${items.map(item=>{const p=byId(item.id);return `<article class="cart-row"><img src="./assets/${p.art}.svg" alt="${p.name}" width="65" height="85"><div class="cart-row-main"><h3>${p.name}</h3><p>${p.amount}</p><div class="cart-row-bottom">${stepper(p.id,'cart',item.qty)}<span class="price">${money(p.price*item.qty)}</span></div></div><button class="icon-button" type="button" data-action="remove-cart" data-id="${p.id}" aria-label="Удалить из корзины: ${p.name}">${icon('trash')}</button></article>`;}).join('')}</div><div class="pickup-field"><h3>Где и когда получить</h3><label><span class="field-label">Точка получения</span><select class="field" id="checkout-pickup">${PICKUPS.map(p=>option(p.id,`ПВЗ ${p.name}`,state.pickup)).join('')}</select></label><label><span class="field-label">Когда удобно забрать</span><input class="field" type="date" id="checkout-date" value="${checkoutDate}" min="${addDays(0)}" required></label></div><div class="checkout-controls"><label><input type="checkbox" id="checkout-save" ${checkoutSave?'checked':''}>Сохранить товары в моей кладовке</label></div><div class="cart-totals"><div><span>Товары, ${quantity(items)} шт.</span><span>${money(total(items))}</span></div><div><span>Получение</span><span>Уточняется перед оплатой</span></div><div class="total-line"><strong>Сумма товаров</strong><strong>${money(total(items))}</strong></div></div><button class="button button-primary" type="button" data-action="checkout">Оформить заказ ${icon('arrow')}</button><p class="checkout-disclaimer">Пока заказ сохраняется только в этом браузере. Оплата и передача в ПВЗ не подключены.</p>`:`<div class="cart-empty">${icon('bag')}<h3>Здесь будет ваша корзина</h3><p>Добавьте знакомые товары или начните с подбора.</p><button class="button button-primary" type="button" data-action="quiz">Подобрать товары ${icon('arrow')}</button></div>`;
    showModal('cart',modalHeader('Корзина',items.length?'Знакомый набор. Всё в одном заказе.':'Товары для ваших домашних дел')+`<div class="dialog-body">${content}</div>`,true);
  }
  function receipt(order) {
    const p=PICKUPS.find(p=>p.id===order.pickup);
    showModal('receipt',modalHeader('Ваш заказ')+`<div class="dialog-body"><div class="success-content"><div class="success-icon">${icon('check')}</div><h2>Список покупок сохранён</h2><p>Он останется в вашей кладовке.<br>Оплата и отправка в ПВЗ пока недоступны.</p><div class="receipt-box"><div><span>Номер</span><strong>${escape(order.id)}</strong></div><div><span>Получение</span><strong>ПВЗ ${p.name}</strong></div><div><span>Дата</span><strong>${prettyDate(order.date)}</strong></div>${order.items.map(item=>`<div><span>${byId(item.id).name} × ${item.qty}</span><strong>${money(byId(item.id).price*item.qty)}</strong></div>`).join('')}<div><span>Итого</span><strong>${money(order.total)}</strong></div></div><button class="button button-primary" type="button" data-action="receipt-shelf">Открыть мою кладовку ${icon('arrow')}</button></div></div>`);
  }
  function pickupModal() {
    showModal('pickup',modalHeader('Получение рядом с домом','Сохраните удобный район получения')+`<div class="dialog-body">${PICKUPS.map(p=>`<button class="pickup-choice ${state.pickup===p.id?'is-selected':''}" type="button" data-action="set-pickup" data-id="${p.id}">${icon('pin')}<div><strong>ПВЗ ${p.name}</strong><span>${p.description}</span></div></button>`).join('')}<p class="small-note">Адрес точки и время готовности должны подтверждаться перед оплатой заказа.</p></div>`);
  }
  function checkout() {
    const dateInput=$('#checkout-date');
    if(!dateInput||!dateInput.reportValidity()||!validDate(dateInput.value)||dateInput.value<addDays(0)){toast('Выберите сегодняшнюю или будущую дату');return;}
    if(!state.cart.length)return;
    state.sequence+=1;
    const order={id:`KL-${String(state.sequence).padStart(4,'0')}`,items:state.cart.map(x=>({...x})),date:dateInput.value,pickup:state.pickup,total:total(state.cart)};
    if(checkoutSave)order.items.forEach(item=>addToShelf(item.id,item.qty));
    state.orders.push(order);state.orders=state.orders.slice(-20);state.cart=[];
    persist();update();receipt(order);
  }

  document.addEventListener('click',event => {
    const el=event.target.closest('[data-action]');
    if(!el)return;
    const action=el.dataset.action,id=el.dataset.id;
    if(el.tagName==='A')event.preventDefault();
    if(action==='close')closeModal();
    else if(action==='quiz')startQuiz();
    else if(action==='detail')showDetail(id);
    else if(action==='cart')showCart();
    else if(action==='pickup')pickupModal();
    else if(action==='set-pickup'){if(!PICKUPS.some(p=>p.id===id))return;state.pickup=id;persist();closeModal();toast('Точка получения сохранена');}
    else if(action==='save')toggleSave(id);
    else if(action==='add')addToCart(id);
    else if(action==='sample'){
      ['laundry-soft','dish-soft','clean-universal','bags'].forEach(x=>addToShelf(x));persist();update();if(dialog.open)closeModal();location.hash='shelf';toast('Базовый набор добавлен в кладовку');
    }
    else if(action==='clear-search'){category='all';query='';productLimit=12;$('#catalog-search').value='';renderProducts();}
    else if(action==='quantity'){
      const list=el.dataset.scope==='shelf'?state.shelf:state.cart;const item=list.find(x=>x.id===id);if(!item)return;
      const qty=item.qty+Number(el.dataset.delta);
      if(qty<1&&el.dataset.scope==='cart')state.cart=state.cart.filter(x=>x.id!==id);else item.qty=Math.min(20,Math.max(1,qty));
      persist();update();if(modalKind==='cart')showCart();
    }
    else if(action==='remove-shelf'){state.shelf=state.shelf.filter(x=>x.id!==id);persist();update();toast('Товар убран из кладовки');}
    else if(action==='remove-cart'){state.cart=state.cart.filter(x=>x.id!==id);persist();update();showCart();}
    else if(action==='repeat-shelf'){state.shelf.filter(x=>x.selected).forEach(x=>addToCart(x.id,x.qty,false));showCart();}
    else if(action==='skip-plan'){
      const item=state.shelf.find(x=>x.id===id);if(!item)return;item.nextDate=addDays(item.interval,item.nextDate<addDays(0)?addDays(0):item.nextDate);persist();renderPlans();renderShelf();toast('Ближайший цикл пропущен');
    }
    else if(action==='pause-plan'){const item=state.shelf.find(x=>x.id===id);if(!item)return;item.paused=!item.paused;persist();renderPlans();renderShelf();toast(item.paused?'Расписание на паузе':'Расписание возобновлено');}
    else if(action==='scenario')startScenario(id);
    else if(action==='all-scenarios'){showAllScenarios=!showAllScenarios;renderScenarios();}
    else if(action==='more-products'){productLimit+=12;renderProducts();}
    else if(action==='answer'){
      if(!activeScenario)return;
      const q=activeScenario.questions.find(q=>q.id===el.dataset.question);
      if(!q?.options?.some(o=>o.value===el.dataset.value))return;
      answers[q.id]=el.dataset.value;
      if(activeScenario.id==='lamp'&&answers.base==='E14'&&answers.brightness==='1100')delete answers.brightness;
      renderQuiz();
    }
    else if(action==='show-results'){
      if(!activeScenario||!SELECTION.complete(activeScenario,answers))return;
      recommendations=SELECTION.recommend(activeScenario,answers,PRODUCTS);
      state.scenarioAnswers[activeScenario.id]=JSON.parse(JSON.stringify(answers));persist();renderResults();
    }
    else if(action==='edit-answers')renderQuiz();
    else if(action==='quiz-save'){
      const selected=recommendations.filter(x=>x.selected);if(!selected.length)return;
      selected.forEach(x=>addToShelf(x.id));persist();update();closeModal();location.hash='shelf';toast('Подборка сохранена в вашей кладовке');
    }
    else if(action==='checkout')checkout();
    else if(action==='receipt-shelf'){closeModal();location.hash='shelf';}
    else if(action==='order-detail'){const order=state.orders.find(x=>x.id===id);if(order)receipt(order);}
    else if(action==='about')showModal('about',modalHeader('Кладовка: всё для домашних дел')+`<div class="dialog-body about-copy"><p>Выберите задачу, уточните важные параметры и сохраните подходящие товары. Знакомые покупки можно повторять из личной кладовки.</p><p>Для расходников есть календарь пополнения с переносом, паузой и ручным подтверждением. Долговечным вещам автоматически расписание не назначаем.</p><p>Сейчас это прототип: карточки и цены иллюстративные, заказы сохраняются только в браузере. Реальные остатки, партнёрские точки, оплата, уведомления и поставки не подключены.</p><p>Для запуска проверяются составы, материалы и совместимость реального ассортимента. Сервис не определяет медицинскую безопасность товара.</p></div>`);
    else if(action==='reset')showModal('reset',modalHeader('Начать заново?')+`<div class="dialog-body"><p>Удалим сохранённые товары, корзину, расписания и заказы только «Кладовки» в этом браузере.</p></div><div class="dialog-footer"><button class="text-link" type="button" data-action="close">Отменить</button><button class="button button-primary" type="button" data-action="confirm-reset">Очистить сохранённое</button></div>`);
    else if(action==='confirm-reset'){state=fresh();persist();update();closeModal();location.hash='home';toast('Ваша кладовка очищена');}
  });
  document.addEventListener('click',event=>{
    const b=event.target.closest('[data-category]');if(!b)return;category=b.dataset.category;productLimit=12;renderProducts();
  });
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href="#home"], a[data-route]');
    if(link && location.hash===link.getAttribute('href')){event.preventDefault();route();}
  });
  document.addEventListener('change',event=>{
    const input=event.target;
    if(input.dataset.selectShelf){const item=state.shelf.find(x=>x.id===input.dataset.selectShelf);if(item){item.selected=input.checked;persist();renderShelf();}}
    if(input.dataset.recommend){const item=recommendations.find(x=>x.id===input.dataset.recommend);if(item){item.selected=input.checked;renderResults();}}
    if(input.dataset.planField){
      const item=state.shelf.find(x=>x.id===input.dataset.id);if(!item)return;
      const field=input.dataset.planField;
      if(field==='nextDate'){if(!validDate(input.value)||input.value<addDays(0)){input.value=item.nextDate;toast('Выберите сегодняшнюю или будущую дату');return;}item.nextDate=input.value;}
      if(field==='interval'&&Object.keys(INTERVALS).map(Number).includes(Number(input.value)))item.interval=Number(input.value);
      if(field==='mode'&&['manual','remind','auto'].includes(input.value))item.mode=input.value;
      persist();renderPlans();renderShelf();toast('Расписание сохранено');
    }
    if(input.id==='checkout-pickup'&&PICKUPS.some(x=>x.id===input.value)){state.pickup=input.value;persist();}
    if(input.id==='checkout-date')checkoutDate=input.value;
    if(input.id==='checkout-save')checkoutSave=input.checked;
  });
  $('#catalog-search').addEventListener('input',event=>{query=event.target.value.trim();productLimit=12;renderProducts();});
  $('#catalog-sort').addEventListener('change',event=>{sort=event.target.value;productLimit=12;renderProducts();});
  document.addEventListener('input',event=>{const input=event.target;if(!input.dataset.dimension||!activeScenario)return;const q=activeScenario.questions.find(q=>q.id===input.dataset.question&&q.type==='dimensions');if(!q)return;answers[q.id]??={};answers[q.id][input.dataset.dimension]=input.value;const button=document.querySelector('[data-action="show-results"]');if(button)button.disabled=!SELECTION.complete(activeScenario,answers);});
  dialog.addEventListener('close',()=>{modalKind='';document.body.classList.remove('dialog-open');if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});});
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeModal();});
  window.addEventListener('hashchange',route);
  update();route();
})();
