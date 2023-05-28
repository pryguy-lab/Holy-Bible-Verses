const verse = document
  .getElementById("new-verse-btn")
  .addEventListener("click", () => {
    alert("hello VERSE");
  });
const fb = document.getElementById("fb-btn").addEventListener("click", () => {
  alert("hello fb");
});

async function logJSONData() {
  const response = await fetch("https://bible-api.com");
  const data = await response.json;
  console.log(data);
  // console.log(data);
}
// console.log("hello");
logJSONData();
