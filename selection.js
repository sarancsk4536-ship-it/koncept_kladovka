/* Strict, explainable product matching. No incompatible fallback recommendations. */
(function(root) {
  'use strict';
  function complete(scenario, answers) {
    return scenario.questions.every(q => {
      const value=answers[q.id];
      if(q.type==='dimensions')return value && ['width','depth','height'].every(k=>Number.isFinite(Number(value[k]))&&Number(value[k])>0&&Number(value[k])<=300);
      return q.options.some(o=>o.value===value);
    });
  }
  function recommend(scenario, answers, products) {
    if(!complete(scenario,answers))return [];
    const candidates=products.filter(p=>{
      const rules=p.matches[scenario.id];if(!rules)return false;
      return scenario.questions.every(q=>{
        if(q.type==='dimensions'){
          const d=p.dimensions, a=answers[q.id];if(!d)return false;
          return d.height<=Number(a.height)&&((d.width<=Number(a.width)&&d.depth<=Number(a.depth))||(d.depth<=Number(a.width)&&d.width<=Number(a.depth)));
        }
        if(answers[q.id]==='any')return true;
        return Array.isArray(rules[q.id])&&rules[q.id].includes(answers[q.id]);
      });
    }).sort((a,b)=>{
      const rank={main:0,tool:1,extra:2};
      return rank[a.role]-rank[b.role]||a.price-b.price;
    });
    const primaryRole=scenario.id==='floor'&&answers.kit==='mop'?'tool':'main';
    if(!candidates.some(p=>p.role===primaryRole))return [];
    const selectedGroups=new Set();
    return candidates.slice(0,7).map(p=>{
      const group=p.role==='main'?'main':p.sourceCategory;
      const selected=!selectedGroups.has(group);selectedGroups.add(group);
      const reasons=[];
      for(const q of scenario.questions){
        if(q.type==='dimensions'){
          const d=p.dimensions,a=answers[q.id];
          const rotated=!(d.width<=Number(a.width)&&d.depth<=Number(a.depth));
          reasons.push(`Помещается в ${a.width} × ${a.depth} × ${a.height} см${rotated?' при повороте':''}`);
        }else if(answers[q.id]!=='any'){
          const option=q.options.find(o=>o.value===answers[q.id]);
          if(option)reasons.push(option.label);
        }
      }
      return {id:p.id,selected,reason:reasons.join(' · '),role:p.role};
    });
  }
  const api={complete,recommend};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  if(root)root.KLADOVKA_SELECTION=api;
})(typeof window!=='undefined'?window:null);
