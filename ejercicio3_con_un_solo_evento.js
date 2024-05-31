
function cambiarEspaciado(evt) {
    const texto = document.getElementById('texto');
    if(evt.target.id == "espaciado1") {
        texto.style.padding = 0;
    } else if(evt.target.id == "espaciado2") {
        texto.style.padding = "5px";
    } else if(evt.target.id == "espaciado3") {
        texto.style.padding = "10px";
    }
}

document.getElementById('espaciado1').addEventListener("click", cambiarEspaciado);
document.getElementById('espaciado2').addEventListener("click", cambiarEspaciado);
document.getElementById('espaciado3').addEventListener("click", cambiarEspaciado);

/*const radios = document.querySelectorAll('[type="radio"]');
for (const radio of radios) {
    radio.addEventListener("click", cambiarEspaciado);
}
*/