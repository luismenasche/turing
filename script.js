const nav = document.getElementById("nav");
const menuButton = document.getElementById("nav__button");
const menuItems = document.getElementById("menu").children;
let delay = 0;

for (let i of menuItems) {
    i.style.transitionDelay = `${delay}s`;
    delay += 0.1;
}

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});
window.addEventListener("scroll", () => {
    nav.classList.remove("open");
});
