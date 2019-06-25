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
      message: '',
      city:'Chicago',
      code:'USA',
      temp:''
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
      username: " ",
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

  handleData = async(e) =>{
    e.preventDefault()
      try{

        const response = fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/movies`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }catch(err){
        console.log(err)
      }
  }

  componentDidMount(){
    this.getWeather()
  }

  getWeather = async() => {
    try{
       let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.code}&APPID=24efa750a9ff8ae4b68abe4adc16f424`)
      .then(results => {
        return results.json() 
      })
      this.setState({
        temp:response.main.temp
      })
    }catch(err){
      console.log(err)
    }

  }



  render(){
    console.log(this.state)
    return (
      
      <div className="App">
      <Link to='/movieList'>Home</Link>
        { this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/> }
        <div className='title'>
            <h2>Movies in the Parks 2019</h2>
        </div>
        <div className='message'>
          <h2>{this.state.message}</h2>
        </div>
        { this.state.username === "Luka7711" ? <button onClick={this.handleData}>Add Data</button> : null}
        <Switch>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} /> } />
          <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} /> } />
          <Route exact path="/movieList" render={(props) => <MovieList/>} /> 
          <Route exact path='/movieList/:number' render={(props) => <ShowOneMovie {...props} message={this.handleMessage} loggedIn={this.state.loggedIn}/> } />
          {this.state.loggedIn ? <Route exact path='/user' component={User}/>: null}
          <MovieList/>
        </Switch>
      </div>
    );
  }
}
export default App;
