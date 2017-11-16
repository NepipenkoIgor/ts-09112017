var data = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },
    "Птицы": {
        "Попугаеобразные": {
            "Какаду": {
                "Черные какаду": {
                    "Шлемоносные какаду": {},
                    "Кореллы": {}
                },
                "Белые какаду": {
                    "Какаду": {},
                    "Какаду-инка": {}
                }
            },
            "Лори": {
                "Лори-гуа": {},
                "Лорикеты": {}
            },
            "Ара": {
                "Ара": {},
                "Гиацинтовые ара": {}
            }
        },
        "Дятлообразные": {
            "Якамаровые": {
                "Якамары": {},
                "Брахигальбы": {}
            },
            "Тукановые": {
                "Туканеты": {},
                "Арасари": {}
            }
        }
    },
    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};
// генерируем меню из дерева объектов
function genMenu(tree) {
    var content = "";
    var arr = Object.keys(tree);
    if (arr.length > 0) {
        content = "<ul>";
        for (var key in tree) {
            content += ("<li><a class='title'>" + key);
            var retStr = genMenu(tree[key]);
            if (retStr) {
                content += retStr;
            }
            content += "</a></li>";
        }
        content += '</ul>';
    }
    return content;
}
var myMenu = document.querySelector('.menu');
myMenu.innerHTML = genMenu(data);
myMenu.onclick = function (ev) {
    var el = ev.target;
    var classList = el.classList;
    if (!classList.contains('title')) {
        return;
    }
    var parentLi = el.parentNode;
    parentLi.classList.toggle('menu-open');
};
