const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
const closeDrawer = document.querySelector(".closeDrawer");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("openDrawer");
});
closeDrawer.addEventListener("click", () => {
  mobileNav.classList.remove("openDrawer");
});
