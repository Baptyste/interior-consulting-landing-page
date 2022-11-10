const menu = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".mobile");
const closed = document.querySelector(".close");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

closed.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});
