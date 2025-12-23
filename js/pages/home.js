import { products } from "../data/products.js";

function getProductCard(obj) {
  return `
        <article>
            <h3>${obj.name}</h3>
            <p>${obj.category}</p>
            <a href="/product#${obj.id}">Details</a>
        </article>
    `;
}
function homePageUi() {
  return `
        <h1>Products</h1>
        ${products.map(getProductCard).join("")}
    `;
}

export default function render() {
  document.getElementById("app").innerHTML = homePageUi();
}
