import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Logout from './Logout'
import Login from './Login'
import Header from './Header'
import { Route, Switch, Link } from 'react-router-dom'
import MovieLink from './MovieLink'
import MovieList from './MovieList'
import Movie from './Movie'
import ShowOneMovie from './ShowOneMovie'
import User from './User'

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      loggedIn: false,
      message: '',
      showMovieLink: true,
      showMessage: false,
      message: ''
    }
  }

  handleRegister = (username) => {
    this.setState({
      username: username,
      loggedIn: true,
      message: ''
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
      loggedIn: true,
      message: ''
    })
  }

  handleMessage = (message) => {
    this.setState({
      message: message
    })
  }

  render(){
    return (
      
      <div className="App">
        { this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/> }
        
        <Link to='/movieList'>Home</Link>
        
        <div className='title'>
            <h2>Movies in the Parks 2019</h2>
        </div>
        
        <div className='message'>
          <h2>{this.state.message}</h2>
        </div>
        
        <Switch>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} /> } />
          <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} /> } />
          <Route exact path="/movieList" render={(props) => <MovieList   />} />
          <Route exact path='/movieList/:number' render={(props) => <ShowOneMovie {...props} message={this.handleMessage} loggedIn={this.state.loggedIn}/> } />
          <Route exact path='/user' component={User}/>
        </Switch>
      </div>
    );
  }
}
export default App;
