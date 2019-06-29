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
import Weather from './Weather'  

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
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/weather/in/chicago`, {
        method:"GET",
        credentials:"include"
      })
      
      if(response.status == 200){
        const dataParsed = await response.json()
        this.setState({
          fahren: dataParsed.fahren,
          cels: dataParsed.cels,
          weatherCondit: dataParsed.weatherCondit
        })
      }else{
        console.log('something went wrong')
      }   
    }catch(err){
      console.log(err)
    }
  }

  handleDelete = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/movies/delete/all`, {
        method: 'DELETE',
        credentials:'include'
      })
      console.log("deleted")
    }catch(err){
      console.log(err)
    }
  }

  render(){
    console.log(this.state)
    return (
      
      <div className="App">
        <Link to='/movieList'>Home</Link>
        {this.state.loggedIn === false ? <Header /> : <Logout username={this.state.username} handleLogout={this.handleLogout}/> }
        
        <div className='title'>
          <h2>Movies in the Parks 2019</h2>
        </div>
        
        {this.state.weatherCondit ? <Weather fahren={this.state.fahren} cels={this.state.cels} weatherCondit={this.state.weatherCondit}/> :null}
        
        <div className='message'>
          <h2>{this.state.message}</h2>
        </div>
        
        {this.state.username === "Luka7711" ? <button onClick={this.handleData}>Add Data</button> : null}
        {this.state.username === "Luka7711" ? <button onClick={this.handleDelete}>Delete Data</button> : null}

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
