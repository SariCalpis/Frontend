

let resultado = " ";

while (true){
    letras = prompt ("Escribe LETRAS aleatorias para ver tu cadena final, para terminar, pulsa CANCELAR:");
    if (letras === null){
        break;
}

if (letras.length > 1){
    alert ("NO VALIDO, debes introducir las letras una a una");
    continue;
}

if (!/^[a-zA-Z]$/.test(letras)){
    alert ("NO VALIDO, solo puedes introducir letras, no numeros ni simbolos especiales");
    continue;
}

resultado += letras

alert("Cadena de letras: " + resultado);
}
