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

	showMovie = async(e) => {
		// take id and add it to state
		e.preventDefault();

		const url = `http://localhost:9000/chicago-cinema/movies/${e.currentTarget.dataset.id}`

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
			showMovieList: false
		})
	}

	render(){
		console.log(this.state.oneMovie, '<--this is one movie from state')
		
		// remember, you can use .slice() to create a copy of an array between two indices of your choice 
		const movieList = this.state.movies.map((movie, i) => {
			return(
				<Movie movie={movie}/>
			)})	
		return(
			<div>
				{this.state.showMovieList === true ? [movieList] : <ShowOneMovie oneMovie={this.state.oneMovie}/> }
			</div>
		)
	}
}

export default MovieList