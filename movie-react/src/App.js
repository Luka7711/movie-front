import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Logout from './Logout'
import Login from './Login'
import Header from './Header'
import { Route, Switch, Link } from 'react-router-dom'
import MovieLink from './MovieLink'
import MovieList from './MovieList'

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false,
      message: '',
      showMovieList: false
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

  handleMovieList =() => {
    this.setState({
      showMovieList: true
    })
  }

  render(){

        // {this.state.showMovieList? <MovieList /> : console.log('MovieList')}
    console.log(this.state)
    return (
      <div className="App">
         { this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/> }

       <button onClick={this.handleMovieList}>Home</button>
       
        
        {this.state.showMovieList === true? <MovieList/> : console.log('askdn')}
      </div>
    );
  }
}
export default App;
