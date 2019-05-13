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
      loggedIn: false
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
        <Header />
        <Switch>
          <Route exact path='/login' handleLogin={this.handleLogin} component={Login} />
          <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} />} />
          <Route exact path='/logout'/>
        </Switch>
      </div>
    );
  }
}
export default App;
