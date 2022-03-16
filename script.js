const checkbox = document.getElementById("nav__checkbox");
window.addEventListener("scroll", () => checkbox.checked = false);

const menu = document.getElementById("menu");
const menuItems = menu.children;
let delay = 0;
for (let i of menuItems) {
    i.style.transitionDelay = `${delay}s`;
    delay += 0.1;
}
