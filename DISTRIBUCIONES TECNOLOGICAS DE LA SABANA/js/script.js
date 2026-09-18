let cantidadCarrito = 0;

function agregarCarrito() {

    cantidadCarrito++;

    document.getElementById("contador").textContent =
        cantidadCarrito;

    alert("Producto agregado al carrito.");
}


function buscarProducto() {

    const texto =
        document.getElementById("buscador").value;

    if (texto.trim() === "") {

        alert("Escribe el nombre de un producto.");

    } else {

        alert(
            "Buscando productos relacionados con: " + texto
        );

    }
}

