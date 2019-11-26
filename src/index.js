import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function Example() {
  // Declarado uma variável state chamado de count
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Você clicou {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);