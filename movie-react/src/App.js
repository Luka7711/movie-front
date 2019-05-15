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
        // <button onClick={this.state.handleShowMovies}>Home</button>
    return (
      <div className="App">
     
         
         { this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/>} 
        
        <Switch>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} /> } />
          <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} /> } />
          <Route exact path="/movieList" render={(props) => <MovieList   username={this.state.username}/>} />
        </Switch>


      </div>
    );
  }
}
export default App;
