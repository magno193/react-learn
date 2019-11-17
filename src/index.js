import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  // Ocorre sempre que DOM de Clock é renderizado pela primeira vez
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // Ocorre sempre quando a DOM de Clock é removido
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hello, Stranger.</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

function App() {
  return(
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);