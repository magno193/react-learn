import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  );
}

function Contacts() {
  return(
    <div>
      <h1>Contatos</h1>
    </div>
  );
}

function Chat() {
  return(
    <div>
      <h1>Chat</h1>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);