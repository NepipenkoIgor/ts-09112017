interface IListItem {
    title: string;
    items: any[];
}
type MenuList = IListItem[];

const menuList: MenuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {
                        title: 'Парнокопытные',
                        items: [
                            {title: 'Коровы'},
                            {title: 'Овцы'}
                        ]
                    },
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
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
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'}
                ]
            },
        ]
    }
];

function generateMenu(list: MenuList): string {
    return `<ul>
        ${
            list.map((item) => {
                return `<li>
                    <a class="${`items` in item ? `title` : ``}">${item.title}</a>
                    ${`items` in item ? generateMenu(item.items): ``}
                </li>`
            }).join(``)
        }
    </ul>`;
}

let navMenuList = document.querySelector(".menu") as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = (ev: MouseEvent) => {
    const el = ev.target as HTMLAnchorElement;
    const classlist = el.classList;
    if (!classlist.contains("title")) {
        return;
    }
    const parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle("menu-open");
};
