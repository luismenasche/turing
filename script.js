const nav = document.getElementById("nav");
const menuButton = document.getElementById("nav__button");
const menuItems = Array.from(document.getElementById("menu").children);
const dropDowns = menuItems.filter(i => i.classList.contains("has-dropdown"));
let delay = 0;

function closeMenu() {
    dropDowns.forEach(i => i.classList.remove("dropdown"));
    nav.classList.remove("open");
    nav.scrollTo(0, 0);
}

menuItems.forEach(i => {
    i.style.transitionDelay = `${delay}s`;
    delay += 0.1;
});

menuButton.addEventListener("click", () => {
    if (nav.classList.contains("open"))
        closeMenu();
    else
        nav.classList.add("open");
});
dropDowns.forEach(i => {
    i.addEventListener("click", () => {
        dropDowns.forEach(j => j.classList.remove("dropdown"));
        i.classList.add("dropdown");
    });
});
nav.addEventListener("click", ev => {
    if (ev.target.tagName != "A")
        ev.stopPropagation();
});
window.addEventListener("click", closeMenu);
