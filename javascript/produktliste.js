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
<article class="lilleprodukt">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
                    alt="Sahara Team India Fanwear Round Neck Jersey">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p class="skjult">Herre | Tshirts | Nike</p>
                <p class="pris">
                    <span>Nuv. pris</span>
                    DKK 895,-
                </p>
                <a href="produkt.html">Se mere</a>
            </article>


{
    "id": 1165,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "season": "Summer",
    "productionyear": 2013,
    "usagetype": "Sports",
    "productdisplayname": "Mean Team India Cricket Jersey",
    "price": 2495,
    "discount": 45,
    "brandname": "Nike",
    "soldout": 0
}
*/
