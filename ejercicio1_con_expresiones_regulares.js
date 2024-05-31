function comprobar() {
    const edad = document.getElementById('edad');
    // Hemos añadido required min="1" en el input number para
    // que sea obligatorio y la edad sea al menos 1
    if(edad.checkValidity() == false) {
        window.alert("La edad no es correcta");
        edad.focus();
        edad.select();
        return;
    }
//    if(/(1[89])|([2-9][0-9]+)|(1\d\d)/.test(edad.value)){
    if(edad.value >= 18) {
        window.alert("Tiene 18 años o más");
    } else {
        alert("Tienes menos de 18 años");
    }

    // Con el operador ternario
    //window.alert(edad.value >= 18 ? "Tiene 18 años o más" : "Tienes menos de 18 años");
}

document.getElementById('comprobar').addEventListener("click", comprobar);
