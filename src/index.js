import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = 'Alex';

function getGreeting(user) {
    if (user){
        return <h1>Hello, {user}</h1>
    } else {
        return <h1>Hello, stranger</h1>
    }
}
ReactDOM.render( 
    getGreeting(user),
    document.getElementById('root')
);