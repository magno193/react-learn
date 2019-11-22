import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>A água ferve.</p>
  }
  return <p>A água não ferve.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Informe a temperatura em Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />

        <BoilingVerdict celcius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);