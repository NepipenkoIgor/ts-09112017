"use strict";
var menuList = [
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
function generateMenu(list) {
    var output = '<ul>';
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        output += "<li><a class=\"title\">" + item.title + "</a>";
        if (Array.isArray(item.items)) {
            output += generateMenu(item.items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}
var navMenu = document.querySelector('.menu');
navMenu.innerHTML = generateMenu(menuList);
navMenu.onclick = function (e) {
    var el = e.target;
    var classlist = el.classList;
    if (!classlist.contains("title")) {
        return;
    }
    var parentLi = el.parentNode;
    parentLi.classList.toggle("menu-open");
};
