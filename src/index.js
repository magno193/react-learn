import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Bem-Vindo"
      message="Obrigado por visitar a nossa espaçonave!"
    />
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);