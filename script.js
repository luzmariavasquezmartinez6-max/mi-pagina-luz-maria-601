function mostrarmensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerText = "¡Gracias por interesarte en el proyecto!";
    mensaje.classList.add("mostrar");
}

function mostrarmensaje2() {
    const mensaje = document.getElementById("mensaje2");
    mensaje.innerText = "¡Hola Luz! Bienvenida a tu página web ✨";
    mensaje.classList.add("mostrar");
}
const boton = document.getElementById("toggleDark");

boton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Cambiar texto del botón
    if (document.body.classList.contains("dark-mode")) {
        boton.innerText = "☀️ Modo claro";
    } else {
        boton.innerText = "🌙 Modo oscuro";
    }
});