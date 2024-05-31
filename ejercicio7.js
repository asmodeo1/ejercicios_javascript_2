function reproducirSonidoGato() {
    const audio = new Audio('gato.wav');
    audio.play();
}

function reproducirSonidoPerro() {
    const audio = new Audio('perro.wav');
    audio.play();
}

function reproducirSonidoMono() {
    const audio = new Audio('mono.wav');
    audio.play();
}


document.getElementById('perro').addEventListener("click", reproducirSonidoPerro);
document.getElementById('gato').addEventListener("click", reproducirSonidoGato);
document.getElementById('mono').addEventListener("click", reproducirSonidoMono);

/* Usando una sola función

function reproducirSonido(evt) {
    if(evt.target.id == "perro") {
        const audio = new Audio('perro.wav');
        audio.play();
    } else if(evt.target.id == "gato") {
        const audio = new Audio('gato.wav');
        audio.play();
    } else if(evt.target.id == "mono") {
        const audio = new Audio('mono.wav');
        audio.play();
    } 
}


document.getElementById('perro').addEventListener("click", reproducirSonido);
document.getElementById('gato').addEventListener("click", reproducirSonido);
document.getElementById('mono').addEventListener("click", reproducirSonido);
*/