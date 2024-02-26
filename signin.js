let mainBtn = document.querySelector(".mainBtn");
let answer = document.querySelector(".answer");
let midsectionon = document.querySelector(".midsectionon");

mainBtn.addEventListener("click", (e) => {
  e.target.remove();
  let user = prompt("Please enter your name or press enter");
  midsectionon.classList.add();
  answer.innerText = `hello ${user}, welcome to our website!  Please make a selection`;
});
