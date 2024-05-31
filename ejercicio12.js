let contador = 0;

function incrementar() {
    contador++;
    //contador += 1;
    // contador = contador + 1;
    const cuenta = document.getElementById('cuenta');
    cuenta.textContent = contador;
}

function decrementar() {
    if(contador > 0) {
        contador--;
        //contador -= 1;
        // contador = contador - 1;
        const cuenta = document.getElementById('cuenta');
        cuenta.textContent = contador;
    }
}

document.getElementById('incrementar').addEventListener("click", incrementar);
document.getElementById('decrementar').addEventListener("click", decrementar);
