import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

class EssayForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      value: 'Escreva uma dissertação sobre seu elemento DOM favorito.'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Uma dissertação foi enviada: ' + this.state.value)
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Dissertação:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);