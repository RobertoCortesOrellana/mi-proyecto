// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaracion de Variables
let arreglo = [];
let nombreAmigo = "";

// Función obtiene el nombre de la caja de texto le resta los espacios al principio y final, si no es vacío lo incorpora al arreglo
//  y luego borra la caja de texto para el nuevo ingreso

function agregarAmigo(){
    nombreAmigo = document.getElementById('amigo').value.trim(); 
    if (nombreAmigo == ""){
        alert("Por favor, ingrese un nombre.");
    } else {
        if (arreglo.includes(nombreAmigo)){
            alert('Nombre duplicado, por favor ingrese otro nombre');
            LimpiaCaja();
            insertaTabla('ul',`${arreglo}`);
        } else {
            arreglo.push(nombreAmigo);
            LimpiaCaja();
            insertaTabla('ul',`${arreglo}`);
        }   
    }
return;
}

// Función inserta arreglo en pantalla y lo despliega como lista

function insertaTabla(elemento) {
    let elementoHTML = document.querySelector(elemento);
    for(let i = 0; i < arreglo.length; i = i + 1){
        let nuevoRegistro = document.createElement("li");
        nuevoRegistro.textContent = arreglo[i];
        elementoHTML.appendChild(nuevoRegistro);
    }
return;
}

// Función que limpia la caja de texto en que se ingresa el nombre
// y limpia el arreglo desplegado como lista en pantalla
function LimpiaCaja(){
    document.getElementById('amigo').value = "";
    document.querySelector('ul').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
return;
}

function sortearAmigo(){
    if (arreglo.length == 0){
        alert('Antes de sortear amigo, debe ingresar nombres');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * arreglo.length);
        let nombreSorteado = arreglo[indiceAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo secreto es: ${nombreSorteado}`;
        arreglo = [];
    }

return;
}