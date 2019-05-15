import React, { Component } from 'react';
import './App.css';
// import Register from './Register'
import Logout from './Logout'
// import Login from './Login'
import Header from './Header'
// import { Route, Switch, Link } from 'react-router-dom'
// import MovieLink from './MovieLink'
// import MovieList from './MovieList'

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false,
      message: '',
      showMovieLink: true
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
     
      {this.state.loggedIn === true ? <Logout/> : <Header login={this.handleLogin} register={this.handleRegister}/> }

      </div>
    );
  }
}
export default App;
