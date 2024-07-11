import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-form]");

async function crearProducto(){

    //evento.preventDefault();

    const img = document.querySelector("[data-img]").value; 
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;  

    await conexionAPI.enviarProducto(img, name, price)
}

formulario.addEventListener("submit", evento => crearProducto(evento));