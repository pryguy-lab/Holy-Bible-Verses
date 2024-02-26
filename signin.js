let mainBtn = document.querySelector(".mainBtn");
let answer = document.querySelector(".answer");

mainBtn.addEventListener("click", () => {
  let user = prompt("Please enter your name");
  answer.innerText = `hello ${user}, welcome back !`;
});
