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
                    <a class="${`items` in item ? `title js-title` : ``}">${item.title}</a>
                    ${`items` in item ? generateMenu(item.items): ``}
                </li>`
            }).join(``)
        }
    </ul>`;
}

function addEventHandlers(items: NodeList): void {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', (e) => {
           ((e.target as HTMLElement).parentNode as HTMLElement).classList.toggle('menu-open')
        });
    }
}

let navMenuList = document.querySelector(".menu") as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
let menuItems = document.querySelectorAll('.js-title');
addEventHandlers(menuItems);