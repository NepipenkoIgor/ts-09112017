var menu = {
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
            title: 'Рыбы', items: [
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
        },
        {
            title: 'Другие', items: [
                { title: 'Змеи' },
                { title: 'Птицы' },
                { title: 'Ящерицы' },
            ]
        }
    ]
};
var BRANCH_CLASS = 'branch';
var OPEN_BRANCH_CLASS = 'open';
var CLOSED_BRANCH_CLASS = 'closed';
var LIF_CLASS = 'lif';
var ANCHOR_CLASS = 'anchor';
var createMenuItem = function (data, target) {
    /* В реальном проекте меню скорее всего будет приходить из неконтролируемого нами источника (с бека),
     * поэтому вот мое первое разочарование в TipeScript: интерфейс нас никак не защищает от некорретных данных,
     * и мы всеравно вынуждены писать проверку формата данных и реакцию на несоответсвие формата ожиданию.
     * Вот только теперь мы не можем написать тесты, проверяющие, что мы правильно реагируем на неверный формат.
     */
    if (!Array.isArray(data)) {
        throw new Error('Изначально неверный формат данных');
    }
    ;
    var ul = document.createElement('ul');
    var fragment = data.reduce(function (frag, _a) {
        var title = _a.title, _b = _a.items, items = _b === void 0 ? [] : _b;
        if (typeof title !== 'string') {
            throw new Error('Неверный формат заголовка');
        }
        if (!Array.isArray(items)) {
            throw new Error('Свойство items не является массивом');
        }
        var length = items.length;
        var li = document.createElement('li');
        li.className = length > 0 ? BRANCH_CLASS + " " + OPEN_BRANCH_CLASS : LIF_CLASS;
        var a = document.createElement('a');
        a.className = ANCHOR_CLASS;
        a.appendChild(document.createTextNode(title));
        li.appendChild(a);
        if (length > 0) {
            createMenuItem(items, li);
        }
        frag.appendChild(li);
        return frag;
    }, document.createDocumentFragment());
    ul.appendChild(fragment);
    target.appendChild(ul);
};
window.onload = function (event) {
    try {
        var target = document.getElementById('menu');
        createMenuItem([menu], target);
        target.addEventListener('click', function (event) {
            var target = event.target;
            if (target.className === ANCHOR_CLASS) {
                var parent_1 = target.parentNode;
                var className = parent_1.className;
                if (className !== LIF_CLASS) {
                    parent_1.className = className.split(' ').indexOf(OPEN_BRANCH_CLASS) >= 0
                        ?
                            BRANCH_CLASS + " " + CLOSED_BRANCH_CLASS
                        :
                            BRANCH_CLASS + " " + OPEN_BRANCH_CLASS;
                }
            }
            event.preventDefault();
            event.stopPropagation();
            return false;
        }, false);
    }
    catch (error) {
        var body = document.body;
        while (body.childElementCount > 0) {
            body.removeChild(body.firstElementChild);
        }
        var errDiv = document.createElement('div');
        errDiv.appendChild(document.createTextNode(error.message));
        errDiv.className = 'error-msg';
        body.appendChild(errDiv);
    }
};
