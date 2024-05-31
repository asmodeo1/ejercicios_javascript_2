
function aumentarOpacidad(evt) {
    evt.target.style.opacity = 1;
}
function disminuirOpacidad(evt) {
    evt.target.style.opacity = 0.5;
}

document.getElementById("imagen1").addEventListener("mouseenter", aumentarOpacidad);
document.getElementById("imagen2").addEventListener("mouseenter", aumentarOpacidad);
document.getElementById("imagen3").addEventListener("mouseenter", aumentarOpacidad);
document.getElementById("imagen1").addEventListener("mouseleave", disminuirOpacidad);
document.getElementById("imagen2").addEventListener("mouseleave", disminuirOpacidad);
document.getElementById("imagen3").addEventListener("mouseleave", disminuirOpacidad);
