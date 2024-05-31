
function comprobar() {
    const edad = document.getElementById('edad');
    const resultado = document.getElementById('resultado');
    if(isNaN(Number(edad.value)) || isNaN(parseInt(edad.value)) || edad.value < 1) {
        resultado.value = "La edad no es correcta";
        edad.focus();
        edad.select();
        return;
    }
    if(edad.value >= 18) {
        resultado.value = "Tiene 18 años o más";
    } else {
        resultado.value = "Tienes menos de 18 años";
    }

    // Con el operador ternario
    //resultado.value = edad.value >= 18 ? "Tiene 18 años o más" : "Tienes menos de 18 años");
}

document.getElementById('comprobar').addEventListener("click", comprobar);