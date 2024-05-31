function mostrarImagen(evt) {
    const deporte = document.getElementById('deporte');
    //const deporte = evt.target; o evt.currentTarget;
    const imagen = document.getElementById('imagen');
    // selectedIndex contiene la posición / índice del elemento seleccionado
    // en la lista (0 el primero)
    if (deporte.selectedIndex == 1) {
        imagen.src = "carrera.png";
    } else if (deporte.selectedIndex == 2) {
        imagen.src = "natacion.png";
    } else if (deporte.selectedIndex == 3) {
        imagen.src = "pertiga.png";
    } else {
        imagen.src = "olimpia.png";
    }
    /* 
    switch (deporte.selectedIndex) {
        case 1:
            imagen.src = "carrera.png";
            break;
        case 2:
            imagen.src = "natacion.png";
            break;
        case 3:
            imagen.src = "pertiga.png";
            break;
        default: // En los demás casos
            imagen.src = "olimpia.png";
    }
    */
}

document.getElementById('deporte').addEventListener("change", mostrarImagen);