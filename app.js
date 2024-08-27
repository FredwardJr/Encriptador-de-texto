const mayusRegex = /[A-Z]/g;
const caractEspecialRegex = /^[a-z\s]+$/;
let textoUsuario = document.querySelector('textarea');
let mensajeCampo = document.querySelector(".mensaje");
let textoCuadroFinal = document.querySelector("#textoCuadroBlanco");
let nuevaCadena = '';
let letraE = 'enter',
letraI = 'imes',
letraA = 'ai',
letraO = 'ober',
letraU = 'ufat';

async function copiarEncrip() {
  try {
    await navigator.clipboard.writeText(textoCuadroFinal.innerHTML);
    alert("Texto copiado en el portapapeles");
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

function validarTexto(cadena, selecFuncion){
    
    let mayuscu = cadena.match(mayusRegex);
    let caractEspecial = caractEspecialRegex.test(cadena);

    if (mayuscu || !caractEspecial) {
        alert("El texto no debe contener mayusculas ni caracteres especiales");
        nuevaCadena = '';
    }else{
        if (selecFuncion == 'encriptar') {
            encriptarTExto(cadena);
            
        }else{
            desencriptarTExto(cadena);
        }
        document.querySelector(".btn-copiar").style.display = "block";
        mensajeCampo.style.display = "none";
        textoCuadroFinal.innerHTML = nuevaCadena;
        nuevaCadena = nuevaCadena;
    }
    return;
}

function encriptarTExto(cadena){
    nuevaCadena = cadena
    .replace(/e/g, letraE)
    .replace(/i/g, letraI)
    .replace(/a/g, letraA)
    .replace(/o/g, letraO)
    .replace(/u/g, letraU);
    
    return;
}
function desencriptarTExto(cadena){
    nuevaCadena = cadena
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    return;
}

function FunEncri(){
    let cadena = textoUsuario.value;
    validarTexto(cadena, 'encriptar');
}
function FunDesencri(){
    let cadena = textoUsuario.value;
    validarTexto(cadena);
}
