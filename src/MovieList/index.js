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

			const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/movies`, {
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
					<Movie key={i} movie={movie}/>
				)}
			)

		return(
			<div>
				<table>
					<tr class="main">
						<th>Title</th>
						<th>Date</th>
						<th>Address</th>
						<th>Park</th>
						<th>Link</th>
					</tr>
						{this.state.showMovieList ? movieList : "loading" } 
				</table>
			</div>
		)
	}
}

export default MovieList