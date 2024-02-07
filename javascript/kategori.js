fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#lilleproduktTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("udsolgt");
  }
  copy.querySelector(".se-mere").setAttribute("href", `produkt.html?id=${product.id}`);
  copy.querySelector(".lilleprodukt img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //appende
  document.querySelector("main").appendChild(copy);
}


/*

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

fetch("https://kea-alt-del.dk/t7/api/produktliste.html?season=summer" + season)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".tilvalg h3").textContent = product.productdisplayname;
  document.querySelector(".tilvalg .koen").textContent = product.gender;
  document.querySelector(".tilvalg .overdel").textContent = product.subcategory;
  document.querySelector(".tilvalg .brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
*/
