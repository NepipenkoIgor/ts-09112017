// import {menuTree} from "./menuMock";

const menuTree = [
    {
        title: "Животные",
        items: [
            {
                title: "Млекопитающие",
                items: [
                    {title: "Коровы"},
                    {title: "Ослы"},
                    {title: "Собаки"},
                    {title: "Тигры"}
                ]
            },
            {
                title: "Другие",
                items: [
                    {title: "Змеи"},
                    {title: "Птицы"},
                    {title: "Ящерицы"},
                ],
            },
        ]
    },
    {
        title: "Рыбы",
        items: [
            {
                title: "Аквариумные",
                items: [
                    {title: "Гуппи"},
                    {title: "Скалярии"}
                ]
            },
            {
                title: "Форель",
                items: [
                    {title: "Морская форель"}
                ]
            },
        ]
    }
];

interface IMenuItem {
    title: string;
    items?: IMenuItem[];
}

type MenuTree = IMenuItem[];

const menuList: MenuTree = menuTree;

function generateMenu(list: MenuTree): string {
    let content: string = `<ul>`;
    list.forEach((a) => {
        {
            content += `<li><a class="title">${a.title}</a><ul>`;
            if (a.items) {
                a.items.forEach((item) => {
                        let submenu;
                        if (item.items) submenu = generateMenu(item.items)
                        content += `<li>
<a >${item.title}</a>
${submenu}
</li>`;
                    }
                )

                /*
                                a.items.forEach((item)=>{
                                        content += `<li><a >${item}</a></li>`;
                                    }
                                )
                */
                /*         for (const item of a.items) {
                             content += `<li><a >${item}</a></li>`;
                         }*/

            }
            content += `</li></ul>`;
        }

    })
    content += `</ul>`;
    return content;
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
