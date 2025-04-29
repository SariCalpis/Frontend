
function App() {

    const [text, setText] = React.useState('');

    const handleWrite = (letter) => {
        setText((prev) => prev + letter); // Agrega la letra al texto actual
    };

    const handleSpace = () => {
        setText((prev) => prev + ' '); // Agrega un espacio
    };

    const handleClear = () => {
        setText((prev) => prev.slice(0, -1)); // Limpia el texto
    }
    return (
        <div>
            <div>
                {}
                {'qwertyuiopasdfghjklzxcvbnm'.split('').map((letter) => (
                    <button key={letter} onClick={() => handleWrite(letter)}>
                        {letter}
                    </button>
                ))}
            </div>
            <div>
                {/* Botones de espacio y borrar */}
                <button onClick={handleSpace}>SPACE</button>
                <button onClick={handleClear}>DELETE</button>
            </div>
            <p>{text}</p>
{/* Renderiza el texto dentro del fieldset */}
    <fieldset>
    <legend>Result</legend>
    <p>{text}</p>
</fieldset>
</div>
    );
}

// Renderiza el componente en el contenedor del HTML
ReactDOM.render(<App />, document.getElementById('root_teclado'));