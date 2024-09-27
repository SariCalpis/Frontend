//PRIMEROS PLATOS//
  
function pedirPrimerPlato(){
let primeros = prompt ("Numero del primer plato elegido (1/5):");

if (primeros == 1) {
    mensaje = "Ensalada Mixta";
} 
if (primeros == 2) {
    mensaje = "Huevos Estrellaos";
}

if (primeros == 3) {
    mensaje = "Gazpacho Andaluz";
}

if (primeros == 4) {
    mensaje = "Sopa de Temporada";
}

if (primeros == 5) {
    mensaje = "Pasta del Día";
}
}
let mensaje;
//SEGUNDOS PLATOS//

function pedirSegundoPlato(){
let segundos= prompt ("Numero del segundo plato elegido (6/10):");

if (segundos == 6) {
    mensajeDos = "Merluza con Verdura";
} 
if (segundos == 7) {
    mensajeDos= "Salmón con Patatas al horno";
}

if (segundos == 8) {
    mensajeDos = "Paella de Mariscos";
}

if (segundos == 9) {
    mensajeDos = "Escalope con Patatas fritas";
}

if (segundos == 10) {
    mensajeDos = "Butifarra con Judias Blancas";
}
alert (`Has elegido de primer plato ${mensaje} y de segundo ${mensajeDos} ¡Que Aproveche :)!`)
}
let mensajeDos;



