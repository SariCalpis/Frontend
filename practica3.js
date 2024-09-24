

let nota = parseFloat(prompt("Introduce una nota entre 0 y 10 con dos decimales:"));

let mensaje;

if (nota >= 0 && nota <= 2.99) {
    mensaje = "Muy deficiente";

} else if (nota >= 3 && nota <= 4.99) {
    mensaje = "Insuficiente";

} else if (nota >= 5 && nota <= 5.99) {
    mensaje = "Suficiente";

} else if (nota >= 6 && nota <= 6.99) {
    mensaje = "Bien";

} else if (nota >= 7 && nota <= 8.99) {
    mensaje = "Notable";

} else if (nota >= 9 && nota <= 10) {
    mensaje = "Sobresaliente";
}

alert (`Tu calificacion es ${mensaje}`);

