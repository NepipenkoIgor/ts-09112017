// import {menuTree} from "./menuMock";
var menuTree = [
    {
        title: "Животные",
        items: [
            {
                title: "Млекопитающие",
                items: [
                    { title: "Коровы" },
                    { title: "Ослы" },
                    { title: "Собаки" },
                    { title: "Тигры" }
                ]
            },
            {
                title: "Другие",
                items: [
                    { title: "Змеи" },
                    { title: "Птицы" },
                    { title: "Ящерицы" },
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
                    { title: "Гуппи" },
                    { title: "Скалярии" }
                ]
            },
            {
                title: "Форель",
                items: [
                    { title: "Морская форель" }
                ]
            },
        ]
    }
];
var menuList = menuTree;
function generateMenu(list) {
    var content = "<ul>";
    list.forEach(function (a) {
        {
            content += "<li><a class=\"title\">" + a.title + "</a><ul>";
            if (a.items) {
                a.items.forEach(function (item) {
                    var submenu;
                    if (item.items)
                        submenu = generateMenu(item.items);
                    content += "<li>\n<a >" + item.title + "</a>\n" + submenu + "\n</li>";
                });
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
            content += "</li></ul>";
        }
    });
    content += "</ul>";
    return content;
}
var navMenuList = document.querySelector(".menu");
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = function (ev) {
    var el = ev.target;
    var classlist = el.classList;
    if (!classlist.contains("title")) {
        return;
    }
    var parentLi = el.parentNode;
    parentLi.classList.toggle("menu-open");
};
