const verse = document
  .getElementById("new-verse-btn")
  .addEventListener("click", () => {
    alert("hello VERSE");
  });
const fb = document.getElementById("fb-btn").addEventListener("click", () => {
  alert("hello fb");
});

const apiUrl = `https://labs.bible.org/api/?passage=random`;

async function logJSONData() {
  const response = await fetch(
    "http://crossorigin.me/https://labs.bible.org/api/?passage=random"
  );
  console.log(response);
}
console.log("hello");
logJSONData();
