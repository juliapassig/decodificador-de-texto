var textoCriptografar = document.querySelector ("#texto");
var textoResultado = document.querySelector ("#textoResultado");

function criptografarTexto () {
    var textos = textoCriptografar.value;

    var resultadoCrip = textos.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')

    document.getElementById('textoResultado').innerHTML = resultadoCrip
    

    document.getElementById("nenhumaMensagem").style.display = "none";
    document.getElementById("imagem1").style.display = "none";
    document.getElementById("imagem2").style.display = "none";
    document.getElementById("copiar").style.display = "block"; 
    
}

function descriptografarTexto () {
    var textos = textoCriptografar.value;

    var resultadoDescrip = textos.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('textoResultado').innerHTML = resultadoDescrip

    document.getElementById("nenhumaMensagem").style.display = "none";
    document.getElementById("imagem1").style.display = "none";
    document.getElementById("imagem2").style.display = "none";
    document.getElementById("copiar").style.display = "block"; 
}


function copiarTexto () {
    var textoCopiar = document.getElementById('textoResultado');

    textoCopiar.select();
    document.execCommand('copy');
}
