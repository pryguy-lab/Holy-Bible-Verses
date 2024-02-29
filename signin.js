let mainBtn = document.querySelector(".mainBtn");
let answer = document.querySelector(".answer");
let midsection = document.querySelector(".midsection");

mainBtn.addEventListener("click", (e) => {
  e.target.remove();
  user = prompt("Please enter your name or press enter");
  midsection.classList.add("active");
  if (user == null) {
    answer.innerText = `God bless you !  Please make a selection.`;
  } else
    answer.innerText = `hello ${user}, welcome to the website!  Please make a selection.`;
});
