import React, {Component} from 'react'

class MovieList extends Component {
	constructor(){
		super();

		this.state = {
			movies: []
		}
	} 

	componentDidMount(){
		this.getMovies()
	}

	getMovies = async() =>{

		try{

			const response = await fetch('http://localhost:9000/chicago-cinema/movies', {
				method:'GET',
				credentials: 'include'
			}) 
			if(response.status !== 200){
				console.log('failed')
			} 

			const moviesParsed = await response.json();

			this.setState({
				movies: moviesParsed.data
			})

		}catch(err){
			console.log(err)
		}
	}

	render(){
		console.log(this.state)
		const movieList = this.state.movies.map((movie, i) => {
			return(
			<div key={i}>
				<p>Title: {movie.title}</p>
				<p>Date: {movie.date}</p>
				<p>Address: {movie.address}</p>
				<p>Park: {movie.park}</p><br/>
			</div>
			)
		})
		return(
			<div>
				{movieList}
			</div>
		)
	}
}

export default MovieList