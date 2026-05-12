function mostrarmensaje() {
    const mensaje = document.getElementById("mensaje");

    mensaje.innerText =
        "¡Gracias por interesarte en el proyecto!";

    mensaje.classList.add("mostrar");
}

function mostrarmensaje2() {
    const mensaje = document.getElementById("mensaje2");

    mensaje.innerText =
        "¡Hola Luz! Bienvenida a tu página web ✨";

    mensaje.classList.add("mostrar");
}

/* MODO OSCURO */

const boton = document.getElementById("toggleDark");

if (boton) {

    boton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {
            boton.innerText = "☀️ Modo claro";
        } else {
            boton.innerText = "🌙 Modo oscuro";
        }

    });

}

/* ACORDEÓN */

const acordeonBtns =
    document.querySelectorAll(".acordeon-btn");

acordeonBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        const contenido =
            btn.nextElementSibling;

        if (contenido.style.display === "block") {

            contenido.style.display = "none";

        } else {

            contenido.style.display = "block";

        }

    });

});