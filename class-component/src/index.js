import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class app - esse componente vai renderizar um h1 dizendo "hello world"

class App extends React.Component{
  state = {
    texto: "Turma React"
  }
  handleClick(){
    alert("Alerta ativado!")
  }
  handleTextCharge(e){
    this.setState({
      texto: e.target.value
    })
  }

  render(){
    return(
    <div>
      <h1>Hello World {this.props.name}</h1>
      <h2>{this.state.texto}</h2>
      <input type="text" onChange={this.handleTextCharge.bind(this)}></input>
      <button onClick={this.handleClick.bind(this)}>Exibir Alerta</button>
    </div>
  )}
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"Givaldo Santos"} />
  </React.StrictMode>,
  document.getElementById('root')
);

