import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(img, name, price){
    const card = document.createElement("li");
    card.className="cards_item";
    card.innerHTML = `
            <img src="${img}" height="200px">
            <p class="product-name">${name}</p>
            <p class="product-price">$ ${price}</p>
        `;

    return card;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(product=>lista.appendChild(crearCard(product.img, product.name, product.price)))
}

listarProductos();