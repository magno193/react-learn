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
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

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

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />

        {isLoggedIn ? 
          <LogoutButton onClick={this.handleLogoutClick} /> 
        : 
          <LoginButton onClick={this.handleLoginClick} />
        }
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