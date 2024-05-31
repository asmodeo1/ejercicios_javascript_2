
function reproducirSonido(evt) {
    const audio = new Audio(evt.target.dataset.sonido);
    audio.play();
}

document.getElementById('perro').addEventListener("click", reproducirSonido);
document.getElementById('gato').addEventListener("click", reproducirSonido);
document.getElementById('mono').addEventListener("click", reproducirSonido);