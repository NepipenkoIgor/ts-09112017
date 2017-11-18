interface IListItem {
    title: string;
    items: string[];
}
type MenuList = IListItem[];

const menuList: MenuList = [
    { title: "JavaScript", items: ["React", "Angular", "Cycle.js"] },
    { title: "Dart", items: ["Flutter", "Angular", "Polymer"] },
];

function generateMenu(list: MenuList): string {
    let content: string = `<ul>`;
    for (const a of list) {
        content += `<li><a class="title">${a.title}</a><ul>`;
        for (const item of a.items) {
            content += `<li><a >${item}</a></li>`;
        }
        content += `</li></ul>`;
    }
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
