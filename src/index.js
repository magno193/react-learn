import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />
  } 

  return <GuestGreeting />
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please, sign up.</h1>
}

// renderiza um valor diferente dependendo do valor
// da prop isLoggedIn
ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);