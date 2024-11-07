class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

// Array para almacenar objetos "Persona":
let personas = [];

// Función para añadir perfiles
function añadirPerfiles(event) {
    // Evita que el formulario se envíe (y recargue la página)
    event.preventDefault();

    // Obtener valores de los campos de entrada
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    // Crear una nueva instancia de Persona y agregarla al array:
    
    let persona = new Persona(nombre, apellidos, edad);
    personas.push(persona);

    alert("Persona añadida correctamente.");
}

// Función para mostrar todas las personas almacenadas:

function mostrarPersonas() {
    let lista = document.getElementById("peopleList");
    lista.innerHTML = "";

    if (personas.length === 0) {
        lista.innerHTML = "<p> No hay personas en la lista ahora mismo, añade a alguien.</p>";
        return;
    }

    // Generar lista de personas en el HTML:

    let html = "<ul>";
    personas.forEach((persona, index) => {
        html += `<li>${index + 1}. ${persona.nombre} ${persona.apellidos}, Edad: ${persona.edad}</li>`;
    });
    html += "</ul>";

    lista.innerHTML = html;
}

// Asignar los botones:

document.getElementById("añadirBoton").addEventListener("click", añadirPerfiles);
document.getElementById("mostrarBoton").addEventListener("click", mostrarPersonas);

