import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

class LogginButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Clique aqui
      </button>
    )
  }
}

ReactDOM.render(
  <LogginButton />,
  document.getElementById('root')
);