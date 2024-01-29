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


