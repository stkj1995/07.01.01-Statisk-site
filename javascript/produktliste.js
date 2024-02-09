const urlParams = new URLSearchParams(window.location.search);
const kat = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + kat)
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
  copy.querySelector(".se-mere").href = `produkt.html?id=${product.id}`;

  copy.querySelector(".lilleprodukt img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //appende
  document.querySelector("main").appendChild(copy);
}
