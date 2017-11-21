
class MenuNode {
    public title: string;
    items?: MenuNode[];
}

type Menu = MenuNode[];

const menu: Menu = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопетающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
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
    },
    {
        title: 'Другие',
        items: [
            { title: 'Змеи' },
            { 
                title: 'Птицы',
                items: 
                [
                    {
                        title: "Орлы",
                        items: 
                        [
                            {
                                title: "Североамериканские",
                                items:
                                [
                                    {
                                        title: "Белоголовый орлан"
                                    }
                                ]
                            }
                        ]
                    }

                ]
            },
            { title: 'Ящерицы' },
        ]
    }
];

function createMenu(list: Menu): string {

    let content: string = `<ul>`;
    for (const node of list) {

        content += renderMenuNode(node);
    }
    content += `</ul>`;

    console.log(content);

    return content;
}

function renderMenuNode(menuNode: MenuNode): string {

    let nodeStyle = isSubMenuNode(menuNode.items) ? 'class="title"' : '';
    let html = `<li><a ${nodeStyle}>${menuNode.title}</a>`;

    if(isSubMenuNode(menuNode.items)) {
       html += `<div class="menu"><ul>`;
        for (const item of menuNode.items) {
            html += renderMenuNode(item);
        }
       html += `</ul></div>`;
    }
    html += `</li>`;

    console.log(html);

    return html;
}

function isSubMenuNode(nodeItems: MenuNode[] | undefined): nodeItems is MenuNode[] {
    return nodeItems !== undefined;
}

let navMenu = document.querySelector(".menu") as HTMLDivElement;
navMenu.innerHTML = createMenu(menu);
navMenu.onclick = (ev: MouseEvent): void => {

    const el = ev.target as HTMLAnchorElement;

    const classlist = el.classList;
    if (!classlist.contains("title")) {
        return;
    }
    const parentLi = el.parentNode as HTMLLIElement;
    parentLi.classList.toggle("menu-open");
}
