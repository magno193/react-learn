import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

class FlavorForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {value: 'limão'}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Seu sabor favorito é: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Escolha seu sabor favorito:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
            <option value="laranja">Laranja</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);