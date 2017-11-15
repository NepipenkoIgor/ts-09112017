var menuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {
                        title: 'Парнокопытные',
                        items: [
                            { title: 'Коровы' },
                            { title: 'Овцы' }
                        ]
                    },
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
                ]
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
function generateMenu(list) {
    return "<ul>\n        " + list.map(function (item) {
        return "<li>\n                    <a class=\"" + ("items" in item ? "title" : "") + "\">" + item.title + "</a>\n                    " + ("items" in item ? generateMenu(item.items) : "") + "\n                </li>";
    }).join("") + "\n    </ul>";
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
