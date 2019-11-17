import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  render(){
    return (
      <div>
        <h1>Hello, Stranger.</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick(){
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
}

// Não funciona mais
setInterval(tick, 1000);