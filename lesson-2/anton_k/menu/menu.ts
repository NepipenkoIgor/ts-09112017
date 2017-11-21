// 5) Улучшите класс с менюшкой добавив публичные методы
// getElem -возвращает елемент в котором генерится меню;
//  toggle открыть/закрыть элемент меню по метке;
//  close закрыть элемент меню по метке;
//  open открыть элемент меню по метке

// в интерфейсе реализуйте кнопками вызов этих методов ( например над меню)
// P.S. для демонстрации

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
    protected _self: Menu;

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
    public getElem(): HTMLElement {
        return this._element;
    }

    public getElemByTitle(title: string): HTMLElement | null {
        let arr: NodeListOf<HTMLElement> = this._element.querySelectorAll('a');
        for (let i = 0; i < arr.length; i++) {
            let textElem = arr[i].firstChild;
            if (textElem !== null) {
                if (textElem.nodeValue === title) {
                    return textElem.parentElement;
                }
            }
        }
        return null;
    }

    public toggleNode(menuTitle: string): void {
        let node = this.getElemByTitle(menuTitle);

        if (node !== null) {
            let classList = node.classList;
            if (!classList.contains('title')) {
                return;
            }

            let parent: HTMLLIElement = node.parentNode as HTMLLIElement;
            parent.classList.toggle('menu-open');
        }
    }

    public closeNode(menuTitle: string): void {
        let node = this.getElemByTitle(menuTitle);

        if (node !== null) {
            let classList = node.classList;
            if (!classList.contains('title')) {
                return;
            }

            let parent: HTMLLIElement = node.parentNode as HTMLLIElement;
            parent.classList.remove('menu-open');
        }
    }

    public openNode(menuTitle: string): void {
        let node = this.getElemByTitle(menuTitle);

        if (node !== null) {
            let classList = node.classList;
            if (!classList.contains('title')) {
                return;
            }

            let parent: HTMLElement | null = node.parentNode as HTMLElement;
            while (parent) {
                if (parent.nodeName === 'LI') {
                    parent.classList.add('menu-open');
                }

                parent = parent.parentElement;
            }
        }
    }
}

let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({ element, menuList })