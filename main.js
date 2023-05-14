const verse = document
  .getElementById("new-verse-btn")
  .addEventListener("click", () => {
    alert("hello VERSE");
  });
const fb = document.getElementById("fb-btn").addEventListener("click", () => {
  alert("hello fb");
});
const apiKey = "46bb0297b1931afc851a3877bf2f1e50";

const apiUrl = `
https://api.scripture.api.bible/v1/bibles/kjv/books?include-chapters=true&client_id=${apiKey}`;

async function getVerses() {
  try {
    const response = await fetch(apiUrl);
    versesArray = await response.json();
  } catch (error) {}
}
