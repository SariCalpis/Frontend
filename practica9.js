


function generar_tabla() {
    
    const contenedor = document.getElementById('nuevaTabla');
    contenedor.innerHTML = '';

    const tabla = document.createElement('table');

    
    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const col = document.createElement('td');
            
            col.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            
            fila.appendChild(col);
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}
