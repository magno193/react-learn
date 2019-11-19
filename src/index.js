import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function UserGreeting() {
  return <h1>Welcome back!</h1>
}

function GuestGreeting() {
  return <h1>Please, log in.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// renderiza um valor diferente dependendo do valor
// da prop isLoggedIn
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);