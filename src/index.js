import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function FancyBorder(props) {
  return(
    <div className={
      'FancyBorder FancyBorder-' +
      props.color
    }>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Bem-Vindo
      </h1>
      <p className="Dialog-message">
        Obrigado por visitar nossa espaçonave!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);