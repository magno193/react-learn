import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function Page() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => <li>{number * 2}</li>);

  return <ul>{doubled}</ul>
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);