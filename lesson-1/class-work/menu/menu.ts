interface IListItem {
    title: string;
    items?: IListItem[];
}

type TMenuList = IListItem[];

const menuList: TMenuList = [
    {
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
                title: 'Другие',
                items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ],
            },
        ]
    },
    {
        title: 'Рыбы',
        items: [
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
                    { title: 'Морская форель' }
                ]
            },
        ]
    }
];

function generateMenu(list: TMenuList): string {
    let output: string = '<ul>';
    for (const item of list) {
        output += `<li><a class="title">${item.title}</a>`;
        if (Array.isArray(item.items)) {
            output += generateMenu(item.items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}

let navMenu = document.querySelector('.menu') as HTMLDivElement;
navMenu.innerHTML = generateMenu(menuList);
navMenu.onclick = (e: MouseEvent) => {
    const el = e.target as HTMLAnchorElement;
    const classlist = el.classList;
    if (!classlist.contains("title")) {
        return;
    }
    const parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle("menu-open");
}