const btnUno = document.getElementById("btnUno");

btnUno.addEventListener("click", ()=>{
    Swal.fire({
        title: "TIENDA CAFE ",
        text: "¡Proba nuestros tipos de café!",
        imageUrl: "../lista de verificacion.jpg",
        confirmButtonText: "aceptar",
    })

})


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 5.25;
//     }
//     vender() {
//         this.vendido = true;
//     }
// }


//Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("cafe colombia", 5500));
// productos.push(new Producto("cafe pike place", 5800));
// productos.push(new Producto("cafe sumatra", 4600));
// productos.push(new Producto("cafe verona", 6000));
// productos.push(new Producto("cafe espresso roast", 8000));
//Iteramos el array con for..of para modificarlos a todos
// for (const producto of productos)
//     producto.sumaIva();

// const nombres = producto.map((el) => el.nombre)
// console.log(nombres)
// [ 'cafe colombia', 'cafe pike place', 'cafe sumatra', 'cafe verona', 'cafe espresso roast']


class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


const productosArray = [
    new Producto(1, "Café Colombia", 5500),
    new Producto(2, "Café Pike Place", 5800),
    new Producto(3, "Café Sumatra", 4600),
    new Producto(4, "Café Verona", 6000),
    new Producto(5, "Café Espresso Roast", 8000)
];


function agregarCards(productos) {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Precio: $ ${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(card);
    });
}


function agregarAlCarrito(idProducto) {
    const producto = productosArray.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        renderCarrito(carrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

function quitarDelCarrito(idProducto) {
    carrito = carrito.filter(producto => producto.id !== idProducto);
    renderCarrito(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function finalizarCompra() {
    carrito = [];
    renderCarrito(carrito);
    localStorage.removeItem('carrito');
    alert("¡Gracias por tu compra!");
}

function renderCarrito(carrito) {
    contenedorCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("carrito-item");
        item.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Precio: $ ${producto.precio}</p>
            <button onclick="quitarDelCarrito(${producto.id})">Quitar del Carrito</button>
        `;
        contenedorCarrito.appendChild(item);
    });
}

const contenedorProductos = document.getElementById("productos-container");
const contenedorCarrito = document.getElementById("carrito-container");


let carrito = [];

const carritoEnLs = localStorage.getItem('carrito');
if (carritoEnLs) {
    carrito = JSON.parse(carritoEnLs);
}

agregarCards(productosArray);


const finalizarCompraButton = document.getElementById("finalizar-compra");


finalizarCompraButton.addEventListener("click", finalizarCompra);


// Estilos para el botón de finalizar compra
finalizarCompraButton.style.backgroundColor = "#4CAF50"; /* Verde */
finalizarCompraButton.style.border = "none";
finalizarCompraButton.style.color = "white";
finalizarCompraButton.style.padding = "15px 32px";
finalizarCompraButton.style.textAlign = "center";
finalizarCompraButton.style.textDecoration = "none";
finalizarCompraButton.style.display = "inline-block";
finalizarCompraButton.style.fontSize = "16px";



const url = "../productos.json"
const app = document.getElementById("app");

fetch(url)
.then(response => response.json())
.then((datos) =>{
    console.log(datos)
    mostrarCafe(datos);
})
.catch(error => console.log(error))
.finally(() => console.log("proceso finalizado"));

function mostrarCafe(datos){
    datos.forEach(cafe => {
        const div = document.createElement("div");
        div.innerText = `${cafe.nombre}`;
        app.appendChild(div)
    })
}











