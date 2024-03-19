const btnUno = document.getElementById("btnUno");

btnUno.addEventListener("click", ()=>{
    Swal.fire({
        title: "TIENDA CAFE ",
        text: "¡Proba nuestros tipos de café!",
        imageUrl: "../lista de verificacion.jpg",
        confirmButtonText: "aceptar",
    })

})

const btnDos = document.getElementById("btnDos");
btnDos.addEventListener("click", ()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "../lista de verificacion.jpg",
        title: "Producto comprado"
      });

})














const MARCA = "TIENDA"
const BIENVENIDA = "¡Bienvenido a la ${MARCA}!";
{}

console.log(MARCA);

alert(MARCA);
let nombre = prompt ("Ingrese su nombre");


function saludar(nombre) {
    console.log("Hola" + nombre);
}

saludar(nombre);

let usuario = prompt ("¿Has iniciado sesión? Responda si o no");
let respuesta = "si";

if (usuario === respuesta) { 
    console.log ("¡Bienvenido!")
}else {
    console.log ("Por favor, inicie sesión")
};


let segundos = 10;

while(segundos >= 0) {
    console.log("cuenta regresiva" + segundos);
    segundos--;
}

console.log("tiempo cumplido");



let descuento = true;
let stock = 2;

if (stock >= 1 && descuento == true) {
    console.log("producto disponible y con descuento")
} else if (stock >= 1 && descuento == false) {
    console.log("producto disponible")
} else if (stock < 1 && descuento == true) {
    console.log("prodocto en descuento pero momentaneamente agotado")
} else {
    console.log("producto agotado")
}


//class Producto {
//    constructor(nombre, precio) {
//        this.nombre = nombre.toUpperCase () ;
//        this.precio = parseFloat (precio) ;
//        this.vendido = false ;
//    }
//    sumaIva() {
//        this.precio = this.precio * 5.25;
//    }
//    vender() {
//        this.vendido = true ; 
//    }
//}


//Declaramos un array de productos para almacenar objetos
//const productos = [];
//productos.push (new Producto ("cafe colombia", 5500));
//productos.push (new Producto ("cafe pike place", 5800));
//productos.push (new Producto ("cafe sumatra", 4600));
//productos.push (new Producto ("cafe verona", 6000));
//productos.push (new Producto ("cafe espresso roast", 8000));
//Iteramos el array con for..of para modificarlos a todos
//for (const producto of productos)
//     //producto.sumaIva();

//const nombres = producto.map((el) => el.nombre)
//console.log(nombres)
// [ 'cafe colombia', 'cafe pike place', 'cafe sumatra', 'cafe verona', 'cafe espresso roast']



const productos = [{id: 1, nombre: "cafe colombia", precio: 5500},
                  {id: 2, nombre: "cafe pike place", precio: 5800},
                  {id: 3, nombre: "cafe sumatra", precio: 4600},
                  {id: 4, nombre: "cafe verona", precio: 6000},
                  {id: 5, nombre: "cafe espresso roast", precio: 8000}]
//for (const producto of productos){
//    let contenedor = document.createElement ("div");
 //   contenedor.innerHTML = ``;
//    document.body.appenChild (contenedor);
//}

class Producto {
    constructor(id, nombre, description, imagen, precio){
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productosArray = [
    new Producto("1","Café","Colombia","url",5500),
    new Producto("2","Café", "Pike Place","url",5800),
    new Producto("3","Café","Sumatra","url",4600),
    new Producto("4","Café","Verona","url",6000),
    new Producto("5","Café","Espresso Roast","url",8000),
 ]

const contenedorProductos= document.getElementById("productos-container");

function agregarCards (productos){
    productos.forEach (producto =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="" alt="">
        <p>${producto.description}</p>
        <p>Precio: $ ${producto.precio}</p>
        `
        contenedorProductos.appendChild(card);
    })
}

agregarCards(productosArray);


function agregarProductosAlCarrito (productos){
    productos.forEach (producto =>{
        const card = document.createElement("div");
        card.classList.add("carrito");
        card.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="" alt="">
        <p>${producto.description}</p>
        <p>Precio: $ ${producto.precio}</p>
        `
        contenedorProductos.appendChild(carrito);
    })
}
agregarProductosAlCarrito(productosArray);

let carrito = []
let carritoEnLs = JSON.stringify(localStorage.getItem('carrito'))

if (carritoEnLs){
    carrito = carritoEnLs
}
renderCarrito (carrito)


//const productos = [{id: 1, producto: "cafe colombia", precio: 5500},
//                  {id: 2, producto: "cafe pike place", precio: 5800},
//                  {id: 3, producto: "cafe sumatra", precio: 4600},
//                  {id: 4, producto: "cafe verona", precio: 6000},
//                  {id: 5, producto: "cafe espresso roast", precio: 8000}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};
//Almacenar array completo
for (const producto of productos){
    guardarLocal("listaProductos", JSON.stringify(productos));
}

//const carrito = []
if (carrito.length === 0) {
    console.log ("El carrito esta vacio!")
}
carrito,length === 0 && console.log ("El carrito esta vacio")


fetch('./productos.json')











