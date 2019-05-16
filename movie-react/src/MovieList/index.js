import React, {Component} from 'react';
import ShowOneMovie from '../ShowOneMovie';
import {Link} from 'react-router-dom'
import Movie from '../Movie'


class MovieList extends Component {
	constructor(){
		super();

		this.state = {
			movies: [],
			showMovieList: false,
			showMovie: false,
			oneMovie: {}
		}	
	} 

	componentDidMount(){
		this.getMovies()
	};

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
				movies: moviesParsed.data,
				showMovieList: true
			})
			

			// this.props.showMovieLink = false

		}catch(err){
			console.log(err)
		}
	}

	
	render(){
		console.log(this.state, '<--this is one movie from state')
		
			const movieList = this.state.movies.map((movie, i) => {
			return(
				<Movie movie={movie}/>
			)})	
		
		
		return(
			<div>
					{this.state.showMovieList ? movieList : "loading" } 

			</div>
		)
	}
}

export default MovieList