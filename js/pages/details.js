import { products } from "../data/products.js";

function getFeature(feature) {
  return `<li>${feature}</li>`;
}
function productDetailsPage(obj) {
  return `<article>
        <hgroup>
            <h2>${obj.name}</h2>
            <p>${obj.category}</p>
        </hgroup>
        <p>${obj.details}</p>
        <footer>
            <h4>Features</h4>
            <ul>${obj.features.map(getFeature).join("")}</ul>
            <a href="/">Back</a>
        </footer>
    </article>`;
}

function isIdMatches(obj) {
  const id = Number(window.location.hash.replace("#", ""));
  return obj.id === id;
}

function errorBanner() {
  return `<hgroup>
      <h2>Product Id Not Found</h2>
      <p>Look again, this product id is not present in the DB. Go back to home</p>
    </hgroup>`;
}

export default function render() {
  const productObj = products.find(isIdMatches);
  if (!productObj) {
    document.getElementById("app").innerHTML = errorBanner();
    return;
  }
  document.getElementById("app").innerHTML = productDetailsPage(productObj);
}
