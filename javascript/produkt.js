//https://kea-alt-del.dk/t7/api/products/1163
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
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

/*
{
    "id": 1163,
    "gender": "Men",
    "category": "Apparel",
    "subcategory": "Topwear",
    "articletype": "Tshirts",
    "basecolour": "Blue",
    "season": "Summer",
    "productionyear": 2011,
    "usagetype": "Sports",
    "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
    "parsed": 1,
    "soldout": 0,
    "relid": 1163,
    "price": 895,
    "discount": null,
    "variantname": "Roundneck Jersey",
    "brandname": "Nike",
    "brandbio": "Nike, creating experiences for today’s athlete",
    "brandimage": "http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg",
    "agegroup": "Adults-Men",
    "colour1": "NA",
    "colour2": "NA",
    "fashiontype": "Fashion",
    "materialcaredesc": "<p>100% polyester<br>Machine wash</p>",
    "sizefitdesc": null,
    "description": "<p>Blue round neck Sahara Team India jersey, has short sleeves, print on the chest and back chest<br><br>Warranty for manufacturing defects: 6 months (not valid on products with more than 20% discount)<br></p>",
    "styledesc": "<p>Cheer for the Indian cricket team on and off the fields in this blue polo neck jersey from Nike. "
}
*/
