// {/* <form id= "formulario">
//     <input type= "email"></input>
//     <input type= "password"></input>
//     <input type= "submit" value="Enviar"></input>
// </form> */}

let miFormulario =
document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();

    const email = document.getElementById("exampleInputEmail1");
    const pass = document.getElementById("exampleInputPassword1")
    let formulario = e.target
    console.log(email.value);
    console.log(pass.value);
}