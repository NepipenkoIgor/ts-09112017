//type MenuItems = NodeListOf<HTMLElement>;
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
        return "<li>\n                    <a class=\"" + ("items" in item ? "title js-title" : "") + "\">" + item.title + "</a>\n                    " + ("items" in item ? generateMenu(item.items) : "") + "\n                </li>";
    }).join("") + "\n    </ul>";
}
function addEventHandlers(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            e.target.parentNode.classList.toggle('menu-open');
        });
    }
}
var navMenuList = document.querySelector(".menu");
navMenuList.innerHTML = generateMenu(menuList);
var menuItems = document.querySelectorAll('.js-title');
addEventHandlers(menuItems);
