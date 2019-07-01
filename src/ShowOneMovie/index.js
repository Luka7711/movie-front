import React, {Component} from 'react'
import Movie from '../Movie'
import {Link} from 'react-router-dom'
import GoogleMap from '../GoogleMap'
import Login from '../Login'
import MovieSearch from '../MovieSearch'
import Plot from '../Plot'

class ShowOneMovie extends Component{
	constructor(props){
		super(props);

		this.state = {
			showMap: false,
			oneMovie:{},
			message: 'Sign in or Sign up',
			showRegister: false,
			saveMessage: 'Save',
			description:'',
			movieAbout:'',
			poster:''
		}
	} 

	handleDesc = (description) => {
		this.setState({
			description: description
		})
	}

	componentDidMount(){
		this.showMovie(this.props.match.params.number)
	}
	
	showMovie = async(number) => {
		// take id and add it to state
		try{
			const url = process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/movies/${number}`
		
			let response = await fetch(url, {
				method: 'GET',
				credentials: 'include'
			});

			const moviesParsed = await response.json();
			this.setState({
				oneMovie: moviesParsed.data,
				showMap: true
			})
			
			let response2 = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/plot/${this.state.oneMovie.title}`, {
				method: 'GET',
				credentials: 'include'
			})
			const detailsMovie = await response2.json();
			
			//second call to get poster and description
			if(detailsMovie.status == 200){
				this.setState({
					movieAbout: detailsMovie.data,
					poster: detailsMovie.poster
				})
			}else{
				this.setState({
					movieAbout: detailsMovie.message,
					poster: ''
				})
				console.log('not works')	
			}	
		}catch(err){
			console.log(err)
		}
	}

	//if user logged in, save current item to user movie list
	//need to pass movie id in fetch request
	handleSaveMovie = async(e) => {
		e.preventDefault()		
			if(this.props.loggedIn){
				try{
					const movieId = await this.state.oneMovie._id;
					const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/mylist/${movieId}`, {
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
      						this.setState({
      							saveMessage:'Saved'
      						})
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
		return(
		
				
			<div className="oneMovie">	
				<div className="content">
					<img src={this.state.poster} className="poster"/>
					<div className="description">	
						<span className="park_name">{this.state.oneMovie.park}</span>
						<button onClick={this.handleSaveMovie}>{this.state.saveMessage}</button>
						<ul className="movieDescription">	
							<li><h1>{this.state.oneMovie.title}</h1></li>
							<li>Date: {this.state.oneMovie.date}</li>
							<li>Day:{this.state.oneMovie.day}</li>
							<li>Address: {this.state.oneMovie.address}</li>
							<li>Park phone#: {this.state.oneMovie.parkphone}</li>
							<li>Description: {this.state.movieAbout}</li>
						</ul>
						
					</div>
					{this.state.showMap ? <GoogleMap lng={this.state.oneMovie.lng} lat={this.state.oneMovie.lat} park={this.state.oneMovie.park}/> : null }
					
				</div>
				<div>
					<MovieSearch handleDesc={this.handleDesc} title={this.state.oneMovie.title}/>
					<Plot description = {this.state.description}/>
				</div>
			</div> 
		)
	}
}
export default ShowOneMovie