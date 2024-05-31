
function comprobar() {
    const edad = document.getElementById('edad');
    if(isNaN(Number(edad.value)) || isNaN(parseInt(edad.value)) || edad.value < 1) {
        window.alert("La edad no es correcta");
        edad.focus();
        edad.select();
        return;
    }
    if(edad.value >= 18) {
        window.alert("Tiene 18 años o más");
    } else {
        alert("Tienes menos de 18 años");
    }

    // Con el operador ternario
    //window.alert(edad.value >= 18 ? "Tiene 18 años o más" : "Tienes menos de 18 años");
}

document.getElementById('comprobar').addEventListener("click", comprobar);