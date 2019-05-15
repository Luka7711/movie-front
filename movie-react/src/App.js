import React, { Component } from 'react';
import './App.css';
import Authentication from './Authentication';
import Profile from './Profile';
import MovieList from './MovieList'
import ShowOneMovie from './ShowOneMovie';
// import Register from './Register'
// import Logout from './Logout'
// import Login from './Login'
// import Header from './Header'
// import { Route, Switch, Link } from 'react-router-dom'
// import MovieLink from './MovieLink'


class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false,
      message: '',
      showAuthent: false,
      showMovieList: true,
      showOneMovie: false
    }
  }

  // handleRegister = (username) => {
  //   this.setState({
  //     username: username,
  //     loggedIn: true
  //   })
  // }

  // handleLogout = (username) => {
  //   this.setState({
  //     username: username,
  //     loggedIn: false
  //   })
  // }

  handleLoginCheck = (username) => {
    this.setState({
      username: username,
      loggedIn: true
    })
  }

  handleMovieList =() => {
    this.setState({
      showMovieList: false
    })
  }

  handleMovieListOn = (username) => {
    this.setState({
      username: username,
      showMovieList: true,
      loggedIn: false
    })
  }


  render(){

        // {this.state.showMovieList? <MovieList /> : console.log('MovieList')}
    console.log(this.state)
    return (
      <div className="App">
      <h2>Chicago Movie App</h2>
        {this.state.loggedIn? <Profile handleMovieListOn={this.handleMovieListOn}/> : <Authentication loggedIn={this.handleLoginCheck}/>}
        {this.state.showMovieList? <MovieList handleMovieList={this.handleMovieList}/>: console.log('MovieList component removed')}
      </div>
    );
  }
}
export default App;
