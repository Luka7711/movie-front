import React, { Component } from 'react';
import './App.css';
import Register from './Register'
import Logout from './Logout'
import Login from './Login'
import Header from './Header'
import { Route, Switch, Link } from 'react-router-dom'
import MovieList from './MovieList'
import Movie from './Movie'
import ShowOneMovie from './ShowOneMovie'
import User from './User'
import Weather from './Weather'  
import MovieFind from './MovieFind'
import MovieResult from './MovieResult'
import Home from './Home'
import {Navbar, Button, FormControl, Form, 
        Nav, NavItem, NavDropdown, DropdownButton, 
        MenuItem, CollapsibleNav} from 'react-bootstrap';

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
      foundMovies: '',
      search: false
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

  handleMovies = (movie) => {
    this.setState({
      movies: movie
    })
  }

  handleFindMovies = (movieData) => {
     this.setState({
        foundMovies: movieData,
        search:true
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


  handleHide = () => {
    this.setState({
      search:false
    })
  }

  render(){
    return (      
      <div className="App">
        <Navbar id="navigation" bg="dark" variant="dark" expand="lg">
          <div className="container-fluid pl-5">
          <Navbar.Brand href="/" id="logo" className="mr-5" style={{fontFamily:"Pacifico"}}>Cinematica</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Navbar.Collapse id="basic-navbar-nav">
           
            <Nav className="mr-auto">
              <Nav.Link href="/home">Schedule</Nav.Link>
              {this.state.loggedIn === true ? <Logout username={this.state.username} handleLogout={this.handleLogout}/> :false}
            </Nav>
            
            <MovieFind allmovies = {this.state.movies} handleFindMovies={this.handleFindMovies}/>
            {this.state.loggedIn === false ? <Header /> :null}
          </Navbar.Collapse>
          </div>
        </Navbar>

        <div className="container-fluid">
           {this.state.search === true ? <MovieResult hide={this.handleHide} foundMovies={this.state.foundMovies}/> :null}
           {this.state.username === "Luka7711" ? <button onClick={this.handleData}>Add Data</button> : null}
           {this.state.username === "Luka7711" ? <button onClick={this.handleDelete}>Delete Data</button> : null}

           <Switch>
             <Route exact path="/"><Home/></Route> 
             <Route exact path='/login' render={(props) => <Login {...props} handleLogin={this.handleLogin} /> } />
             <Route exact path='/signup' render={(props) => <Register {...props} handleRegister={this.handleRegister} /> } />
             <Route exact path="/home" render={(props) => <MovieList movies={this.handleMovies}/>} /> 
             <Route exact path='/movieList/:number' render={(props) => <ShowOneMovie {...props} message={this.handleMessage} loggedIn={this.state.loggedIn}/> } />
             {this.state.loggedIn ? <Route exact path='/user' component={User}/>: null}
           </Switch>
        </div>
     
      </div>
    );
  }
}
export default App;
