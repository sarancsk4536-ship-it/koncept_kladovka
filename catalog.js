/* Кладовка: каталог, сценарии и правила сопоставления. */
window.KLADOVKA = {
  "categories": [
    {
      "id": "cleaning",
      "name": "Уборка",
      "icon": "spark",
      "source": "Убрать дом и вынести мусор"
    },
    {
      "id": "laundry",
      "name": "Стирка",
      "icon": "laundry",
      "source": "Постирать и погладить бельё"
    },
    {
      "id": "kitchen",
      "name": "Кухня",
      "icon": "kitchen",
      "source": "Приготовить еду / Сохранить продукты и очистить воду"
    },
    {
      "id": "storage",
      "name": "Хранение",
      "icon": "shelf",
      "source": "Организовать хранение и переезд"
    },
    {
      "id": "lighting",
      "name": "Свет и батарейки",
      "icon": "bulb",
      "source": "Осветить дом и подключить устройства"
    },
    {
      "id": "repair",
      "name": "Мелкий ремонт",
      "icon": "tool",
      "source": "Сделать мелкий ремонт дома"
    },
    {
      "id": "shoes",
      "name": "Уход за обувью",
      "icon": "shoe",
      "source": "Ухаживать за одеждой и обувью"
    },
    {
      "id": "pets",
      "name": "Для питомцев",
      "icon": "paw",
      "source": "Ухаживать за питомцем"
    },
    {
      "id": "plants",
      "name": "Для растений",
      "icon": "leaf",
      "source": "Выращивать растения и ухаживать за участком"
    }
  ],
  "scenarios": [
    {
      "id": "laundry",
      "title": "Постирать одежду",
      "category": "laundry",
      "icon": "laundry",
      "description": "Для повседневных вещей и особых тканей",
      "sourceTask": "Постирать повседневную одежду / Постирать шерсть, деликатные и спортивные вещи",
      "questions": [
        {
          "id": "fabric",
          "title": "Какие вещи стираем?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "daily",
              "label": "Цветные повседневные"
            },
            {
              "value": "white",
              "label": "Белое бельё"
            },
            {
              "value": "wool",
              "label": "Шерсть и шёлк"
            },
            {
              "value": "sport",
              "label": "Спортивные вещи и мембрана"
            }
          ]
        },
        {
          "id": "format",
          "title": "Какой формат удобнее?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "gel",
              "label": "Гель"
            },
            {
              "value": "powder",
              "label": "Порошок"
            },
            {
              "value": "any",
              "label": "Не принципиально"
            }
          ]
        },
        {
          "id": "scent",
          "title": "Как относитесь к аромату?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "any",
              "label": "Лёгкий аромат подходит"
            },
            {
              "value": "none",
              "label": "Без добавленной отдушки"
            }
          ]
        }
      ]
    },
    {
      "id": "dishes",
      "title": "Вымыть посуду вручную",
      "category": "kitchen",
      "icon": "kitchen",
      "description": "Средство и подходящие губки",
      "sourceTask": "Вымыть посуду вручную",
      "questions": [
        {
          "id": "surface",
          "title": "Какая посуда?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "normal",
              "label": "Обычная посуда"
            },
            {
              "value": "delicate",
              "label": "Антипригарная или деликатная"
            }
          ]
        },
        {
          "id": "kit",
          "title": "Что подберём?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "liquid",
              "label": "Только средство"
            },
            {
              "value": "set",
              "label": "Средство и губки"
            }
          ]
        },
        {
          "id": "scent",
          "title": "Отдушка в средстве",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "any",
              "label": "Не принципиально"
            },
            {
              "value": "none",
              "label": "Предпочитаю без отдушки"
            }
          ]
        }
      ]
    },
    {
      "id": "dishwasher",
      "title": "Пополнить посудомойку",
      "category": "kitchen",
      "icon": "kitchen",
      "description": "Средство для мытья, соль и ополаскиватель",
      "sourceTask": "Вымыть посуду в посудомоечной машине",
      "questions": [
        {
          "id": "format",
          "title": "Чем удобнее пользоваться?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "tabs",
              "label": "Таблетками"
            },
            {
              "value": "powder",
              "label": "Порошком"
            }
          ]
        },
        {
          "id": "salt",
          "title": "Добавить соль?",
          "hint": "Для машины с предусмотренным отсеком для соли.",
          "type": "choice",
          "options": [
            {
              "value": "yes",
              "label": "Да, её пора пополнить"
            },
            {
              "value": "no",
              "label": "Нет, пока хватает"
            }
          ]
        },
        {
          "id": "rinse",
          "title": "Нужен ополаскиватель?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "yes",
              "label": "Да"
            },
            {
              "value": "no",
              "label": "Нет"
            }
          ]
        }
      ]
    },
    {
      "id": "kitchen-clean",
      "title": "Отмыть кухню от жира",
      "category": "cleaning",
      "icon": "spark",
      "description": "Подбор по поверхности и загрязнению",
      "sourceTask": "Удалить жир на кухне",
      "questions": [
        {
          "id": "surface",
          "title": "Что будем очищать?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "ceramic",
              "label": "Стеклокерамику"
            },
            {
              "value": "steel",
              "label": "Нержавеющую сталь"
            },
            {
              "value": "enamel",
              "label": "Эмаль"
            }
          ]
        },
        {
          "id": "soil",
          "title": "Насколько сильное загрязнение?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "daily",
              "label": "Свежие следы после готовки"
            },
            {
              "value": "fat",
              "label": "Застарелый жир"
            }
          ]
        },
        {
          "id": "format",
          "title": "Какой формат предпочитаете?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "spray",
              "label": "Спрей"
            },
            {
              "value": "paste",
              "label": "Пасту"
            },
            {
              "value": "any",
              "label": "Не принципиально"
            }
          ]
        }
      ]
    },
    {
      "id": "bathroom",
      "title": "Убрать налёт в ванной",
      "category": "cleaning",
      "icon": "drop",
      "description": "С учётом материала ванны и раковины",
      "sourceTask": "Вымыть раковину и кухонный смеситель",
      "questions": [
        {
          "id": "surface",
          "title": "Какая поверхность?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "ceramic",
              "label": "Керамика или плитка"
            },
            {
              "value": "acrylic",
              "label": "Акрил"
            },
            {
              "value": "stone",
              "label": "Натуральный камень"
            }
          ]
        },
        {
          "id": "soil",
          "title": "Что нужно убрать?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "lime",
              "label": "Известковый налёт"
            },
            {
              "value": "soap",
              "label": "Мыльные следы"
            }
          ]
        },
        {
          "id": "format",
          "title": "Формат средства",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "spray",
              "label": "Спрей"
            },
            {
              "value": "gel",
              "label": "Гель"
            },
            {
              "value": "any",
              "label": "Не принципиально"
            }
          ]
        }
      ]
    },
    {
      "id": "floor",
      "title": "Вымыть пол",
      "category": "cleaning",
      "icon": "home",
      "description": "Средство и инвентарь под покрытие",
      "sourceTask": "Вымыть пол",
      "questions": [
        {
          "id": "cover",
          "title": "Какое покрытие?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "laminate",
              "label": "Ламинат"
            },
            {
              "value": "wood",
              "label": "Паркет или дерево"
            },
            {
              "value": "tile",
              "label": "Плитка или керамогранит"
            }
          ]
        },
        {
          "id": "kit",
          "title": "Что вам нужно?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "liquid",
              "label": "Средство для пола"
            },
            {
              "value": "mop",
              "label": "Швабра"
            },
            {
              "value": "set",
              "label": "Средство и швабра"
            }
          ]
        },
        {
          "id": "scent",
          "title": "Запах после уборки",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "any",
              "label": "Не принципиально"
            },
            {
              "value": "none",
              "label": "Предпочитаю без отдушки"
            }
          ]
        }
      ]
    },
    {
      "id": "food",
      "title": "Сохранить продукты",
      "category": "kitchen",
      "icon": "box",
      "description": "Ёмкость под задачу, объём и материал",
      "sourceTask": "Сохранить приготовленную еду / Заморозить продукты / Взять еду и напиток с собой",
      "questions": [
        {
          "id": "purpose",
          "title": "Для чего нужна ёмкость?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "fridge",
              "label": "Хранить в холодильнике"
            },
            {
              "value": "freezer",
              "label": "Замораживать"
            },
            {
              "value": "lunch",
              "label": "Брать еду с собой"
            }
          ]
        },
        {
          "id": "volume",
          "title": "Какой объём?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "0.6",
              "label": "Около 600 мл"
            },
            {
              "value": "1",
              "label": "Около 1 л"
            },
            {
              "value": "2",
              "label": "Около 2 л"
            }
          ]
        },
        {
          "id": "material",
          "title": "Какой материал удобнее?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "plastic",
              "label": "Пластик"
            },
            {
              "value": "glass",
              "label": "Стекло"
            },
            {
              "value": "any",
              "label": "Не принципиально"
            }
          ]
        }
      ]
    },
    {
      "id": "storage",
      "title": "Разложить вещи по местам",
      "category": "storage",
      "icon": "shelf",
      "description": "Под размер ящика, полки или шкафа",
      "sourceTask": "Разложить вещи по ящикам / Организовать хранение на полках / Организовать шкаф с одеждой",
      "questions": [
        {
          "id": "place",
          "title": "Куда нужен органайзер?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "drawer",
              "label": "Внутрь ящика"
            },
            {
              "value": "shelf",
              "label": "На полку"
            },
            {
              "value": "wardrobe",
              "label": "В шкаф"
            }
          ]
        },
        {
          "id": "content",
          "title": "Что будем хранить?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "small",
              "label": "Мелочи"
            },
            {
              "value": "cutlery",
              "label": "Столовые приборы"
            },
            {
              "value": "clothes",
              "label": "Одежду и текстиль"
            }
          ]
        },
        {
          "id": "dimensions",
          "title": "Сколько места доступно?",
          "type": "dimensions",
          "hint": "Внутренние размеры свободного места, в сантиметрах. Подберём то, что помещается."
        }
      ]
    },
    {
      "id": "lamp",
      "title": "Заменить лампочку",
      "category": "lighting",
      "icon": "bulb",
      "description": "Совпадут цоколь, яркость и оттенок",
      "sourceTask": "Заменить лампу и настроить свет",
      "questions": [
        {
          "id": "base",
          "title": "Какой цоколь на старой лампе?",
          "hint": "Ориентируйтесь на маркировку лампы или светильника.",
          "type": "choice",
          "options": [
            {
              "value": "E27",
              "label": "E27 · широкий"
            },
            {
              "value": "E14",
              "label": "E14 · узкий"
            }
          ]
        },
        {
          "id": "brightness",
          "title": "Сколько света нужно?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "450",
              "label": "450 лм · мягкий свет"
            },
            {
              "value": "800",
              "label": "800 лм · обычная яркость"
            },
            {
              "value": "1100",
              "label": "1100 лм · ярче"
            }
          ]
        },
        {
          "id": "temperature",
          "title": "Какой оттенок нравится?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "2700",
              "label": "Тёплый, 2700 К"
            },
            {
              "value": "4000",
              "label": "Нейтральный, 4000 К"
            }
          ]
        }
      ]
    },
    {
      "id": "batteries",
      "title": "Заменить батарейки",
      "category": "lighting",
      "icon": "battery",
      "description": "Точный типоразмер и нужная упаковка",
      "sourceTask": "Заменить батарейки и аккумуляторы",
      "questions": [
        {
          "id": "size",
          "title": "Что указано на старой батарейке?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "AA",
              "label": "AA · пальчиковая"
            },
            {
              "value": "AAA",
              "label": "AAA · мизинчиковая"
            },
            {
              "value": "CR2032",
              "label": "CR2032 · круглая"
            }
          ]
        },
        {
          "id": "device",
          "title": "Для какого устройства?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "remote",
              "label": "Пульт или часы"
            },
            {
              "value": "toy",
              "label": "Игрушка"
            },
            {
              "value": "sensor",
              "label": "Весы или датчик"
            }
          ]
        },
        {
          "id": "pack",
          "title": "Сколько штук нужно?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "2",
              "label": "2 штуки"
            },
            {
              "value": "4",
              "label": "4 штуки"
            }
          ]
        }
      ]
    },
    {
      "id": "glue",
      "title": "Склеить бытовую вещь",
      "category": "repair",
      "icon": "tool",
      "description": "С учётом материалов и условий",
      "sourceTask": "Склеить и восстановить бытовую вещь",
      "questions": [
        {
          "id": "material",
          "title": "Что склеиваем?",
          "hint": "Для пластика нужно уточнить его маркировку: универсальные составы подходят не всем полимерам.",
          "type": "choice",
          "options": [
            {
              "value": "wood",
              "label": "Дерево с деревом"
            },
            {
              "value": "ceramic",
              "label": "Керамику с керамикой"
            },
            {
              "value": "plastic",
              "label": "Жёсткий пластик"
            }
          ]
        },
        {
          "id": "moisture",
          "title": "Будет ли контакт с влагой?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "dry",
              "label": "Нет, внутри сухого помещения"
            },
            {
              "value": "wet",
              "label": "Да, возможна влага"
            }
          ]
        },
        {
          "id": "seam",
          "title": "Важен внешний вид шва?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "clear",
              "label": "Нужен прозрачный"
            },
            {
              "value": "any",
              "label": "Не принципиально"
            }
          ]
        }
      ]
    },
    {
      "id": "shoes",
      "title": "Почистить и защитить обувь",
      "category": "shoes",
      "icon": "shoe",
      "description": "Средство под материал и цвет",
      "sourceTask": "Почистить и защитить обувь",
      "questions": [
        {
          "id": "material",
          "title": "Из чего сделана обувь?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "leather",
              "label": "Гладкая кожа"
            },
            {
              "value": "suede",
              "label": "Замша или нубук"
            },
            {
              "value": "textile",
              "label": "Текстиль"
            }
          ]
        },
        {
          "id": "task",
          "title": "Какая задача?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "clean",
              "label": "Очистить"
            },
            {
              "value": "protect",
              "label": "Ухаживать и защитить"
            }
          ]
        },
        {
          "id": "color",
          "title": "Какой цвет средства нужен?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "neutral",
              "label": "Бесцветный"
            },
            {
              "value": "black",
              "label": "Чёрный"
            }
          ]
        }
      ]
    },
    {
      "id": "litter",
      "title": "Пополнить кошачий туалет",
      "category": "pets",
      "icon": "paw",
      "description": "Привычный тип наполнителя и объём",
      "sourceTask": "Организовать туалет питомца",
      "questions": [
        {
          "id": "type",
          "title": "Какой наполнитель привыкли использовать?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "clump",
              "label": "Комкующийся"
            },
            {
              "value": "wood",
              "label": "Древесный"
            },
            {
              "value": "silica",
              "label": "Силикагелевый"
            }
          ]
        },
        {
          "id": "volume",
          "title": "Какой объём удобнее?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "5",
              "label": "5 л"
            },
            {
              "value": "10",
              "label": "10 л"
            }
          ]
        },
        {
          "id": "scent",
          "title": "Ароматизация",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "any",
              "label": "Не принципиально"
            },
            {
              "value": "none",
              "label": "Без добавленной отдушки"
            }
          ]
        }
      ]
    },
    {
      "id": "plant",
      "title": "Пересадить растение",
      "category": "plants",
      "icon": "leaf",
      "description": "Грунт и горшок под ваше растение",
      "sourceTask": "Посадить и пересадить комнатное растение",
      "questions": [
        {
          "id": "plant",
          "title": "Какое растение?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "universal",
              "label": "Обычное комнатное"
            },
            {
              "value": "succulent",
              "label": "Кактус или суккулент"
            },
            {
              "value": "orchid",
              "label": "Орхидея"
            }
          ]
        },
        {
          "id": "diameter",
          "title": "Какой диаметр нового горшка?",
          "hint": "Выберите уже определённый размер. Он зависит от растения и корневой системы.",
          "type": "choice",
          "options": [
            {
              "value": "12",
              "label": "12 см"
            },
            {
              "value": "16",
              "label": "16 см"
            },
            {
              "value": "20",
              "label": "20 см"
            }
          ]
        },
        {
          "id": "kit",
          "title": "Что нужно для пересадки?",
          "hint": "",
          "type": "choice",
          "options": [
            {
              "value": "soil",
              "label": "Только грунт"
            },
            {
              "value": "pot",
              "label": "Грунт и горшок"
            },
            {
              "value": "full",
              "label": "Грунт, горшок и дренаж"
            }
          ]
        }
      ]
    }
  ],
  "products": [
    {
      "id": "laundry-soft",
      "name": "Гель для цветного белья без отдушки",
      "category": "laundry",
      "amount": "1 л",
      "price": 590,
      "art": "bottle-sage",
      "sourceCategory": "Гели для стирки",
      "matches": {
        "laundry": {
          "fabric": [
            "daily",
            "white"
          ],
          "format": [
            "gel"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Для цветного белья",
        "Без добавленной отдушки",
        "Гель"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Для цветного белья",
      "line": "Стирка",
      "description": "Для цветного белья; Без добавленной отдушки; Гель."
    },
    {
      "id": "laundry-daily",
      "name": "Гель для цветного белья",
      "category": "laundry",
      "amount": "1 л",
      "price": 450,
      "art": "bottle-clay",
      "sourceCategory": "Гели для стирки",
      "matches": {
        "laundry": {
          "fabric": [
            "daily"
          ],
          "format": [
            "gel"
          ],
          "scent": [
            "any"
          ]
        }
      },
      "specs": [
        "Для цветного белья",
        "С отдушкой",
        "Гель"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Для цветного белья",
      "line": "Стирка",
      "description": "Для цветного белья; С отдушкой; Гель."
    },
    {
      "id": "laundry-refill",
      "name": "Гель для стирки, мягкая упаковка",
      "category": "laundry",
      "amount": "1,5 л",
      "price": 690,
      "art": "pouch-sage",
      "sourceCategory": "Гели для стирки",
      "matches": {
        "laundry": {
          "fabric": [
            "daily"
          ],
          "format": [
            "gel"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Для цветного белья",
        "Без добавленной отдушки",
        "Гель"
      ],
      "repeatDays": 42,
      "volume": 1.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Для цветного белья",
      "line": "Стирка",
      "description": "Для цветного белья; Без добавленной отдушки; Гель."
    },
    {
      "id": "wash-white",
      "name": "Порошок для белого белья",
      "category": "laundry",
      "amount": "1 кг",
      "price": 420,
      "art": "box-sage",
      "sourceCategory": "Порошки для стирки",
      "matches": {
        "laundry": {
          "fabric": [
            "white"
          ],
          "format": [
            "powder"
          ],
          "scent": [
            "any"
          ]
        }
      },
      "specs": [
        "Для белого белья",
        "С отдушкой",
        "Порошок"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "кг",
      "role": "main",
      "dimensions": null,
      "tag": "Для белого белья",
      "line": "Стирка",
      "description": "Для белого белья; С отдушкой; Порошок."
    },
    {
      "id": "wash-color",
      "name": "Порошок для цветного белья",
      "category": "laundry",
      "amount": "1 кг",
      "price": 390,
      "art": "box-sage",
      "sourceCategory": "Порошки для стирки",
      "matches": {
        "laundry": {
          "fabric": [
            "daily"
          ],
          "format": [
            "powder"
          ],
          "scent": [
            "any"
          ]
        }
      },
      "specs": [
        "Для цветного белья",
        "С отдушкой",
        "Порошок"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "кг",
      "role": "main",
      "dimensions": null,
      "tag": "Для цветного белья",
      "line": "Стирка",
      "description": "Для цветного белья; С отдушкой; Порошок."
    },
    {
      "id": "wash-wool",
      "name": "Гель для шерсти и шёлка",
      "category": "laundry",
      "amount": "1 л",
      "price": 520,
      "art": "bottle-clay",
      "sourceCategory": "Средства для шерсти и деликатных тканей",
      "matches": {
        "laundry": {
          "fabric": [
            "wool"
          ],
          "format": [
            "gel"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Шерсть и шёлк",
        "Без добавленной отдушки",
        "Гель"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Шерсть и шёлк",
      "line": "Стирка",
      "description": "Шерсть и шёлк; Без добавленной отдушки; Гель."
    },
    {
      "id": "wash-sport",
      "name": "Гель для спортивной одежды",
      "category": "laundry",
      "amount": "1 л",
      "price": 640,
      "art": "bottle-sage",
      "sourceCategory": "Средства для мембран и спортивной одежды",
      "matches": {
        "laundry": {
          "fabric": [
            "sport"
          ],
          "format": [
            "gel"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Спортивные ткани",
        "Без добавленной отдушки",
        "Гель"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Спортивные ткани",
      "line": "Стирка",
      "description": "Спортивные ткани; Без добавленной отдушки; Гель."
    },
    {
      "id": "dish-soft",
      "name": "Средство для мытья посуды без отдушки",
      "category": "kitchen",
      "amount": "500 мл",
      "price": 290,
      "art": "pump-amber",
      "sourceCategory": "Средства для ручного мытья посуды",
      "matches": {
        "dishes": {
          "surface": [
            "normal",
            "delicate"
          ],
          "kit": [
            "liquid",
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Ручное мытьё",
        "Без добавленной отдушки",
        "Флакон с дозатором"
      ],
      "repeatDays": 28,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Ручное мытьё",
      "line": "Кухня",
      "description": "Ручное мытьё; Без добавленной отдушки; Флакон с дозатором."
    },
    {
      "id": "dish-refill",
      "name": "Средство для мытья посуды",
      "category": "kitchen",
      "amount": "1 л · мягкая упаковка",
      "price": 390,
      "art": "pouch-cream",
      "sourceCategory": "Средства для ручного мытья посуды",
      "matches": {
        "dishes": {
          "surface": [
            "normal",
            "delicate"
          ],
          "kit": [
            "liquid",
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Ручное мытьё",
        "Без добавленной отдушки",
        "Мягкая упаковка"
      ],
      "repeatDays": 56,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Ручное мытьё",
      "line": "Кухня",
      "description": "Ручное мытьё; Без добавленной отдушки; Мягкая упаковка."
    },
    {
      "id": "dish-lemon",
      "name": "Гель для мытья посуды «Лимон»",
      "category": "kitchen",
      "amount": "500 мл",
      "price": 190,
      "art": "bottle-clay",
      "sourceCategory": "Средства для ручного мытья посуды",
      "matches": {
        "dishes": {
          "surface": [
            "normal"
          ],
          "kit": [
            "liquid",
            "set"
          ],
          "scent": [
            "any"
          ]
        }
      },
      "specs": [
        "Ручное мытьё",
        "С ароматом лимона",
        "Флакон 500 мл"
      ],
      "repeatDays": 28,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Ручное мытьё",
      "line": "Кухня",
      "description": "Ручное мытьё; С ароматом лимона; Флакон 500 мл."
    },
    {
      "id": "sponges",
      "name": "Губки для мытья посуды",
      "category": "kitchen",
      "amount": "5 шт.",
      "price": 140,
      "art": "sponges",
      "sourceCategory": "Губки для посуды",
      "matches": {
        "dishes": {
          "surface": [
            "normal"
          ],
          "kit": [
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Обычная посуда",
        "Средняя жёсткость",
        "5 штук"
      ],
      "repeatDays": 56,
      "volume": 5,
      "unit": "шт.",
      "role": "extra",
      "dimensions": null,
      "tag": "Обычная посуда",
      "line": "Кухня",
      "description": "Обычная посуда; Средняя жёсткость; 5 штук."
    },
    {
      "id": "sponges-soft",
      "name": "Мягкие губки для деликатной посуды",
      "category": "kitchen",
      "amount": "3 шт.",
      "price": 170,
      "art": "sponges",
      "sourceCategory": "Губки для посуды",
      "matches": {
        "dishes": {
          "surface": [
            "delicate"
          ],
          "kit": [
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Деликатная посуда",
        "Мягкая рабочая сторона",
        "3 штуки"
      ],
      "repeatDays": 56,
      "volume": 3,
      "unit": "шт.",
      "role": "extra",
      "dimensions": null,
      "tag": "Деликатная посуда",
      "line": "Кухня",
      "description": "Деликатная посуда; Мягкая рабочая сторона; 3 штуки."
    },
    {
      "id": "dish-tabs",
      "name": "Таблетки для посудомоечной машины",
      "category": "kitchen",
      "amount": "30 шт.",
      "price": 690,
      "art": "box-sage",
      "sourceCategory": "Средства для посудомоечных машин",
      "matches": {
        "dishwasher": {
          "format": [
            "tabs"
          ],
          "salt": [
            "yes",
            "no"
          ],
          "rinse": [
            "yes",
            "no"
          ]
        }
      },
      "specs": [
        "Для посудомоечной машины",
        "Таблетки",
        "30 штук"
      ],
      "repeatDays": 42,
      "volume": 30,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "Для посудомоечной машины",
      "line": "Кухня",
      "description": "Для посудомоечной машины; Таблетки; 30 штук."
    },
    {
      "id": "dish-powder",
      "name": "Порошок для посудомоечной машины",
      "category": "kitchen",
      "amount": "1 кг",
      "price": 490,
      "art": "box-sage",
      "sourceCategory": "Средства для посудомоечных машин",
      "matches": {
        "dishwasher": {
          "format": [
            "powder"
          ],
          "salt": [
            "yes",
            "no"
          ],
          "rinse": [
            "yes",
            "no"
          ]
        }
      },
      "specs": [
        "Для посудомоечной машины",
        "Порошок",
        "Дозирование по инструкции"
      ],
      "repeatDays": 42,
      "volume": 1,
      "unit": "кг",
      "role": "main",
      "dimensions": null,
      "tag": "Для посудомоечной машины",
      "line": "Кухня",
      "description": "Для посудомоечной машины; Порошок; Дозирование по инструкции."
    },
    {
      "id": "dish-salt",
      "name": "Соль для посудомоечной машины",
      "category": "kitchen",
      "amount": "1 кг",
      "price": 190,
      "art": "box-sage",
      "sourceCategory": "Соль для посудомоечных машин",
      "matches": {
        "dishwasher": {
          "format": [
            "tabs",
            "powder"
          ],
          "salt": [
            "yes"
          ],
          "rinse": [
            "yes",
            "no"
          ]
        }
      },
      "specs": [
        "Для солевого отсека",
        "1 кг",
        "Упаковка для пополнения"
      ],
      "repeatDays": 182,
      "volume": 1,
      "unit": "кг",
      "role": "extra",
      "dimensions": null,
      "tag": "Для солевого отсека",
      "line": "Кухня",
      "description": "Для солевого отсека; 1 кг; Упаковка для пополнения."
    },
    {
      "id": "dish-rinse",
      "name": "Ополаскиватель для посудомоечной машины",
      "category": "kitchen",
      "amount": "500 мл",
      "price": 290,
      "art": "bottle-clay",
      "sourceCategory": "Ополаскиватели для посудомоечных машин",
      "matches": {
        "dishwasher": {
          "format": [
            "tabs",
            "powder"
          ],
          "salt": [
            "yes",
            "no"
          ],
          "rinse": [
            "yes"
          ]
        }
      },
      "specs": [
        "Для отсека ополаскивателя",
        "500 мл",
        "Дозирование по инструкции"
      ],
      "repeatDays": 84,
      "volume": 0.5,
      "unit": "л",
      "role": "extra",
      "dimensions": null,
      "tag": "Для отсека ополаскивателя",
      "line": "Кухня",
      "description": "Для отсека ополаскивателя; 500 мл; Дозирование по инструкции."
    },
    {
      "id": "grease-daily",
      "name": "Спрей для ежедневной уборки кухни",
      "category": "cleaning",
      "amount": "500 мл",
      "price": 270,
      "art": "spray-clay",
      "sourceCategory": "Жироудалители",
      "matches": {
        "kitchen-clean": {
          "surface": [
            "ceramic",
            "steel",
            "enamel"
          ],
          "soil": [
            "daily"
          ],
          "format": [
            "spray"
          ]
        }
      },
      "specs": [
        "Спрей",
        "Стеклокерамика / Нержавейка / Эмаль",
        "Ежедневная уборка"
      ],
      "repeatDays": 91,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Спрей",
      "line": "Уборка",
      "description": "Спрей; Стеклокерамика / Нержавейка / Эмаль; Ежедневная уборка."
    },
    {
      "id": "grease-strong",
      "name": "Средство от жира для плиты",
      "category": "cleaning",
      "amount": "500 мл",
      "price": 390,
      "art": "spray-clay",
      "sourceCategory": "Жироудалители",
      "matches": {
        "kitchen-clean": {
          "surface": [
            "steel",
            "enamel"
          ],
          "soil": [
            "fat"
          ],
          "format": [
            "spray"
          ]
        }
      },
      "specs": [
        "Спрей",
        "Нержавейка / Эмаль",
        "Удаление жира"
      ],
      "repeatDays": 91,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Спрей",
      "line": "Уборка",
      "description": "Спрей; Нержавейка / Эмаль; Удаление жира."
    },
    {
      "id": "grease-ceramic",
      "name": "Паста для стеклокерамической плиты",
      "category": "cleaning",
      "amount": "250 г",
      "price": 420,
      "art": "jar",
      "sourceCategory": "Чистящие порошки и пасты",
      "matches": {
        "kitchen-clean": {
          "surface": [
            "ceramic"
          ],
          "soil": [
            "daily",
            "fat"
          ],
          "format": [
            "paste"
          ]
        }
      },
      "specs": [
        "Паста",
        "Стеклокерамика",
        "Удаление жира"
      ],
      "repeatDays": 91,
      "volume": 0.25,
      "unit": "кг",
      "role": "main",
      "dimensions": null,
      "tag": "Паста",
      "line": "Уборка",
      "description": "Паста; Стеклокерамика; Удаление жира."
    },
    {
      "id": "grease-paste",
      "name": "Чистящая паста для кухни",
      "category": "cleaning",
      "amount": "250 г",
      "price": 310,
      "art": "jar",
      "sourceCategory": "Чистящие порошки и пасты",
      "matches": {
        "kitchen-clean": {
          "surface": [
            "steel",
            "enamel"
          ],
          "soil": [
            "daily",
            "fat"
          ],
          "format": [
            "paste"
          ]
        }
      },
      "specs": [
        "Паста",
        "Нержавейка / Эмаль",
        "Удаление жира"
      ],
      "repeatDays": 91,
      "volume": 0.25,
      "unit": "кг",
      "role": "main",
      "dimensions": null,
      "tag": "Паста",
      "line": "Уборка",
      "description": "Паста; Нержавейка / Эмаль; Удаление жира."
    },
    {
      "id": "bath-tile",
      "name": "Спрей от известкового налёта",
      "category": "cleaning",
      "amount": "500 мл",
      "price": 350,
      "art": "spray-sage",
      "sourceCategory": "Средства от налёта для сантехники",
      "matches": {
        "bathroom": {
          "surface": [
            "ceramic"
          ],
          "soil": [
            "lime",
            "soap"
          ],
          "format": [
            "spray"
          ]
        }
      },
      "specs": [
        "Керамика и плитка",
        "Спрей",
        "Использование по инструкции"
      ],
      "repeatDays": 56,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Керамика и плитка",
      "line": "Уборка",
      "description": "Керамика и плитка; Спрей; Использование по инструкции."
    },
    {
      "id": "bath-acrylic",
      "name": "Гель для акриловых ванн",
      "category": "cleaning",
      "amount": "500 мл",
      "price": 390,
      "art": "bottle-clay",
      "sourceCategory": "Средства от налёта для сантехники",
      "matches": {
        "bathroom": {
          "surface": [
            "acrylic"
          ],
          "soil": [
            "lime",
            "soap"
          ],
          "format": [
            "gel"
          ]
        }
      },
      "specs": [
        "Для акрила",
        "Гель",
        "Использование по инструкции"
      ],
      "repeatDays": 56,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Для акрила",
      "line": "Уборка",
      "description": "Для акрила; Гель; Использование по инструкции."
    },
    {
      "id": "bath-stone",
      "name": "Средство для ухода за натуральным камнем",
      "category": "cleaning",
      "amount": "500 мл",
      "price": 590,
      "art": "spray-sage",
      "sourceCategory": "Средства для камня и деликатных поверхностей",
      "matches": {
        "bathroom": {
          "surface": [
            "stone"
          ],
          "soil": [
            "soap"
          ],
          "format": [
            "spray"
          ]
        }
      },
      "specs": [
        "Для натурального камня",
        "Спрей",
        "Использование по инструкции"
      ],
      "repeatDays": 56,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Для натурального камня",
      "line": "Уборка",
      "description": "Для натурального камня; Спрей; Использование по инструкции."
    },
    {
      "id": "bath-soap",
      "name": "Гель для уборки ванной",
      "category": "cleaning",
      "amount": "500 мл",
      "price": 290,
      "art": "bottle-clay",
      "sourceCategory": "Средства от налёта для сантехники",
      "matches": {
        "bathroom": {
          "surface": [
            "ceramic"
          ],
          "soil": [
            "soap"
          ],
          "format": [
            "gel"
          ]
        }
      },
      "specs": [
        "Керамика и плитка",
        "Гель",
        "Использование по инструкции"
      ],
      "repeatDays": 56,
      "volume": 0.5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Керамика и плитка",
      "line": "Уборка",
      "description": "Керамика и плитка; Гель; Использование по инструкции."
    },
    {
      "id": "clean-universal",
      "name": "Средство для ламината без отдушки",
      "category": "cleaning",
      "amount": "1 л",
      "price": 350,
      "art": "bottle-sage",
      "sourceCategory": "Средства для пола",
      "matches": {
        "floor": {
          "cover": [
            "laminate"
          ],
          "kit": [
            "liquid",
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Ламинат",
        "Без отдушки",
        "Для мытья пола"
      ],
      "repeatDays": 56,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Ламинат",
      "line": "Уборка",
      "description": "Ламинат; Без отдушки; Для мытья пола."
    },
    {
      "id": "clean-daily",
      "name": "Средство для плитки и керамогранита",
      "category": "cleaning",
      "amount": "1 л",
      "price": 270,
      "art": "bottle-clay",
      "sourceCategory": "Средства для пола",
      "matches": {
        "floor": {
          "cover": [
            "tile"
          ],
          "kit": [
            "liquid",
            "set"
          ],
          "scent": [
            "any"
          ]
        }
      },
      "specs": [
        "Плитка и керамогранит",
        "С отдушкой",
        "Для мытья пола"
      ],
      "repeatDays": 56,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Плитка и керамогранит",
      "line": "Уборка",
      "description": "Плитка и керамогранит; С отдушкой; Для мытья пола."
    },
    {
      "id": "floor-wood",
      "name": "Средство для паркета и деревянного пола",
      "category": "cleaning",
      "amount": "1 л",
      "price": 490,
      "art": "bottle-sage",
      "sourceCategory": "Средства для пола",
      "matches": {
        "floor": {
          "cover": [
            "wood"
          ],
          "kit": [
            "liquid",
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Паркет и дерево",
        "Без отдушки",
        "Для мытья пола"
      ],
      "repeatDays": 56,
      "volume": 1,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Паркет и дерево",
      "line": "Уборка",
      "description": "Паркет и дерево; Без отдушки; Для мытья пола."
    },
    {
      "id": "floor-mop",
      "name": "Швабра с плоской насадкой",
      "category": "cleaning",
      "amount": "Насадка 40 см",
      "price": 1190,
      "art": "mop",
      "sourceCategory": "Швабры и сменные насадки",
      "matches": {
        "floor": {
          "cover": [
            "laminate",
            "wood",
            "tile"
          ],
          "kit": [
            "mop",
            "set"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Плоская насадка",
        "Ширина 40 см",
        "Ручка регулируется"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "tool",
      "dimensions": null,
      "tag": "Плоская насадка",
      "line": "Уборка",
      "description": "Плоская насадка; Ширина 40 см; Ручка регулируется."
    },
    {
      "id": "cloth-set",
      "name": "Салфетки из микрофибры",
      "category": "cleaning",
      "amount": "3 шт.",
      "price": 240,
      "art": "cloth",
      "sourceCategory": "Салфетки из микрофибры",
      "matches": {},
      "specs": [
        "Для разных зон дома",
        "30 × 30 см",
        "3 штуки"
      ],
      "repeatDays": 182,
      "volume": 3,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "Для разных зон дома",
      "line": "Уборка",
      "description": "Для разных зон дома; 30 × 30 см; 3 штуки."
    },
    {
      "id": "bags",
      "name": "Мешки для мусора с завязками",
      "category": "cleaning",
      "amount": "35 л · 20 шт.",
      "price": 190,
      "art": "roll-sage",
      "sourceCategory": "Мешки для мусора",
      "matches": {},
      "specs": [
        "Объём 35 л",
        "С завязками",
        "20 штук"
      ],
      "repeatDays": 28,
      "volume": 20,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "Объём 35 л",
      "line": "Уборка",
      "description": "Объём 35 л; С завязками; 20 штук."
    },
    {
      "id": "food-plastic-0.6-fridge",
      "name": "Контейнер для продуктов",
      "category": "kitchen",
      "amount": "0,6 л",
      "price": 250,
      "art": "container",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "fridge"
          ],
          "volume": [
            "0.6"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Пластик",
        "Хранение в холодильнике",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Пластик",
      "line": "Кухня",
      "description": "Пластик; Хранение в холодильнике; Крышка с защёлками."
    },
    {
      "id": "food-plastic-0.6-freezer",
      "name": "Контейнер для заморозки",
      "category": "kitchen",
      "amount": "0,6 л",
      "price": 250,
      "art": "container",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "freezer"
          ],
          "volume": [
            "0.6"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Пластик",
        "Для заморозки",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Пластик",
      "line": "Кухня",
      "description": "Пластик; Для заморозки; Крышка с защёлками."
    },
    {
      "id": "food-plastic-1-fridge",
      "name": "Контейнер для продуктов",
      "category": "kitchen",
      "amount": "1 л",
      "price": 290,
      "art": "container",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "fridge"
          ],
          "volume": [
            "1"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Пластик",
        "Хранение в холодильнике",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Пластик",
      "line": "Кухня",
      "description": "Пластик; Хранение в холодильнике; Крышка с защёлками."
    },
    {
      "id": "food-plastic-1-freezer",
      "name": "Контейнер для заморозки",
      "category": "kitchen",
      "amount": "1 л",
      "price": 290,
      "art": "container",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "freezer"
          ],
          "volume": [
            "1"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Пластик",
        "Для заморозки",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Пластик",
      "line": "Кухня",
      "description": "Пластик; Для заморозки; Крышка с защёлками."
    },
    {
      "id": "food-plastic-2-fridge",
      "name": "Контейнер для продуктов",
      "category": "kitchen",
      "amount": "2 л",
      "price": 390,
      "art": "container",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "fridge"
          ],
          "volume": [
            "2"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Пластик",
        "Хранение в холодильнике",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Пластик",
      "line": "Кухня",
      "description": "Пластик; Хранение в холодильнике; Крышка с защёлками."
    },
    {
      "id": "food-plastic-2-freezer",
      "name": "Контейнер для заморозки",
      "category": "kitchen",
      "amount": "2 л",
      "price": 390,
      "art": "container",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "freezer"
          ],
          "volume": [
            "2"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Пластик",
        "Для заморозки",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Пластик",
      "line": "Кухня",
      "description": "Пластик; Для заморозки; Крышка с защёлками."
    },
    {
      "id": "food-glass-0.6-fridge",
      "name": "Контейнер для продуктов стеклянный",
      "category": "kitchen",
      "amount": "0,6 л",
      "price": 450,
      "art": "container-glass",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "fridge"
          ],
          "volume": [
            "0.6"
          ],
          "material": [
            "glass"
          ]
        }
      },
      "specs": [
        "Стекло",
        "Хранение в холодильнике",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Стекло",
      "line": "Кухня",
      "description": "Стекло; Хранение в холодильнике; Крышка с защёлками."
    },
    {
      "id": "food-glass-1-fridge",
      "name": "Контейнер для продуктов стеклянный",
      "category": "kitchen",
      "amount": "1 л",
      "price": 490,
      "art": "container-glass",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "fridge"
          ],
          "volume": [
            "1"
          ],
          "material": [
            "glass"
          ]
        }
      },
      "specs": [
        "Стекло",
        "Хранение в холодильнике",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Стекло",
      "line": "Кухня",
      "description": "Стекло; Хранение в холодильнике; Крышка с защёлками."
    },
    {
      "id": "food-glass-2-fridge",
      "name": "Контейнер для продуктов стеклянный",
      "category": "kitchen",
      "amount": "2 л",
      "price": 590,
      "art": "container-glass",
      "sourceCategory": "Контейнеры пищевые",
      "matches": {
        "food": {
          "purpose": [
            "fridge"
          ],
          "volume": [
            "2"
          ],
          "material": [
            "glass"
          ]
        }
      },
      "specs": [
        "Стекло",
        "Хранение в холодильнике",
        "Крышка с защёлками"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Стекло",
      "line": "Кухня",
      "description": "Стекло; Хранение в холодильнике; Крышка с защёлками."
    },
    {
      "id": "lunch-0.6",
      "name": "Ланч-бокс с отделениями",
      "category": "kitchen",
      "amount": "0,6 л",
      "price": 312,
      "art": "container",
      "sourceCategory": "Ланч-боксы",
      "matches": {
        "food": {
          "purpose": [
            "lunch"
          ],
          "volume": [
            "0.6"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Для еды с собой",
        "Пластик",
        "Отделения внутри"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Для еды с собой",
      "line": "Кухня",
      "description": "Для еды с собой; Пластик; Отделения внутри."
    },
    {
      "id": "lunch-1",
      "name": "Ланч-бокс с отделениями",
      "category": "kitchen",
      "amount": "1 л",
      "price": 360,
      "art": "container",
      "sourceCategory": "Ланч-боксы",
      "matches": {
        "food": {
          "purpose": [
            "lunch"
          ],
          "volume": [
            "1"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Для еды с собой",
        "Пластик",
        "Отделения внутри"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Для еды с собой",
      "line": "Кухня",
      "description": "Для еды с собой; Пластик; Отделения внутри."
    },
    {
      "id": "lunch-2",
      "name": "Ланч-бокс с отделениями",
      "category": "kitchen",
      "amount": "2 л",
      "price": 480,
      "art": "container",
      "sourceCategory": "Ланч-боксы",
      "matches": {
        "food": {
          "purpose": [
            "lunch"
          ],
          "volume": [
            "2"
          ],
          "material": [
            "plastic"
          ]
        }
      },
      "specs": [
        "Для еды с собой",
        "Пластик",
        "Отделения внутри"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Для еды с собой",
      "line": "Кухня",
      "description": "Для еды с собой; Пластик; Отделения внутри."
    },
    {
      "id": "organizer-small",
      "name": "Органайзер для мелочей",
      "category": "storage",
      "amount": "24 × 16 × 7 см",
      "price": 390,
      "art": "organizer",
      "sourceCategory": "Корзины и органайзеры для полок",
      "matches": {
        "storage": {
          "place": [
            "drawer"
          ],
          "content": [
            "small"
          ]
        }
      },
      "specs": [
        "Для мелочей",
        "Ширина × глубина × высота",
        "24 × 16 × 7 см"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": {
        "width": 24,
        "depth": 16,
        "height": 7
      },
      "tag": "Для мелочей",
      "line": "Хранение",
      "description": "Для мелочей; Ширина × глубина × высота; 24 × 16 × 7 см."
    },
    {
      "id": "organizer-cutlery",
      "name": "Лоток для столовых приборов",
      "category": "storage",
      "amount": "33 × 26 × 5 см",
      "price": 490,
      "art": "organizer",
      "sourceCategory": "Подставки для столовых приборов",
      "matches": {
        "storage": {
          "place": [
            "drawer"
          ],
          "content": [
            "cutlery"
          ]
        }
      },
      "specs": [
        "Для приборов",
        "Ширина × глубина × высота",
        "33 × 26 × 5 см"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": {
        "width": 33,
        "depth": 26,
        "height": 5
      },
      "tag": "Для приборов",
      "line": "Хранение",
      "description": "Для приборов; Ширина × глубина × высота; 33 × 26 × 5 см."
    },
    {
      "id": "basket-shelf",
      "name": "Корзина для хранения",
      "category": "storage",
      "amount": "28 × 20 × 15 см",
      "price": 590,
      "art": "organizer",
      "sourceCategory": "Корзины и органайзеры для полок",
      "matches": {
        "storage": {
          "place": [
            "shelf"
          ],
          "content": [
            "small"
          ]
        }
      },
      "specs": [
        "Для мелочей",
        "Ширина × глубина × высота",
        "28 × 20 × 15 см"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": {
        "width": 28,
        "depth": 20,
        "height": 15
      },
      "tag": "Для мелочей",
      "line": "Хранение",
      "description": "Для мелочей; Ширина × глубина × высота; 28 × 20 × 15 см."
    },
    {
      "id": "box-clothes",
      "name": "Коробка для одежды с крышкой",
      "category": "storage",
      "amount": "40 × 30 × 20 см",
      "price": 790,
      "art": "organizer",
      "sourceCategory": "Кофры и коробки текстильные",
      "matches": {
        "storage": {
          "place": [
            "wardrobe"
          ],
          "content": [
            "clothes"
          ]
        }
      },
      "specs": [
        "Для одежды и текстиля",
        "Ширина × глубина × высота",
        "40 × 30 × 20 см"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": {
        "width": 40,
        "depth": 30,
        "height": 20
      },
      "tag": "Для одежды и текстиля",
      "line": "Хранение",
      "description": "Для одежды и текстиля; Ширина × глубина × высота; 40 × 30 × 20 см."
    },
    {
      "id": "divider-clothes",
      "name": "Органайзер для белья",
      "category": "storage",
      "amount": "32 × 24 × 10 см",
      "price": 450,
      "art": "organizer",
      "sourceCategory": "Корзины и органайзеры для полок",
      "matches": {
        "storage": {
          "place": [
            "drawer"
          ],
          "content": [
            "clothes"
          ]
        }
      },
      "specs": [
        "Для одежды и текстиля",
        "Ширина × глубина × высота",
        "32 × 24 × 10 см"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": {
        "width": 32,
        "depth": 24,
        "height": 10
      },
      "tag": "Для одежды и текстиля",
      "line": "Хранение",
      "description": "Для одежды и текстиля; Ширина × глубина × высота; 32 × 24 × 10 см."
    },
    {
      "id": "basket-textile",
      "name": "Корзина для текстиля",
      "category": "storage",
      "amount": "35 × 25 × 18 см",
      "price": 690,
      "art": "organizer",
      "sourceCategory": "Корзины и органайзеры для полок",
      "matches": {
        "storage": {
          "place": [
            "shelf"
          ],
          "content": [
            "clothes"
          ]
        }
      },
      "specs": [
        "Для одежды и текстиля",
        "Ширина × глубина × высота",
        "35 × 25 × 18 см"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": {
        "width": 35,
        "depth": 25,
        "height": 18
      },
      "tag": "Для одежды и текстиля",
      "line": "Хранение",
      "description": "Для одежды и текстиля; Ширина × глубина × высота; 35 × 25 × 18 см."
    },
    {
      "id": "led-E27-450-2700",
      "name": "Светодиодная лампа E27",
      "category": "lighting",
      "amount": "450 лм · 2700 К",
      "price": 142,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E27"
          ],
          "brightness": [
            "450"
          ],
          "temperature": [
            "2700"
          ]
        }
      },
      "specs": [
        "Цоколь E27",
        "450 лм",
        "Тёплый свет, 2700 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E27",
      "line": "Свет и батарейки",
      "description": "Цоколь E27; 450 лм; Тёплый свет, 2700 К; Без диммирования."
    },
    {
      "id": "led-E27-450-4000",
      "name": "Светодиодная лампа E27",
      "category": "lighting",
      "amount": "450 лм · 4000 К",
      "price": 142,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E27"
          ],
          "brightness": [
            "450"
          ],
          "temperature": [
            "4000"
          ]
        }
      },
      "specs": [
        "Цоколь E27",
        "450 лм",
        "Нейтральный свет, 4000 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E27",
      "line": "Свет и батарейки",
      "description": "Цоколь E27; 450 лм; Нейтральный свет, 4000 К; Без диммирования."
    },
    {
      "id": "led-E27-800-2700",
      "name": "Светодиодная лампа E27",
      "category": "lighting",
      "amount": "800 лм · 2700 К",
      "price": 160,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E27"
          ],
          "brightness": [
            "800"
          ],
          "temperature": [
            "2700"
          ]
        }
      },
      "specs": [
        "Цоколь E27",
        "800 лм",
        "Тёплый свет, 2700 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E27",
      "line": "Свет и батарейки",
      "description": "Цоколь E27; 800 лм; Тёплый свет, 2700 К; Без диммирования."
    },
    {
      "id": "led-E27-800-4000",
      "name": "Светодиодная лампа E27",
      "category": "lighting",
      "amount": "800 лм · 4000 К",
      "price": 160,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E27"
          ],
          "brightness": [
            "800"
          ],
          "temperature": [
            "4000"
          ]
        }
      },
      "specs": [
        "Цоколь E27",
        "800 лм",
        "Нейтральный свет, 4000 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E27",
      "line": "Свет и батарейки",
      "description": "Цоколь E27; 800 лм; Нейтральный свет, 4000 К; Без диммирования."
    },
    {
      "id": "led-E27-1100-2700",
      "name": "Светодиодная лампа E27",
      "category": "lighting",
      "amount": "1100 лм · 2700 К",
      "price": 175,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E27"
          ],
          "brightness": [
            "1100"
          ],
          "temperature": [
            "2700"
          ]
        }
      },
      "specs": [
        "Цоколь E27",
        "1100 лм",
        "Тёплый свет, 2700 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E27",
      "line": "Свет и батарейки",
      "description": "Цоколь E27; 1100 лм; Тёплый свет, 2700 К; Без диммирования."
    },
    {
      "id": "led-E27-1100-4000",
      "name": "Светодиодная лампа E27",
      "category": "lighting",
      "amount": "1100 лм · 4000 К",
      "price": 175,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E27"
          ],
          "brightness": [
            "1100"
          ],
          "temperature": [
            "4000"
          ]
        }
      },
      "specs": [
        "Цоколь E27",
        "1100 лм",
        "Нейтральный свет, 4000 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E27",
      "line": "Свет и батарейки",
      "description": "Цоколь E27; 1100 лм; Нейтральный свет, 4000 К; Без диммирования."
    },
    {
      "id": "led-E14-450-2700",
      "name": "Светодиодная лампа E14",
      "category": "lighting",
      "amount": "450 лм · 2700 К",
      "price": 142,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E14"
          ],
          "brightness": [
            "450"
          ],
          "temperature": [
            "2700"
          ]
        }
      },
      "specs": [
        "Цоколь E14",
        "450 лм",
        "Тёплый свет, 2700 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E14",
      "line": "Свет и батарейки",
      "description": "Цоколь E14; 450 лм; Тёплый свет, 2700 К; Без диммирования."
    },
    {
      "id": "led-E14-450-4000",
      "name": "Светодиодная лампа E14",
      "category": "lighting",
      "amount": "450 лм · 4000 К",
      "price": 142,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E14"
          ],
          "brightness": [
            "450"
          ],
          "temperature": [
            "4000"
          ]
        }
      },
      "specs": [
        "Цоколь E14",
        "450 лм",
        "Нейтральный свет, 4000 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E14",
      "line": "Свет и батарейки",
      "description": "Цоколь E14; 450 лм; Нейтральный свет, 4000 К; Без диммирования."
    },
    {
      "id": "led-E14-800-2700",
      "name": "Светодиодная лампа E14",
      "category": "lighting",
      "amount": "800 лм · 2700 К",
      "price": 160,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E14"
          ],
          "brightness": [
            "800"
          ],
          "temperature": [
            "2700"
          ]
        }
      },
      "specs": [
        "Цоколь E14",
        "800 лм",
        "Тёплый свет, 2700 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E14",
      "line": "Свет и батарейки",
      "description": "Цоколь E14; 800 лм; Тёплый свет, 2700 К; Без диммирования."
    },
    {
      "id": "led-E14-800-4000",
      "name": "Светодиодная лампа E14",
      "category": "lighting",
      "amount": "800 лм · 4000 К",
      "price": 160,
      "art": "bulb",
      "sourceCategory": "Лампы LED бытовые",
      "matches": {
        "lamp": {
          "base": [
            "E14"
          ],
          "brightness": [
            "800"
          ],
          "temperature": [
            "4000"
          ]
        }
      },
      "specs": [
        "Цоколь E14",
        "800 лм",
        "Нейтральный свет, 4000 К",
        "Без диммирования"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Цоколь E14",
      "line": "Свет и батарейки",
      "description": "Цоколь E14; 800 лм; Нейтральный свет, 4000 К; Без диммирования."
    },
    {
      "id": "battery-AA-2",
      "name": "Щелочные батарейки AA",
      "category": "lighting",
      "amount": "2 шт.",
      "price": 100,
      "art": "batteries",
      "sourceCategory": "Батарейки бытовые",
      "matches": {
        "batteries": {
          "size": [
            "AA"
          ],
          "device": [
            "remote",
            "toy",
            "sensor"
          ],
          "pack": [
            "2"
          ]
        }
      },
      "specs": [
        "AA",
        "1,5 В",
        "2 штуки"
      ],
      "repeatDays": 0,
      "volume": 2,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "AA",
      "line": "Свет и батарейки",
      "description": "AA; 1,5 В; 2 штуки."
    },
    {
      "id": "battery-AA-4",
      "name": "Щелочные батарейки AA",
      "category": "lighting",
      "amount": "4 шт.",
      "price": 200,
      "art": "batteries",
      "sourceCategory": "Батарейки бытовые",
      "matches": {
        "batteries": {
          "size": [
            "AA"
          ],
          "device": [
            "remote",
            "toy",
            "sensor"
          ],
          "pack": [
            "4"
          ]
        }
      },
      "specs": [
        "AA",
        "1,5 В",
        "4 штуки"
      ],
      "repeatDays": 0,
      "volume": 4,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "AA",
      "line": "Свет и батарейки",
      "description": "AA; 1,5 В; 4 штуки."
    },
    {
      "id": "battery-AAA-2",
      "name": "Щелочные батарейки AAA",
      "category": "lighting",
      "amount": "2 шт.",
      "price": 100,
      "art": "batteries",
      "sourceCategory": "Батарейки бытовые",
      "matches": {
        "batteries": {
          "size": [
            "AAA"
          ],
          "device": [
            "remote",
            "toy",
            "sensor"
          ],
          "pack": [
            "2"
          ]
        }
      },
      "specs": [
        "AAA",
        "1,5 В",
        "2 штуки"
      ],
      "repeatDays": 0,
      "volume": 2,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "AAA",
      "line": "Свет и батарейки",
      "description": "AAA; 1,5 В; 2 штуки."
    },
    {
      "id": "battery-AAA-4",
      "name": "Щелочные батарейки AAA",
      "category": "lighting",
      "amount": "4 шт.",
      "price": 200,
      "art": "batteries",
      "sourceCategory": "Батарейки бытовые",
      "matches": {
        "batteries": {
          "size": [
            "AAA"
          ],
          "device": [
            "remote",
            "toy",
            "sensor"
          ],
          "pack": [
            "4"
          ]
        }
      },
      "specs": [
        "AAA",
        "1,5 В",
        "4 штуки"
      ],
      "repeatDays": 0,
      "volume": 4,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "AAA",
      "line": "Свет и батарейки",
      "description": "AAA; 1,5 В; 4 штуки."
    },
    {
      "id": "battery-CR2032-2",
      "name": "Литиевые батарейки CR2032",
      "category": "lighting",
      "amount": "2 шт.",
      "price": 150,
      "art": "battery-coin",
      "sourceCategory": "Батарейки бытовые",
      "matches": {
        "batteries": {
          "size": [
            "CR2032"
          ],
          "device": [
            "remote",
            "toy",
            "sensor"
          ],
          "pack": [
            "2"
          ]
        }
      },
      "specs": [
        "CR2032",
        "3 В",
        "2 штуки"
      ],
      "repeatDays": 0,
      "volume": 2,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "CR2032",
      "line": "Свет и батарейки",
      "description": "CR2032; 3 В; 2 штуки."
    },
    {
      "id": "battery-CR2032-4",
      "name": "Литиевые батарейки CR2032",
      "category": "lighting",
      "amount": "4 шт.",
      "price": 300,
      "art": "battery-coin",
      "sourceCategory": "Батарейки бытовые",
      "matches": {
        "batteries": {
          "size": [
            "CR2032"
          ],
          "device": [
            "remote",
            "toy",
            "sensor"
          ],
          "pack": [
            "4"
          ]
        }
      },
      "specs": [
        "CR2032",
        "3 В",
        "4 штуки"
      ],
      "repeatDays": 0,
      "volume": 4,
      "unit": "шт.",
      "role": "main",
      "dimensions": null,
      "tag": "CR2032",
      "line": "Свет и батарейки",
      "description": "CR2032; 3 В; 4 штуки."
    },
    {
      "id": "glue-wood",
      "name": "Клей ПВА для дерева",
      "category": "repair",
      "amount": "125 г",
      "price": 190,
      "art": "glue",
      "sourceCategory": "Клеи универсальные и контактные",
      "matches": {
        "glue": {
          "material": [
            "wood"
          ],
          "moisture": [
            "dry"
          ],
          "seam": [
            "any"
          ]
        }
      },
      "specs": [
        "Дерево с деревом",
        "Для сухого помещения",
        "Непрозрачный шов"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Дерево с деревом",
      "line": "Мелкий ремонт",
      "description": "Дерево с деревом; Для сухого помещения; Непрозрачный шов."
    },
    {
      "id": "glue-epoxy",
      "name": "Прозрачный двухкомпонентный клей",
      "category": "repair",
      "amount": "25 мл",
      "price": 350,
      "art": "glue",
      "sourceCategory": "Клеи специальные и двухкомпонентные",
      "matches": {
        "glue": {
          "material": [
            "ceramic"
          ],
          "moisture": [
            "dry",
            "wet"
          ],
          "seam": [
            "clear",
            "any"
          ]
        }
      },
      "specs": [
        "Для керамики",
        "Прозрачный шов",
        "Два компонента"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Для керамики",
      "line": "Мелкий ремонт",
      "description": "Для керамики; Прозрачный шов; Два компонента."
    },
    {
      "id": "glue-plastic",
      "name": "Клей для жёсткого пластика",
      "category": "repair",
      "amount": "30 мл",
      "price": 290,
      "art": "glue",
      "sourceCategory": "Клеи специальные и двухкомпонентные",
      "matches": {
        "glue": {
          "material": [
            "plastic"
          ],
          "moisture": [
            "dry"
          ],
          "seam": [
            "clear",
            "any"
          ]
        }
      },
      "specs": [
        "Жёсткий пластик",
        "Прозрачный шов",
        "Не для PE, PP и PTFE"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Жёсткий пластик",
      "line": "Мелкий ремонт",
      "description": "Жёсткий пластик; Прозрачный шов; Не для PE, PP и PTFE."
    },
    {
      "id": "glue-water",
      "name": "Влагостойкий клей для дерева",
      "category": "repair",
      "amount": "125 г",
      "price": 310,
      "art": "glue",
      "sourceCategory": "Клеи специальные и двухкомпонентные",
      "matches": {
        "glue": {
          "material": [
            "wood"
          ],
          "moisture": [
            "dry",
            "wet"
          ],
          "seam": [
            "any"
          ]
        }
      },
      "specs": [
        "Дерево с деревом",
        "Возможен контакт с влагой",
        "Непрозрачный шов"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Дерево с деревом",
      "line": "Мелкий ремонт",
      "description": "Дерево с деревом; Возможен контакт с влагой; Непрозрачный шов."
    },
    {
      "id": "shoe-leather-clean",
      "name": "Очиститель для гладкой кожи",
      "category": "shoes",
      "amount": "150 мл",
      "price": 390,
      "art": "spray-clay",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "leather"
          ],
          "task": [
            "clean"
          ],
          "color": [
            "neutral"
          ]
        }
      },
      "specs": [
        "Гладкая кожа",
        "Бесцветное средство",
        "Очистка"
      ],
      "repeatDays": 182,
      "volume": 0.15,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Гладкая кожа",
      "line": "Уход за обувью",
      "description": "Гладкая кожа; Бесцветное средство; Очистка."
    },
    {
      "id": "shoe-leather-protect",
      "name": "Пропитка для гладкой кожи",
      "category": "shoes",
      "amount": "150 мл",
      "price": 490,
      "art": "spray-clay",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "leather"
          ],
          "task": [
            "protect"
          ],
          "color": [
            "neutral"
          ]
        }
      },
      "specs": [
        "Гладкая кожа",
        "Бесцветное средство",
        "Уход и защита"
      ],
      "repeatDays": 182,
      "volume": 0.15,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Гладкая кожа",
      "line": "Уход за обувью",
      "description": "Гладкая кожа; Бесцветное средство; Уход и защита."
    },
    {
      "id": "shoe-suede-clean",
      "name": "Очиститель для замши и нубука",
      "category": "shoes",
      "amount": "150 мл",
      "price": 390,
      "art": "spray-clay",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "suede"
          ],
          "task": [
            "clean"
          ],
          "color": [
            "neutral"
          ]
        }
      },
      "specs": [
        "Замша и нубук",
        "Бесцветное средство",
        "Очистка"
      ],
      "repeatDays": 182,
      "volume": 0.15,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Замша и нубук",
      "line": "Уход за обувью",
      "description": "Замша и нубук; Бесцветное средство; Очистка."
    },
    {
      "id": "shoe-suede-protect",
      "name": "Пропитка для замши и нубука",
      "category": "shoes",
      "amount": "150 мл",
      "price": 490,
      "art": "spray-clay",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "suede"
          ],
          "task": [
            "protect"
          ],
          "color": [
            "neutral"
          ]
        }
      },
      "specs": [
        "Замша и нубук",
        "Бесцветное средство",
        "Уход и защита"
      ],
      "repeatDays": 182,
      "volume": 0.15,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Замша и нубук",
      "line": "Уход за обувью",
      "description": "Замша и нубук; Бесцветное средство; Уход и защита."
    },
    {
      "id": "shoe-textile-clean",
      "name": "Очиститель для текстильной обуви",
      "category": "shoes",
      "amount": "150 мл",
      "price": 390,
      "art": "spray-clay",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "textile"
          ],
          "task": [
            "clean"
          ],
          "color": [
            "neutral"
          ]
        }
      },
      "specs": [
        "Текстиль",
        "Бесцветное средство",
        "Очистка"
      ],
      "repeatDays": 182,
      "volume": 0.15,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Текстиль",
      "line": "Уход за обувью",
      "description": "Текстиль; Бесцветное средство; Очистка."
    },
    {
      "id": "shoe-textile-protect",
      "name": "Пропитка для текстильной обуви",
      "category": "shoes",
      "amount": "150 мл",
      "price": 490,
      "art": "spray-clay",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "textile"
          ],
          "task": [
            "protect"
          ],
          "color": [
            "neutral"
          ]
        }
      },
      "specs": [
        "Текстиль",
        "Бесцветное средство",
        "Уход и защита"
      ],
      "repeatDays": 182,
      "volume": 0.15,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Текстиль",
      "line": "Уход за обувью",
      "description": "Текстиль; Бесцветное средство; Уход и защита."
    },
    {
      "id": "shoe-cream-black",
      "name": "Крем для обуви чёрный",
      "category": "shoes",
      "amount": "75 мл",
      "price": 190,
      "art": "jar",
      "sourceCategory": "Кремы и пропитки для обуви",
      "matches": {
        "shoes": {
          "material": [
            "leather"
          ],
          "task": [
            "protect"
          ],
          "color": [
            "black"
          ]
        }
      },
      "specs": [
        "Гладкая кожа",
        "Чёрный",
        "Уход за обувью"
      ],
      "repeatDays": 182,
      "volume": 0.075,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Гладкая кожа",
      "line": "Уход за обувью",
      "description": "Гладкая кожа; Чёрный; Уход за обувью."
    },
    {
      "id": "litter-clump-5",
      "name": "Комкующийся наполнитель",
      "category": "pets",
      "amount": "5 л",
      "price": 375,
      "art": "pet-bag",
      "sourceCategory": "Наполнители кошачьи",
      "matches": {
        "litter": {
          "type": [
            "clump"
          ],
          "volume": [
            "5"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Комкующийся",
        "Без добавленной отдушки",
        "5 л"
      ],
      "repeatDays": 14,
      "volume": 5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Комкующийся",
      "line": "Для питомцев",
      "description": "Комкующийся; Без добавленной отдушки; 5 л."
    },
    {
      "id": "litter-clump-10",
      "name": "Комкующийся наполнитель",
      "category": "pets",
      "amount": "10 л",
      "price": 750,
      "art": "pet-bag",
      "sourceCategory": "Наполнители кошачьи",
      "matches": {
        "litter": {
          "type": [
            "clump"
          ],
          "volume": [
            "10"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Комкующийся",
        "Без добавленной отдушки",
        "10 л"
      ],
      "repeatDays": 14,
      "volume": 10,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Комкующийся",
      "line": "Для питомцев",
      "description": "Комкующийся; Без добавленной отдушки; 10 л."
    },
    {
      "id": "litter-wood-5",
      "name": "Древесный наполнитель",
      "category": "pets",
      "amount": "5 л",
      "price": 175,
      "art": "pet-bag",
      "sourceCategory": "Наполнители кошачьи",
      "matches": {
        "litter": {
          "type": [
            "wood"
          ],
          "volume": [
            "5"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Древесные гранулы",
        "Без добавленной отдушки",
        "5 л"
      ],
      "repeatDays": 14,
      "volume": 5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Древесные гранулы",
      "line": "Для питомцев",
      "description": "Древесные гранулы; Без добавленной отдушки; 5 л."
    },
    {
      "id": "litter-wood-10",
      "name": "Древесный наполнитель",
      "category": "pets",
      "amount": "10 л",
      "price": 350,
      "art": "pet-bag",
      "sourceCategory": "Наполнители кошачьи",
      "matches": {
        "litter": {
          "type": [
            "wood"
          ],
          "volume": [
            "10"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Древесные гранулы",
        "Без добавленной отдушки",
        "10 л"
      ],
      "repeatDays": 14,
      "volume": 10,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Древесные гранулы",
      "line": "Для питомцев",
      "description": "Древесные гранулы; Без добавленной отдушки; 10 л."
    },
    {
      "id": "litter-silica-5",
      "name": "Силикагелевый наполнитель",
      "category": "pets",
      "amount": "5 л",
      "price": 600,
      "art": "pet-bag",
      "sourceCategory": "Наполнители кошачьи",
      "matches": {
        "litter": {
          "type": [
            "silica"
          ],
          "volume": [
            "5"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Силикагель",
        "Без добавленной отдушки",
        "5 л"
      ],
      "repeatDays": 14,
      "volume": 5,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Силикагель",
      "line": "Для питомцев",
      "description": "Силикагель; Без добавленной отдушки; 5 л."
    },
    {
      "id": "litter-silica-10",
      "name": "Силикагелевый наполнитель",
      "category": "pets",
      "amount": "10 л",
      "price": 1200,
      "art": "pet-bag",
      "sourceCategory": "Наполнители кошачьи",
      "matches": {
        "litter": {
          "type": [
            "silica"
          ],
          "volume": [
            "10"
          ],
          "scent": [
            "any",
            "none"
          ]
        }
      },
      "specs": [
        "Силикагель",
        "Без добавленной отдушки",
        "10 л"
      ],
      "repeatDays": 14,
      "volume": 10,
      "unit": "л",
      "role": "main",
      "dimensions": null,
      "tag": "Силикагель",
      "line": "Для питомцев",
      "description": "Силикагель; Без добавленной отдушки; 10 л."
    },
    {
      "id": "soil-universal",
      "name": "Грунт для комнатных растений",
      "category": "plants",
      "amount": "5 л",
      "price": 190,
      "art": "soil-bag",
      "sourceCategory": "Грунты и субстраты",
      "matches": {
        "plant": {
          "plant": [
            "universal"
          ],
          "diameter": [
            "12",
            "16",
            "20"
          ],
          "kit": [
            "soil",
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Комнатные растения",
        "Объём 5 л",
        "Состав по назначению"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Комнатные растения",
      "line": "Для растений",
      "description": "Комнатные растения; Объём 5 л; Состав по назначению."
    },
    {
      "id": "pot-universal-12",
      "name": "Горшок с поддоном",
      "category": "plants",
      "amount": "Диаметр 12 см",
      "price": 240,
      "art": "pot",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "universal"
          ],
          "diameter": [
            "12"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 12 см",
        "Дренажные отверстия",
        "С поддоном"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 12 см",
      "line": "Для растений",
      "description": "Диаметр 12 см; Дренажные отверстия; С поддоном."
    },
    {
      "id": "pot-universal-16",
      "name": "Горшок с поддоном",
      "category": "plants",
      "amount": "Диаметр 16 см",
      "price": 320,
      "art": "pot",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "universal"
          ],
          "diameter": [
            "16"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 16 см",
        "Дренажные отверстия",
        "С поддоном"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 16 см",
      "line": "Для растений",
      "description": "Диаметр 16 см; Дренажные отверстия; С поддоном."
    },
    {
      "id": "pot-universal-20",
      "name": "Горшок с поддоном",
      "category": "plants",
      "amount": "Диаметр 20 см",
      "price": 400,
      "art": "pot",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "universal"
          ],
          "diameter": [
            "20"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 20 см",
        "Дренажные отверстия",
        "С поддоном"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 20 см",
      "line": "Для растений",
      "description": "Диаметр 20 см; Дренажные отверстия; С поддоном."
    },
    {
      "id": "soil-succulent",
      "name": "Грунт для кактусов и суккулентов",
      "category": "plants",
      "amount": "5 л",
      "price": 290,
      "art": "soil-bag",
      "sourceCategory": "Грунты и субстраты",
      "matches": {
        "plant": {
          "plant": [
            "succulent"
          ],
          "diameter": [
            "12",
            "16",
            "20"
          ],
          "kit": [
            "soil",
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Кактусы и суккуленты",
        "Объём 5 л",
        "Состав по назначению"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Кактусы и суккуленты",
      "line": "Для растений",
      "description": "Кактусы и суккуленты; Объём 5 л; Состав по назначению."
    },
    {
      "id": "pot-succulent-12",
      "name": "Горшок с поддоном",
      "category": "plants",
      "amount": "Диаметр 12 см",
      "price": 240,
      "art": "pot",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "succulent"
          ],
          "diameter": [
            "12"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 12 см",
        "Дренажные отверстия",
        "С поддоном"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 12 см",
      "line": "Для растений",
      "description": "Диаметр 12 см; Дренажные отверстия; С поддоном."
    },
    {
      "id": "pot-succulent-16",
      "name": "Горшок с поддоном",
      "category": "plants",
      "amount": "Диаметр 16 см",
      "price": 320,
      "art": "pot",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "succulent"
          ],
          "diameter": [
            "16"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 16 см",
        "Дренажные отверстия",
        "С поддоном"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 16 см",
      "line": "Для растений",
      "description": "Диаметр 16 см; Дренажные отверстия; С поддоном."
    },
    {
      "id": "pot-succulent-20",
      "name": "Горшок с поддоном",
      "category": "plants",
      "amount": "Диаметр 20 см",
      "price": 400,
      "art": "pot",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "succulent"
          ],
          "diameter": [
            "20"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 20 см",
        "Дренажные отверстия",
        "С поддоном"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 20 см",
      "line": "Для растений",
      "description": "Диаметр 20 см; Дренажные отверстия; С поддоном."
    },
    {
      "id": "soil-orchid",
      "name": "Субстрат для орхидей",
      "category": "plants",
      "amount": "5 л",
      "price": 290,
      "art": "soil-bag",
      "sourceCategory": "Грунты и субстраты",
      "matches": {
        "plant": {
          "plant": [
            "orchid"
          ],
          "diameter": [
            "12",
            "16",
            "20"
          ],
          "kit": [
            "soil",
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Орхидеи",
        "Объём 5 л",
        "Состав по назначению"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "main",
      "dimensions": null,
      "tag": "Орхидеи",
      "line": "Для растений",
      "description": "Орхидеи; Объём 5 л; Состав по назначению."
    },
    {
      "id": "pot-orchid-12",
      "name": "Прозрачный горшок для орхидеи",
      "category": "plants",
      "amount": "Диаметр 12 см",
      "price": 240,
      "art": "pot-clear",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "orchid"
          ],
          "diameter": [
            "12"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 12 см",
        "Дренажные отверстия",
        "Прозрачный"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 12 см",
      "line": "Для растений",
      "description": "Диаметр 12 см; Дренажные отверстия; Прозрачный."
    },
    {
      "id": "pot-orchid-16",
      "name": "Прозрачный горшок для орхидеи",
      "category": "plants",
      "amount": "Диаметр 16 см",
      "price": 320,
      "art": "pot-clear",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "orchid"
          ],
          "diameter": [
            "16"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 16 см",
        "Дренажные отверстия",
        "Прозрачный"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 16 см",
      "line": "Для растений",
      "description": "Диаметр 16 см; Дренажные отверстия; Прозрачный."
    },
    {
      "id": "pot-orchid-20",
      "name": "Прозрачный горшок для орхидеи",
      "category": "plants",
      "amount": "Диаметр 20 см",
      "price": 400,
      "art": "pot-clear",
      "sourceCategory": "Горшки посадочные и поддоны",
      "matches": {
        "plant": {
          "plant": [
            "orchid"
          ],
          "diameter": [
            "20"
          ],
          "kit": [
            "pot",
            "full"
          ]
        }
      },
      "specs": [
        "Диаметр 20 см",
        "Дренажные отверстия",
        "Прозрачный"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Диаметр 20 см",
      "line": "Для растений",
      "description": "Диаметр 20 см; Дренажные отверстия; Прозрачный."
    },
    {
      "id": "plant-drain",
      "name": "Керамзит для дренажа",
      "category": "plants",
      "amount": "1 л",
      "price": 110,
      "art": "soil-bag",
      "sourceCategory": "Дренаж и добавки для грунта",
      "matches": {
        "plant": {
          "plant": [
            "universal",
            "succulent",
            "orchid"
          ],
          "diameter": [
            "12",
            "16",
            "20"
          ],
          "kit": [
            "full"
          ]
        }
      },
      "specs": [
        "Объём 1 л",
        "Керамзит",
        "Применение с учётом растения"
      ],
      "repeatDays": 0,
      "volume": 1,
      "unit": "уп.",
      "role": "extra",
      "dimensions": null,
      "tag": "Объём 1 л",
      "line": "Для растений",
      "description": "Объём 1 л; Керамзит; Применение с учётом растения."
    }
  ],
  "source": {
    "title": "Проект «Кладовка»",
    "sheet": "Ассортимент",
    "note": "Сценарии, категории и критерии выбора взяты из листа «Ассортимент». Товарные примеры, характеристики и цены составлены для прототипа и не являются предложением реальных товаров."
  }
};
