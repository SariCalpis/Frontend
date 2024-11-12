
const hoy = new Date ();

const dias = [`Domingo`,`Lunes`,`Martes`,`Miércoles`,`Jueves`,`Viernes`,`Sábado`];
const meses = [`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];

const diaSemana = dias[hoy.getDay()];
const dia =  hoy.getDate();
const mes = meses [hoy.getMonth()];
const años =  hoy.getFullYear();
const hora =  hoy.getHours();
const minuto = hoy.getMinutes().toString().padStart(2, '0');

const mensaje = `Hoy es ${diaSemana} con fecha ${dia} de ${mes} de ${años} y son las ${hora}:${minuto}`;

document.getElementById ("fechayhora").textContent = mensaje;