
// Formula Factorial n!=n×(n−1)×(n−2)×…×1 //

let numero;

while (true){
    numero = prompt ("Escribe un numero entre 0 y 10:");
    numero = parseInt(numero);

if (numero < 0 ){
    alert ("El numero debe estar entre 0 y 10, no puede ser menor de 0");
    continue;  
}

if (numero > 10 ){
    alert ("El numero debe estar entre 0 y 10, no puede ser mayor de 10");
    continue;
}

function factorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursivo(n - 1); 
    
}
let resultado = factorialRecursivo(numero);
let mensaje = `El factorial del numero elegido es ${resultado}`;
alert (mensaje);
break;
}
