import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Form, FormControl, Button} from "react-bootstrap"

const style = {
	input:{
		marginRight: "1rem",
    	borderRadius: "2px",
    	border:"none"
	}
}

class MovieFind extends Component{
	constructor(props){
		super(props);
		this.state = {
			movie:'',
			title: '',
			allmovies: props.allmovies
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]:e.currentTarget.value 
		})
		console.log(this.state)
	}

	handleSubmit = async(e) =>{
		e.preventDefault()
		
		try{
			const regex = new RegExp(this.state.title, "gi");
			const foundMovie = await this.state.allmovies.filter(movie => movie.title.match(regex));
			if(foundMovie.length != 0){
				this.setState({
					movie: foundMovie
				})
				this.props.handleFindMovies(this.state.movie)
			}else{
				console.log("there is no such movie ")
			}
		}catch(err){
			console.log(err)
		}
	}

	render(){
		
		return (
			<Form inline onSubmit={this.handleSubmit} className="mr-5">
         		<FormControl type="text" placeholder="Movie" className="mr-sm-2" />
         		<Button variant="success" type="submit">Search</Button>
       		</Form>
		)
	}
}
export default MovieFind