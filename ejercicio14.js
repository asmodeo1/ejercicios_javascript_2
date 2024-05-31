function calcularPotencia() {
    const base = document.getElementById('base');
    const exponente = document.getElementById('exponente')
    const resultado = document.getElementById('resultado');
    // Forma fácil: resultado.value = Math.pow(base.value, exponente.value);
    let total = base.value;
    for (let i = 2; i <= exponente.value; i++){
        total = base.value * i;
    }
    resultado.value = total;
}

document.getElementById('calcular').addEventListener("click", calcularPotencia);