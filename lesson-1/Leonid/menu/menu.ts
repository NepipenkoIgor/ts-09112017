interface MenuItem {
  title: string;
  items?: MenuItem[];
}

const menu: MenuItem = {
  title: 'Животные',
  items: [
    {
      title: 'Млекопитающие',
      items: [
        { title: 'Коровы' },
        { title: 'Ослы' },
        { title: 'Собаки' },
        { title: 'Тигры' }
      ]
    },
    {
      title: 'Рыбы', items: [
        {
          title: 'Аквариумные',
          items: [
            { title: 'Гуппи' },
            { title: 'Скалярии' }
          ]
        },
        {
        title: 'Форель',
        items: [
          { title: 'Морская форель'}
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

const BRANCH_CLASS: string = 'branch';
const OPEN_BRANCH_CLASS: string = 'open';
const CLOSED_BRANCH_CLASS: string = 'closed';
const LIF_CLASS: string = 'lif';
const ANCHOR_CLASS: string = 'anchor';
const ERROR_CLASS: string = 'error-msg';

const createMenuItem = (data: MenuItem[], target: HTMLElement): void => {
  /* В реальном проекте меню скорее всего будет приходить из неконтролируемого нами источника (с бека),
   * поэтому вот мое первое разочарование в TipeScript: интерфейс нас никак не защищает от некорретных данных,
   * и мы всеравно вынуждены писать проверку формата данных и реакцию на несоответсвие формата ожиданию.
   * Вот только теперь мы не можем написать тесты, проверяющие, что мы правильно реагируем на неверный формат.
   */

   if (!Array.isArray(data)) {
     throw new Error('Изначально неверный формат данных');
   };

   const ul: HTMLUListElement = document.createElement('ul') as HTMLUListElement;

   const fragment: DocumentFragment = data.reduce((frag: DocumentFragment, { title, items = [] }: MenuItem) => {
    if (typeof title !== 'string') {
      throw new Error('Неверный формат заголовка');
    }

    if (!Array.isArray(items)) {
      throw new Error('Свойство items не является массивом');
    }

    const { length } = items;

    const li: HTMLLIElement = document.createElement('li') as HTMLLIElement;
    li.className = length > 0 ? `${BRANCH_CLASS} ${OPEN_BRANCH_CLASS}` : LIF_CLASS;

    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
    a.className = ANCHOR_CLASS;
    a.appendChild(document.createTextNode(title));

    li.appendChild(a);

    if (length > 0) {
      createMenuItem(items, li);
    }

    frag.appendChild(li);

     return frag;
   }, document.createDocumentFragment() as DocumentFragment) as DocumentFragment;

   ul.appendChild(fragment);

   target.appendChild(ul);
};


window.onload = (event: Event) => {
  try {
    const target: HTMLElement = document.getElementById('menu') as HTMLElement;
    createMenuItem([menu], target);

    target.addEventListener('click', (event: MouseEvent): boolean => {
      const target: HTMLElement = event.target as HTMLElement;

      if (target.className === ANCHOR_CLASS) {
        const parent: HTMLElement = target.parentNode as HTMLElement;

        const className: string = parent.className;

        if (className !== LIF_CLASS) {
          parent.className = className.split(' ').indexOf(OPEN_BRANCH_CLASS) >= 0
            ?
            `${BRANCH_CLASS} ${CLOSED_BRANCH_CLASS}`
            :
            `${BRANCH_CLASS} ${OPEN_BRANCH_CLASS}`;
        }
      }

      event.preventDefault();
      event.stopPropagation();
      return false;
    }, false);
  } catch (error) {
    const body: HTMLBodyElement = document.body as HTMLBodyElement;

    while (body.childElementCount > 0) {
      body.removeChild(body.firstElementChild as HTMLElement);
    }

    const errDiv: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    const dataDiv: HTMLDivElement = document.createElement('div') as HTMLDivElement;
    dataDiv.appendChild(document.createTextNode(error.message));
    errDiv.appendChild(dataDiv);
    errDiv.className = ERROR_CLASS;
    body.appendChild(errDiv);
  }
};
