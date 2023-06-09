let Jugador1Error = Jugador2Error = true;
let array = ["0","0","0","0","0","0","0","0","0"];
let turno = 1;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML = mensaje;
}

function validarJugador1() {
    let jugador1 = document.formulario.jugador1.value;
    if (jugador1 === "") {
        mostrarError("errorJugador1", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorJugador1", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(jugador1) === false) {
            mostrarError("errorJugador1", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorJugador1", "");
            Jugador1Error = false;
        }
    }
}

function validarJugador2() {
    let jugador2 = document.formulario.jugador2.value;
    if (jugador2 === "") {
        mostrarError("errorJugador2", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorJugador2", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(jugador2) === false) {
            mostrarError("errorJugador2", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorJugador2", "");
            Jugador2Error = false;
        }
    }
}

function validation() {
    if (!Jugador1Error && !Jugador2Error) {
        document.getElementById("container").classList = "enviar";
        return true;
    }
    else {
        validarJugador1();
        validarJugador2();
        return false;
    }
}

$("button").each(function (indice, elemento) {
    elemento.addEventListener("click", (e) => btnPulsado(e, indice));
})

function btnPulsado(e, indice) {
    if (turno % 2 != 0) {
        array[indice] = "1";
    } else {
        array[indice] = "2";
    }
    ganador1();
    ganador2();
    turno++ ;
}

function ganador1() {
    if (array[0] == array[1] == array[2] == "1" || array[3] == array[4] == array[5] == "1" || array[6] == array[7] == array[8] == "1"
        || array[0] == array[3] == array[6] == "1" || array[1] == array[4] == array[7] == "1" || array[2] == array[5] == array[8] == "1"
        || array[0] == array[4] == array[8] == "1" || array[2] == array[4] == array[6] == "1") {
            document.getElementById("ganador").innerHTML = "El ganador es el jugador 1";
    }
}

function ganador2() {
    if (array[0] == array[1] == array[2] == "2" || array[3] == array[4] == array[5] == "2" || array[6] == array[7] == array[8] == "2"
        || array[0] == array[3] == array[6] == "2" || array[1] == array[4] == array[7] == "2" || array[2] == array[5] == array[8] == "2"
        || array[0] == array[4] == array[8] == "2" || array[2] == array[4] == array[6] == "2") {
            document.getElementById("ganador").innerHTML = "El ganador es el jugador 2";
    }
}

