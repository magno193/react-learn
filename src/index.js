import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function ListItem(props) {
  return <li>{props.item}</li>
}

function NumbersList(props) {
  const numbers = props.numbers;
  const listItens = numbers.map((number) =>
    <ListItem key={number.toString()} item={number}/>
  );
  return (
    <ul>
      {listItens}
    </ul>
  );
}

const numbers = [1, 5, 7, 23, 34]
ReactDOM.render(
  <NumbersList numbers={numbers}/>,
  document.getElementById('root')
);