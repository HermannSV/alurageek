async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const parseConexion = conexion.json();
    console.log(parseConexion);

    return parseConexion
}

async function enviarProducto(img, name, price){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            img:img,
            name:name,
            price:price
        })
    })
    const parseConexion = conexion.json();

    return parseConexion;
}

export const conexionAPI={
    listarProductos,enviarProducto
}