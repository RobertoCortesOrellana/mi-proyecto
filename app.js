// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaracion de Variables
let arreglo = []

// Función que obtiene el nombre de la caja de texto, si no es vacío lo incorpora al arreglo y luego borra la caja de texto
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == ""){
        alert("Por favor, inserte un nombre.");
    } else {
        arreglo.push(nombreAmigo);
        console.log(arreglo);
        LimpiaCaja()
    }
return;
}

// Función que limpia la caja de texo
function LimpiaCaja(){
    document.getElementById('amigo').value = "";
return
}