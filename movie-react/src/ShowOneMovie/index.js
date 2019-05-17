import React, {Component} from 'react'
import Movie from '../Movie'
import {Link} from 'react-router-dom'
import GoogleMap from '../GoogleMap'
import Login from '../Login'

class ShowOneMovie extends Component{
	constructor(props){
		super(props);

		this.state = {
			showMap: false,
			oneMovie:{},
			message: 'Sign in or Sign up',
			showRegister: false
		}
	} 

	componentDidMount(){
		this.showMovie(this.props.match.params.number)
	}

	showMovie = async(number) => {
		// take id and add it to state

		const url = `http://localhost:9000/chicago-cinema/movies/${number}`

		// console.log("URL: ", url);

		const response = await fetch(url, {
			method: 'GET',
			credentials: 'include'
		});

		 if(response.status !== 200){
			console.log('failed to show')
		}
		const moviesParsed = await response.json();

		console.log(moviesParsed.data)

		this.setState({
			oneMovie: moviesParsed.data,
			showMap: true
		})
	}

	//if user logged in, save current item to user movie list
	//need to pass movie id in fetch request
	handleSaveMovie = async(e) => {
		e.preventDefault()
			
			if(this.props.loggedIn){

				try{
					const movieId = await this.state.oneMovie._id;
					const response = await fetch(`http://localhost:9000/chicago-cinema/mylist/${movieId}`, {
						method: 'POST',
						credentials: 'include',
			   			body: JSON.stringify(this.state),
        				headers: {
         		 			'Content-Type': 'application/json'
       			        }
    		    	})

      				const parsedResponse = await response.json();

      					if(parsedResponse.status == 200){
        				// this is how we progamtically change routes in a component
        				// that is rendered by a route componet check the app.js to see the login
        				// its inside a route
      						console.log('works')
    			    	}


    			} 
    			catch (err) {
    			  console.log(err)
    			 }
			}else{				
				this.props.message(this.state.message)
	}	
}

	render(){
		// <Movie movie={this.state.oneMovie}/>
		console.log(this.state, '<-- current state of one movie')
		console.log(this.props)
		return(
			<div>
			<ul>
				<button onClick={this.handleSaveMovie}>save</button>
				<li>{this.state.oneMovie.title}</li>
				<li>{this.state.oneMovie.date}</li>
				<li>{this.state.oneMovie.day}</li>
				<li>{this.state.oneMovie.address}</li>
				<Link to="/movieList">Back</Link>
			</ul>
			
				{ this.state.showMap ? <GoogleMap lng={this.state.oneMovie.lng} lat={this.state.oneMovie.lat} park={this.state.oneMovie.park}/> : null }
			</div>
		)
	}
}
export default ShowOneMovie