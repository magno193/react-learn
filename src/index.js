import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const user = 'Alex';

const element = <div className="class" tabIndex="0">
    user
</div>

ReactDOM.render( 
    element,
    document.getElementById('root')
);