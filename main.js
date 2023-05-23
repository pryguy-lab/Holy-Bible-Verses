const verse = document
  .getElementById("new-verse-btn")
  .addEventListener("click", () => {
    alert("hello VERSE");
  });
const fb = document.getElementById("fb-btn").addEventListener("click", () => {
  alert("hello fb");
});

const apiUrl = `https://labs.bible.org/api/?passage=random`;

async function getVerses() {
  try {
    const response = await fetch(apiUrl);
    versesArray = await response.json();
    console.log(versesArray);
  } catch (error) {}
}
