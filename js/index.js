const MARCA = "TIENDA"
const BIENVENIDA = "¡Bienvenido a la $(MARCA)!";

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


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase () ;
        this.precio = parseFloat (precio) ;
        this.vendido = false ;
    }
    sumaIva() {
        this.precio = this.precio * 5.25;
    }
    vender() {
        this.vendido = true ; 
    }
}


//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push (new Producto ("cafe colombia", 5500));
productos.push (new Producto ("cafe pike place", 5800));
productos.push (new Producto ("cafe sumatra", 4600));
productos.push (new Producto ("cafe verona", 6000));
productos.push (new Producto ("cafe espresso roast", 8000));
//Iteramos el array con for..of para modificarlos a todos
for (const producto of productos)
producto.sumaIva();

const nombres = producto.map((el) => el.nombre)
console.log(nombres)
// [ 'cafe colombia', 'cafe pike place', 'cafe sumatra', 'cafe verona', 'cafe espresso roast']



