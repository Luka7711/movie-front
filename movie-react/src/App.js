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
      showMovieLink: true,
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

  handleShowMovies = () => {
    this.setState({
      showMovieList: true
    })
  }

  render(){
    console.log(this.state)


    return (
      <div className="App">
     
        <button onClick={this.handleShowMovies}>Home</button> 
        { this.state.showMovieList  ? <MovieList/> : console.log('dont show') }

        { this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/>} 
        
      </div>
    );
  }
}
export default App;
