function descolorearElementos() {
    const contenedor = document.getElementById('contenedor');
    const hijos = contenedor.childNodes;
    for (const hijo of hijos) {
        // Debemos comprobar esto pues los enter y espacios son también
        // nodos hijos
        if (hijo.nodeType == Node.ELEMENT_NODE) {
            hijo.style.color = "";
        }
    }
}

function mostrarPorClase() {
    const contenedor = document.getElementById('contenedor');
    descolorearElementos();
    const elementos = contenedor.getElementsByClassName("mensaje");
    for (const elemento of elementos) {
        elemento.style.color = "green";
    }
}

function mostrarPorEtiqueta() {
    const contenedor = document.getElementById('contenedor');
    descolorearElementos();
    const elementos = contenedor.getElementsByTagName("p");
    for (const elemento of elementos) {
        elemento.style.color = "cyan";
    }
}

function mostrarPorAtributo() {
    const contenedor = document.getElementById('contenedor');
    descolorearElementos();
    const elementos = contenedor.querySelectorAll("[data-info]");
    for (const elemento of elementos) {
        elemento.style.color = "red";
    }
}

document.getElementById('porClase').addEventListener("click", mostrarPorClase);
document.getElementById('porEtiqueta').addEventListener("click", mostrarPorEtiqueta);
document.getElementById('porAtributo').addEventListener("click", mostrarPorAtributo);
