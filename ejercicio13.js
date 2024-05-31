let contador = 0;
let reloj = null;

function incrementar() {
    contador++;
    const cuenta = document.getElementById('cuenta');
    cuenta.textContent = contador;

    //Las tres líneas anteriores en una sola:
    // document.getElementById('cuenta').textContent= ++contador;
}

function iniciar() {
    if(reloj == null) {
        reloj = setInterval(incrementar, 1000);
    }
}

function parar() {
    clearInterval(reloj);
    reloj = null;
}

function reiniciar() {
    contador = 0;
    const cuenta = document.getElementById('cuenta');
    cuenta.textContent = contador;
}

document.getElementById('iniciar').addEventListener("click", iniciar);
document.getElementById('parar').addEventListener("click", parar);
document.getElementById('reiniciar').addEventListener("click", reiniciar);

