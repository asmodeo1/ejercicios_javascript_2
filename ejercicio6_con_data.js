function mostrarImagen(evt) {
    const deporte = document.getElementById('deporte');
    console.log(deporte);
    //const deporte = evt.target; o evt.currentTarget;
    const imagen = document.getElementById('imagen');
    // options es un array con todos los option del select
    imagen.src = deporte.options[deporte.selectedIndex].dataset.imagen;
}

document.getElementById('deporte').addEventListener("change", mostrarImagen);