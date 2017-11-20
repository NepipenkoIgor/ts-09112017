interface IMenuItem {
  title: string;
  items?: IMenuItem[];
}

const menu: IMenuItem = 
{
  title: 'Животные',
  items: 
  [
    {
      title: 'Млекопитающие',
      items: 
      [
        {
          title: 'Коровы', 
          items: 
          [
            {
              title: ' some'
            }
          ]
        },
        { title: 'Ослы' },
        { title: 'Собаки' },
        { title: 'Тигры' }
      ]
    },
    {
      title: 'Рыбы', 
      items: 
      [
        {
          title: 'Аквариумные',
          items: 
          [
            { title: 'Гуппи' },
            { title: 'Скалярии' }
          ]
        },
        {
          title: 'Форель',
          items: 
          [
            { title: 'Морская форель' }
          ]
        },
      ]
    },
    {
      title: 'Другие', items: [
        { title: 'Змеи' },
        { title: 'Птицы' },
        { title: 'Ящерицы' },
      ],
    }
  ]
};


// генерируем меню из дерева объектов
function genMenu( tree ): string {
  let content: string = ``;
  
  content += '<ul>';

  if ('title' in tree) {
    content += (`<li class='closed'><a class='title'>${tree.title}</a>`);
  }

  if ('items' in tree) {
    // если items имеет вложенные items
    content += `<ul>`;

    tree.items.forEach( (item) => {
      content += (`<li class='closed'><a class='title'>${item.title}</a>`);
      if ('items' in item) {
        content += genMenu( item.items );
      }
      content += '</li>';
    });
    
    content += `</ul>`;
  } else {
    // если items не имеет вложенных items
    tree.forEach( (item) => {
      if ('title' in item) {
        content += (`<li class='closed'><a class='title'>${item.title}</a>`);
      }
      if ('items' in item) {
        content += genMenu( item.items );
      }   
      content += '</li>';
    } );
  }

  content += '</li></ul>';

  return content;
}

// ищем div меню
let myMenu = document.querySelector('.menu') as HTMLDivElement;
// запускаем генератор
myMenu.innerHTML = genMenu( menu );

// клик-хэндлер
myMenu.onclick = (ev: MouseEvent) => {
    let el = ev.target as HTMLAnchorElement;
    let classList = el.classList;

    if (!classList.contains('title')) {
        return;
    }

    let parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle('closed');
}
