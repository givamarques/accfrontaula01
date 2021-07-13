import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class app - esse componente vai renderizar um h1 dizendo "hello world"

class App extends React.Component{
  render(){
    return<h1>Hello World {this.props.name}</h1>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"Givaldo Santos"} />
  </React.StrictMode>,
  document.getElementById('root')
);

