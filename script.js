
function guardarEnLocalStorage() {
    let clave = "Práctica 15";
    let valor = "Sara";
    
    if (localStorage.getItem(clave) === null) {
        localStorage.setItem(clave, valor);
        alert("Dato guardado en localStorage.");
    } else {
        alert("Error: La clave ya existe en localStorage.");
    }
}

function guardarEnSessionStorage() {
    let clave = "Date";
    let valor = Date.now();
    
    sessionStorage.setItem(clave, valor);
    alert("Fecha almacenada en sessionStorage.");
}

function mostrarStorage() {
    let localData = localStorage.getItem("Práctica 15");
    let sessionData = sessionStorage.getItem("Date");
    
    document.getElementById("output").innerHTML = 
        `<strong>localStorage:</strong> ${localData ? localData : "No hay datos"}
         <strong>sessionStorage:</strong> ${sessionData ? sessionData : "No hay datos"}`;
}

