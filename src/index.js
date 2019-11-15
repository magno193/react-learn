import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function formatarNome(usuario){
    return usuario.nome + ' ' + usuario.sobrenome
}

const usuario = {
    nome: 'Alexandre',
    sobrenome: 'Ferreira'
}

const elemento = (
    <h1>
        Olá, {formatarNome(usuario)}
    </h1>
);

ReactDOM.render( 
    elemento,
    document.getElementById('root')
);