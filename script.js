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

/* BOTÓN MODO OSCURO */

const boton = document.getElementById("toggleDark");

boton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        boton.innerText = "☀️ Modo claro";

    } else {

        boton.innerText = "🌙 Modo oscuro";
    }
});
/* ========================= */
/* VALIDACIÓN FORMULARIO */
/* ========================= */

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let valido = true;

    /* CAMPOS */
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensajeContacto");

    const exito = document.getElementById("exito");

    /* LIMPIAR ERRORES */
    limpiarErrores();

    /* VALIDAR NOMBRE */
    if (nombre.value.trim() === "") {

        mostrarError(
            nombre,
            "El nombre es obligatorio"
        );

        valido = false;
    }

    /* VALIDAR CORREO */
    if (correo.value.trim() === "") {

        mostrarError(
            correo,
            "El correo es obligatorio"
        );

        valido = false;

    } else if (!validarCorreo(correo.value)) {

        mostrarError(
            correo,
            "Correo no válido"
        );

        valido = false;
    }

    /* VALIDAR MENSAJE */
    if (mensaje.value.trim() === "") {

        mostrarError(
            mensaje,
            "El mensaje es obligatorio"
        );

        valido = false;
    }

    /* SI TODO ESTÁ BIEN */
    if (valido) {

        exito.innerText =
            "✅ Mensaje enviado correctamente";

        formulario.reset();
    }
});

/* MOSTRAR ERROR */
function mostrarError(input, mensaje) {

    input.classList.add("input-error");

    const small =
        input.parentElement.querySelector(".error");

    small.innerText = mensaje;
}

/* LIMPIAR ERRORES */
function limpiarErrores() {

    const inputs =
        document.querySelectorAll("input, textarea");

    inputs.forEach(input => {

        input.classList.remove("input-error");
    });

    const errores =
        document.querySelectorAll(".error");

    errores.forEach(error => {

        error.innerText = "";
    });

    document.getElementById("exito").innerText = "";
}

/* VALIDAR EMAIL */
function validarCorreo(correo) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(correo);
}