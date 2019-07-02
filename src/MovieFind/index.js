import React, {Component} from 'react'

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
			<form onSubmit={this.handleSubmit}>
				<h2>search movie <i className="fas fa-search"></i></h2>
				<input placeholder="Title" onChange={this.handleChange} name="title"/>
				<button>Search</button>
			</form>
		)
	}
}
export default MovieFind