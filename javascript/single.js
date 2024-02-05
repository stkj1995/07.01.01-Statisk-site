const parametre = new URLSearchParams(windows.location.search);
const id = parametre.get("id");

fetch(`https://api.punkapi.com/v2/products/${id}`)
  .then((res) => res.json())
  .then(vis);

// const temp = document.querySelector("template").content;
// const parent = document.querySelector("section");

function vis(data) {
  console.log(data);
  document.querySelector("h2").textContent = data.productdisplayname;
}
