import React, { Component } from 'react';
import './App.css';
import Register from './Register'

class App extends Component {
  constructor(){
    super();

    this.state = {
      loggedIn: false
    }
  }

  render(){
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}
export default App;
