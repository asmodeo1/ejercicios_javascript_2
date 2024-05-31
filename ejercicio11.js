function crearElementos() {
    const texto = document.getElementById('texto');
    const numero = document.getElementById('numero');
    // Le hemos añadido required pattern="[^ ]+" al input texto
    // Con [^ ]+ indicamos al menos una cosa que no sea un espacio
    if(texto.checkValidity() == false) {
        window.alert("el texto está vacío o tiene espacios");
        texto.select();
        texto.focus();
        return;
    }
    // Le hemos añadido required min="1" al input texto
    if(numero.checkValidity() == false) {
        window.alert("el número está vacío o es incorrecto");
        texto.select();
        texto.focus();
        return;
    }
    const contenedor = document.getElementById('contenedor');
    contenedor.textContent = "";
    //for (let i = 1; i <= numero.value; i++) {
    for (let i = 0; i < numero.value; i++) {
        const p = document.createElement("p");
        p.textContent = i + ". " + texto.value;
        // p.textContent = `${i}. ${texto.value}`;
        contenedor.appendChild(p);
    }
    /*
    let contenido = "";
    for (let i = 0; i < numero.value; i++) {
        contenido += "<p>" + i + ". " + texto.value + "</p>";
    }
    contenedor.innerHTML = contenido;
    */
}

document.getElementById('crear').addEventListener("click", crearElementos);