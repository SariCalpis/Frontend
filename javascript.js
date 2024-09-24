// Fórmula: (4/3) * π * radio^3

let radio = parseFloat(prompt("Introduce el radio de la esfera:"));

if (!isNaN(radio) && radio > 0) {
   
    let volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    let formula = "(4/3) * PI * radio^3";
    let mensaje = `El volumen de la esfera se calcula con la fórmula ${formula}, por tanto, una esfera de radio ${radio} tiene un volumen de ${volumen.toFixed(2)}`;
    

    alert(mensaje);
} else {
    alert("Por favor, introduce un valor válido para el radio.");
}