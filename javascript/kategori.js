fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showcategorys);

function showcategorys(categorys) {
  //looper og kalder showcategory
  categorys.forEach(showcategory);
}

function showcategory(category) {
  console.log("hvad henter jeg", category);
  //fang template
  const template = document.querySelector("#kategoritemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("a").textContent = category.category;

  copy.querySelector("a").href = `produktliste.html?category=${category.category}`;

  //appende
  document.querySelector(".kategoriliste").appendChild(copy);
}

/*

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

fetch("https://kea-alt-del.dk/t7/api/produktliste.html?season=summer" + season)
  .then((response) => response.json())
  .then((data) => showcategory(data));

function showcategory(category) {
  console.log(category);
  document.querySelector(".tilvalg h3").textContent = category.categorydisplayname;
  document.querySelector(".tilvalg .koen").textContent = category.gender;
  document.querySelector(".tilvalg .overdel").textContent = category.subcategory;
  document.querySelector(".tilvalg .brand").textContent = category.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${category.id}.webp`;
}
*/
