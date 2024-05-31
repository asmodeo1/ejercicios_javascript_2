const nombres = [];

function añadirNombre() {
    const nombre = document.getElementById('nombre');
    // Le hemos puesto required pattern="[^ ]+" en el input nombre
    // [^ ]+ indica uno o más caracteres que no sean espacios
    // Este patrón tiene el inconveniente que no admite nombres
    // compuestos o nombres y apellidos
    // Una opción sería usar [^ ]*\S+( ?\S+)* donde \S significa
    // cualquier cosa que no sea un espacio
    if(nombre.checkValidity() == false){
        window.alert("Falta el nombre");
        nombre.focus();
        nombre.select();
        return;
    }
    // Añadimos el nombre al final del array
    nombres.push(nombre.value);
    nombre.value = "";
    nombre.focus();
}

// Si quisiéramos mostrar el nombre al añadirlo a la lista
function añadirNombreInmediato() {
    const nombre = document.getElementById('nombre');
    if(nombre.checkValidity() == false){
        window.alert("Falta el nombre");
        nombre.focus();
        nombre.select();
        return;
    }
    nombres.push(nombre.value);
    const listado = document.getElementById('listado');
    const div = document.createElement("div");
    div.textContent = nombre.value;
    listado.appendChild(div);
    nombre.value = "";
    nombre.focus();
}

function mostrarNombres() {
    const listado = document.getElementById('listado');
    listado.textContent = "";
    for (const nombre of nombres) {
        const div = document.createElement("div");
        div.textContent = nombre;
        listado.appendChild(div);
    }
}

function comprobarTecla(evt) {
    // o if(evt.keyCode == 13) { ya que 13 es el código del Enter
    if(evt.key == "Enter") {
        añadirNombre();
        //añadirNombreInmediato();
    }
}

//document.getElementById('añadir').addEventListener("click", añadirNombreInmediato);
document.getElementById('añadir').addEventListener("click", añadirNombre);
document.getElementById('mostrar').addEventListener("click", mostrarNombres);
document.getElementById('nombre').addEventListener("keydown", comprobarTecla);

