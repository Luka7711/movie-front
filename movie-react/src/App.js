import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Logout from './Logout'
class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false
    }
  }

  handleRegister = (username) => {
    this.setState({
      username: username,
      loggedIn: true,
    })
  }

  handleLogout = (username) => {
    this.setState({
      username: username,
      loggedIn: false
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        
        {this.state.loggedIn === true ? <Logout logout={this.handleLogout}/> : <Register handleRegister={this.handleRegister}/> }
        
      </div>
    );
  }
}
export default App;
