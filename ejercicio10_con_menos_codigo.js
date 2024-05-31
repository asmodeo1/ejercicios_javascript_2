function descolorearElementos() {
    const contenedor = document.getElementById('contenedor');
    const hijos = contenedor.childNodes;
    for (const hijo of hijos) {
        // Debemos comprobar esto pues los enter y espacios son también
        // nodos hijos y no tienen style
        if (hijo.nodeType == Node.ELEMENT_NODE) {
            hijo.style.color = "";
        }
    }
}

function mostrar(color, elementos) {
    const contenedor = document.getElementById('contenedor');
    descolorearElementos();
    for (const elemento of elementos) {
        elemento.style.color = color;
    }
}

function mostrarPorClase() {
    const contenedor = document.getElementById('contenedor');
    mostrar("green", contenedor.getElementsByClassName("mensaje"));
}

function mostrarPorEtiqueta() {
    const contenedor = document.getElementById('contenedor');
    mostrar("cyan", contenedor.getElementsByTagName("p"));
}

function mostrarPorAtributo() {
    const contenedor = document.getElementById('contenedor');
    mostrar("red", contenedor.querySelectorAll("[data-info]"));
}

document.getElementById('porClase').addEventListener("click", mostrarPorClase);
document.getElementById('porEtiqueta').addEventListener("click", mostrarPorEtiqueta);
document.getElementById('porAtributo').addEventListener("click", mostrarPorAtributo);
