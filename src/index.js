import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function NumbersList(props) {
  const numbers = props.numbers;
  const listItens = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return <ul>{listItens}</ul>
}

const numbers = [1, 5, 7, 23, 34]
ReactDOM.render(
  <NumbersList numbers={numbers}/>,
  document.getElementById('root')
);