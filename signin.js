let mainBtn = document.querySelector(".mainBtn");
let answer = document.querySelector(".answer");
let midsection = document.querySelector(".midsection");
let hamburger = document.querySelector(".hamburger");

mainBtn.addEventListener("click", (e) => {
  e.target.remove();
  user = prompt("Please enter your name or press enter");
  midsection.classList.add("active");
  if (user == null) {
    answer.innerText = `God bless you !  Please make a selection.`;
  } else answer.innerText = `hello ${user}!, Please make a selection.`;
});
hamburger.addEventListener("click", () => {
  alert("test message !");
});
