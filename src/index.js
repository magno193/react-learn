import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const name = 'Alexandre Ferreira';
const elemento = <h1>Olá, {name}</h1>

ReactDOM.render( 
    elemento,
    document.getElementById('root')
);