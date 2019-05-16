import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Logout from './Logout'
import Login from './Login'
import Header from './Header'
import { Route, Switch, Link } from 'react-router-dom'
import MovieLink from './MovieLink'
import MovieList from './MovieList'
import ShowOneMovie from './ShowOneMovie'

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false,
      message: '',
      showOneMovie: false,
      showMovieList: true,
      title: ''
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

  handleMovieList = (title) => {
    this.setState({
      showMovieList: true,
      showOneMovie: false,
      title: title
    })
  }

  render(){
    console.log(this.state, '<---main page')
    return (
      <div className="App">
         { this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/> }

        
        <Switch>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} /> } />
          <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} /> } />
        </Switch>

        {this.state.showMovieList ? <MovieList handleMovieList={this.handleMovieList}/>: null}
        {this.state.ShowOneMovie? <ShowOneMovie/> : null}

      </div>
    );
  }
}
export default App;
