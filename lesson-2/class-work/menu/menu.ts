type MenuList = {
    title: string;
    link?: string;
    items?: MenuList;
}[]
type MenuOpt = {
    element: HTMLElement,
    menuList: MenuList
}
let menuList: MenuList = [
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
            }
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
            }
        ]
    }
];

class A {
    public a: number;
}

abstract class MenuGenerator {
    protected abstract _clickHandler(this: HTMLElement, ev: MouseEvent): void;
    protected abstract _generateMenu(menuList: MenuList): string;
}

class Menu extends MenuGenerator {
    protected _element: HTMLElement;
    protected _menuList: MenuList;

    public constructor(
        opt: MenuOpt
    ) {
        super();
        this._element = opt.element;
        this._menuList = opt.menuList;
        this._element.innerHTML = this._generateMenu(this._menuList);
        this._element.addEventListener('click', this._clickHandler)
    }

    protected _clickHandler(this: HTMLElement, ev: MouseEvent): void {
        let el: HTMLAnchorElement = ev.target as HTMLAnchorElement;
        let classList = el.classList;
        if (!classList.contains('title')) {
            return;
        }
        let parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open')
    }
    protected _generateMenu(menuList: MenuList): string {
        let content: string = `<ul>`;
        for (let a of menuList) {
            content += `<li><a ${a.items ? 'class=title' : ''}
            ${a.link ? 'href=' + a.link : ''}>${a.title}</a>`
            if (!a.items) {
                content += `</li>`;
                continue;
            }
            content += `${this._generateMenu(a.items)}</li>`;
        }
        return `${content}</ul>`
    }
}

let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({ element, menuList })