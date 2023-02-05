const textArea = document.querySelector("#my-text");
const mensaje = document.querySelector("#mensaje");
const phraseStructure = /[A-Z]/;
const validar = () => {
    
    if (phraseStructure.test(textArea.value)) {
       document.getElementById("instruction").classList.add("incorrect-message");
       document.getElementById("instruction").classList.remove("correct-message");
    } else {
       document.getElementById("instruction").classList.remove("incorrect-message");
       document.getElementById("instruction").classList.add("correct-message");
    };

    if (textArea.value == "") {
        document.getElementById("instruction").classList.remove("incorrect-message");
        document.getElementById("instruction").classList.remove("correct-message");
     }
};
/*
La letra "é" es convertida para "3nt3r"
La letra "e" es convertida para "enter"
La letra "í" es convertida para "1m3s"
La letra "i" es convertida para "imes"
La letra "á" es convertida para "41"
La letra "a" es convertida para "ai"
La letra "ó" es convertida para "0b3r"
La letra "o" es convertida para "ober"
La letra "ú" es convertida para "-f4t"
La letra "ü" es convertida para "%f4t"
La letra "u" es convertida para "ufat" */

textArea.addEventListener("keyup", validar);

function btnEncriptar() {
    if (textArea.value == "") {
        swal({
            title: "Oops...",
            text: "No hay texto para encriptar, intente nuevamente.",
            icon: "warning", 
        });
    } else if (phraseStructure.test(textArea.value)) {
        swal({
            title: "Oops...",
            text: "El texto ingresado contiene mayúsculas, cámbielas y vuelva a intentar.",
            icon: "warning", 
        });
    } else {
    const mensajeEncriptado = encriptar(textArea.value);
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.value = mensajeEncriptado;
    swal({
        title: "¡Bravo!",
        text: "Tu mensaje ahora es secreto.",
        icon: "success", 
    });
    document.getElementById("instruction").classList.remove("incorrect-message");
    document.getElementById("instruction").classList.remove("correct-message");
    document.getElementById("btn-copy").focus();
    }
}

function encriptar(textoEncriptado) {
    let encriptionCode =[["é","3nt3r"], ["e","enter"], ["í","1m3s"], ["i","imes"], ["á","41"], ["a","ai"], ["ó","0b3r"], ["o", "ober"], ["ú", "-f4t"], ["ü", "%f4t"], ["u","ufat"]];
    textoEncriptado=textoEncriptado.toLowerCase();

    for (let i = 0; i<encriptionCode.length; i++) {
        if (textoEncriptado.includes(encriptionCode[i][0])) {
            textoEncriptado=textoEncriptado.replaceAll(encriptionCode[i][0],encriptionCode[i][1]);

        }
    }
return textoEncriptado;
}

function btndesencriptar() {
    if (textArea.value == "") {
        swal({
            title: "Oops...",
            text: "No hay texto para encriptar, intente nuevamente.",
            icon: "warning", 
        });
    } else if (phraseStructure.test(textArea.value)) {
        swal({
            title: "Oops...",
            text: "El texto ingresado contiene mayúsculas, cámbielas y vuelva a intentar.",
            icon: "warning", 
        });
    } else {
    const mensajeDesencriptado = desencriptar(textArea.value);
    mensaje.value = mensajeDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    swal({
        title: "¡Bravo!",
        text: "Ya descubriste el secreto.",
        icon: "success", 
    });
    document.getElementById("instruction").classList.remove("incorrect-message");
    document.getElementById("instruction").classList.remove("correct-message");
    document.getElementById("btn-copy").focus();
    }
}

function desencriptar(mensajeDesencriptado) {
    let encriptionCode =[["é","3nt3r"], ["e","enter"], ["í","1m3s"], ["i","imes"], ["á","41"], ["a","ai"], ["ó","0b3r"], ["o", "ober"], ["ú", "-f4t"], ["ü", "%f4t"], ["u","ufat"]];
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
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
      })
      .catch(() => {
      });
      if (copyText.value == "") {
        swal({
            title: "Oops...",
            text: "No hay texto para copiar, intente nuevamente.",
            icon: "warning", 
        });
    } else {
        swal({
            title: "¡Bravo!",
            text: "Ya puedes compartir el mensaje secreto.",
            icon: "success", 
        });
    }
}