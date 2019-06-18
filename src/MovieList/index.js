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
			oneMovie: {},
			movieList:[],
			pageNum:1,
			prev: 10,
			nextItem: 20
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

			await this.setState({
				movies: moviesParsed.data,
				showMovieList: true
			})

			this.setState({
				totalPageNum: Math.floor(this.state.movies.length/10),
				movieList: this.state.movies.slice(0, 10)
			})

			

		}catch(err){
			console.log(err)
		}
	}

	handleNext = async(event) => {
		try{
			if(this.state.pageNum < this.state.totalPageNum){
				await this.setState({
					movieList:this.state.movies.slice(this.state.prev, this.state.nextItem)

				})
				await this.setState({
					prev: this.state.nextItem,
					nextItem: this.state.nextItem + 10,
					pageNum: this.state.pageNum + 1
				})
				
			}else if(this.state.pageNum === this.state.totalPageNum){
				console.log('stop')
			}	
		}catch(err){
			console.log(err)
		}
	}

	
		handlePrev = async() => {
			try{
				if(this.state.pageNum > 1){
					console.log("we get back")
					await this.setState({
						nextItem: this.state.prev,
						prev: this.state.prev - 10
					})

					await this.setState({
						movieList:this.state.movies.slice(this.state.prev, this.state.nextItem)
					})

					await this.setState({
						pageNum: this.state.pageNum - 1
					})
				}
				else{
					console.log("stop")
				}
			}catch(err){
				console.log(err)
			}
		}
	
	render(){
		// console.log(this.state, '<--this is one movie from state')
		console.log(this.state.movieList)	
			let moviePage = this.state.movieList.map((movie, i) => {
				return(
					<tbody key={i}>
						<Movie key={i} movie={movie}/>
					</tbody>
				)}
			)		

		return(
			<div>
				<table>
					<tbody>
						<tr className="main">
							<th>Title</th>
							<th>Date</th>
							<th>Address</th>
							<th>Park</th>
							<th>Link</th>
						</tr>
					</tbody>
						{this.state.showMovieList ? moviePage : "loading" }
				</table>
				<button onClick={this.handlePrev}>prev</button>
				<span>-{this.state.pageNum}-</span>
				<button onClick={this.handleNext}>next</button>
			</div>
		)
	}
}

export default MovieList