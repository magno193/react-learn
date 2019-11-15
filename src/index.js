import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = 'Alex';

const element = (
    <div>
        <h1>Hello.</h1>
        <h2>Good to see you here.</h2>
    </div>
)

ReactDOM.render( 
    element,
    document.getElementById('root')
);