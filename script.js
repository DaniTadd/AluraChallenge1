const textArea = document.querySelector("#my-text");
const mensaje = document.querySelector("#mensaje");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar() {
    const mensajeEncriptado = encriptar(textArea.value);
    mensaje.value = mensajeEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    if (mensaje.value == "") {
        mensaje.value = "No se ha encontrado mensaje para encriptar, ingrese el texto y vuelva a intentar.";
    }
    document.getElementById("mensaje").focus();
}

function encriptar(textoEncriptado) {
    let encriptionCode =[["e","enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat"], ];
    textoEncriptado=textoEncriptado.toLowerCase();

    for (let i = 0; i<encriptionCode.length; i++) {
        if (textoEncriptado.includes(encriptionCode[i][0])) {
            textoEncriptado=textoEncriptado.replaceAll(encriptionCode[i][0],encriptionCode[i][1]);

        }
    }
return textoEncriptado;
}

function btndesencriptar() {
    const mensajeDesencriptado = desencriptar(textArea.value);
    mensaje.value = mensajeDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    if (mensaje.value == "") {
        mensaje.value = "No se ha encontrado mensaje para desencriptar, ingrese el texto y vuelva a intentar"
    }
    document.getElementById("mensaje").focus();
}

function desencriptar(mensajeDesencriptado) {
    let encriptionCode = [["e","enter"], ["i","imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();

    for (let i = 0; i<encriptionCode.length; i++) {
        if (mensajeDesencriptado.includes(encriptionCode[i][1])) {
            mensajeDesencriptado=mensajeDesencriptado.replaceAll(encriptionCode[i][1], encriptionCode[i][0]);
        }
    }
    return mensajeDesencriptado;

}



function copiar() {
    var copyText = document.getElementById("mensaje");
    navigator.clipboard.writeText(copyText.value);
    alert("¡Texto copiado!");
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('Munheco.png')"
    document.getElementById("textArea").focus();
}