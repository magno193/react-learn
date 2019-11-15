import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Welcome extends React.Component {
    render() {
    return <h1>Hello, stranger</h1>
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
);