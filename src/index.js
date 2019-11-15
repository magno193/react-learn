import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Elementos react são constantes. A unica forma de atualizar a UI
// é criando um novo elemento e passando para ReactDOM.render

function tick() {
    const element = (
        <div>
            <h1>Hello world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render( 
        element,
        document.getElementById('root')
    );
}

// Chama tick a cada 1 segundo
setInterval(tick, 1000);