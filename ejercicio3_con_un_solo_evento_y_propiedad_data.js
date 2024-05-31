
function cambiarEspaciado(evt) {
    const texto = document.getElementById('texto');
    texto.style.padding = evt.target.dataset.espaciado;
}

document.getElementById('espaciado1').addEventListener("click", cambiarEspaciado);
document.getElementById('espaciado2').addEventListener("click", cambiarEspaciado);
document.getElementById('espaciado3').addEventListener("click", cambiarEspaciado);

/*const radios = document.querySelectorAll('[type="radio"]');
for (const radio of radios) {
    radio.addEventListener("click", cambiarEspaciado);
}
*/