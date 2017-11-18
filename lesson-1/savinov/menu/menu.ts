let data = {
    "Рыбы": {
      "Форель": {},
      "Щука": {}
    },
    
    "Птицы": {
      "Попугаеобразные": {
        "Какаду": {
          "Черные какаду": {
            "Шлемоносные какаду": {},
            "Кореллы": {}
          },
          "Белые какаду": {
            "Какаду": {},
            "Какаду-инка": {}
          }
        },
        "Лори": {
          "Лори-гуа": {},
          "Лорикеты": {}
        },
        "Ара": {
          "Ара": {},
          "Гиацинтовые ара": {}
        }
      },
      "Дятлообразные": {
        "Якамаровые": {
          "Якамары": {},
          "Брахигальбы": {}
        },
        "Тукановые": {
          "Туканеты": {},
          "Арасари": {}
        }
      }
    },

    "Деревья": {
      "Хвойные": {
        "Лиственница": {},
        "Ель": {}
      },
      "Цветковые": {
        "Берёза": {},
        "Тополь": {}
      }
    }
  };

// генерируем меню из дерева объектов
function genMenu( tree ): string {
  let content: string = ``;
  let arr = Object.keys( tree );
  
  if ( arr.length > 0 ) {
    content = `<ul>`;
    for (let key in tree) {
        content += (`<li><a class='title'>` + key);
        let retStr: string = genMenu( tree[key] );
        if ( retStr ) {
            content += retStr;
        }
        content += `</a></li>`;
    }
    content += '</ul>'
  } 
  return content;
}

let myMenu = document.querySelector('.menu') as HTMLDivElement;
myMenu.innerHTML = genMenu( data );

myMenu.onclick = (ev: MouseEvent) => {
    let el = ev.target as HTMLAnchorElement;
    let classList = el.classList;

    if (!classList.contains('title')) {
        return;
    }

    let parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('menu-open');
}
