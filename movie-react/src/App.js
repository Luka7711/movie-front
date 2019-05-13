import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Logout from './Logout'
import Login from './Login'
import Header from './Header'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false,
      message: '',
      movies: []
    }
  }

  handleRegister = (username) => {
    this.setState({
      username: username,
      loggedIn: true
    })
  }

  handleLogout = (username) => {
    this.setState({
      username: username,
      loggedIn: false
    })
  }

  handleLogin = (username) => {
    this.setState({
      username: username,
      loggedIn: true
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        
      
        { this.state.loggedIn === false ? <Header /> : <Logout handleLogout={this.handleLogout}/> }
        <Switch>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} /> } />
          <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} /> } />

        </Switch>
      </div>
    );
  }
}
export default App;
