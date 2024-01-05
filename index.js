const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");
const closeDrawer = document.querySelector(".closeDrawer");

hamburger.addEventListener("click", () => {
  bar1.classList.add("animateBar1");
  bar2.classList.add("animateBar2");
  bar3.classList.add("animateBar3");
  mobileNav.classList.add("openDrawer");

  closeDrawer.addEventListener("click", () => {
    bar1.classList.remove("animateBar1");
    bar2.classList.remove("animateBar2");
    bar3.classList.remove("animateBar3");
    mobileNav.classList.remove("openDrawer");
  });
});
