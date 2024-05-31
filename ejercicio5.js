function quitarTexto() {
    document.getElementById('info').textContent = "";
}

function ponerTexto(evt) {
    const info = document.getElementById('info');
    /* Opción sencilla
     Usamos el texto alternativo que tienen las imágenes
    info.textContent = evt.target.alt;
    */
   if(evt.target.id == "imagen1") {
    info.textContent = "Carrera";
   } else if(evt.target.id == "imagen2") {
    info.textContent = "Natación";
   } else {
    info.textContent = "Pértiga";
   }
}

document.getElementById("imagen1").addEventListener("mouseenter", ponerTexto);
document.getElementById("imagen2").addEventListener("mouseenter", ponerTexto);
document.getElementById("imagen3").addEventListener("mouseenter", ponerTexto);
document.getElementById("imagen1").addEventListener("mouseleave", quitarTexto);
document.getElementById("imagen2").addEventListener("mouseleave", quitarTexto);
document.getElementById("imagen3").addEventListener("mouseleave", quitarTexto);
