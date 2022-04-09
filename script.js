const nav = document.getElementById("nav");
const menuButton = document.getElementById("nav__button");
const menuItems = Array.from(document.getElementById("menu").children);
const dropDowns = menuItems.filter(i => i.classList.contains("has-dropdown"));
const theme = document.getElementById("theme");
const themeArray = ["dark", "light"];
let delay = 0;
let t = 0;

function closeMenu() {
    dropDowns.forEach(i => i.classList.remove("has-dropdown--dropped"));
    nav.classList.remove("nav--open");
    nav.scrollTo(0, 0);
}

menuItems.forEach(i => {
    i.style.transitionDelay = `${delay}s`;
    delay += 0.1;
});

menuButton.addEventListener("click", () => {
    if (nav.classList.contains("nav--open"))
        closeMenu();
    else
        nav.classList.add("nav--open");
});
dropDowns.forEach(i => {
    i.addEventListener("click", () => {
        dropDowns.forEach(j => j.classList.remove("has-dropdown--dropped"));
        i.classList.add("has-dropdown--dropped");
    });
});
nav.addEventListener("click", ev => {
    if (ev.target.tagName != "A")
        ev.stopPropagation();
});
theme.addEventListener("click", ev => {
    document.body.classList.toggle("page--light");
    t = (t + 1) % 2;
    ev.stopPropagation();
});
window.addEventListener("load", () => {
    const x = localStorage.getItem("theme");
    if (x == "light") {
        document.body.classList.add("page--light");
        t = 1;
    }
});
window.addEventListener("click", closeMenu);
window.addEventListener("beforeunload", () => {
    localStorage.setItem("theme", themeArray[t]);
});
