const textArea = document. querySelector (".text-area");
const mensagem = document. querySelector (".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const TextoEncriptado = encriptar(textArea.value);
    mensagem.value = TextoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e" , " enter"] ,["i" , "imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const TextoDesencriptado = desencriptar(textArea.value);
    mensagem.value = TextoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptar) {
    let matrizCodigo = [["e" , " enter"] ,["i" , "imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][1])) {
           stringDesencriptar =stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar
}