import React, {Component} from 'react';
import ShowOneMovie from '../ShowOneMovie';
import {Link} from 'react-router-dom'
import Movie from '../Movie'
import Weather from '../Weather'

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
		this.getWeather();
		this.getMovies();
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

			await this.setState({
				totalPageNum: Math.floor(this.state.movies.length/10),
				movieList: this.state.movies.slice(0, 10)
			})
			console.log(this.state.movieList)
			this.props.movies(this.state.movies)
		}catch(err){
			console.log(err)
		}
	}

	handleNext = async(event) => {
		try{
			if(this.state.pageNum < this.state.totalPageNum){
				await this.setState({
					movieList:this.state.movies.slice(this.state.prev, this.state.nextItem),
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
				await this.setState({
					movieList:this.state.movies.slice(this.state.prev-20, this.state.nextItem-20),
					prev: this.state.prev - 10,
					nextItem: this.state.prev,
					pageNum: this.state.pageNum - 1
				})
			}else {
				console.log("stop")
			}
		}catch(err){
			console.log(err)
		}
	}
	

  	getWeather = async() => {
    	try{
    	  const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/weather/in/chicago`, {
      	  	method:"GET",
       	  	credentials:"include"
     	  })
      
      		if(response.status == 200){
        		const dataParsed = await response.json()
        	
        		this.setState({
          			 fahren: dataParsed.fahren,
         			 cels: dataParsed.cels,
         			 weatherCondit: dataParsed.weatherCondit
       			})
     		}
     		else {
        		console.log('something went wrong')
     		}   
    	}
    	catch(err){
      		console.log(err)
    	}
  	}


	render(){
			let moviePage = this.state.movieList.map((movie, i) => {
				return(
					<tbody key={i}>
						<Movie key={i} movie={movie}/>
					</tbody>
				)}
			)
		return(
			<div className="row movie_list">
				<div className="col-lg-12">
					<div className="row">
						
						<div className="col-lg-4 my-auto">
							<h3>Scheduled movies</h3>
						</div>
						
						<div className="col-lg-4">
						</div>
						
						<div className="col-lg-4">
							{ 
								this.state.weatherCondit ?
            					<Weather fahren={this.state.fahren} cels={this.state.cels} weatherCondit={this.state.weatherCondit}/> 
          						:null 
          					}
						</div>

					</div>
					<table className="table">
						<tbody>
						<tr className="main">
							<th>Movie</th>
							<th>Date</th>
							<th>Address</th>
							<th>Park</th>
						</tr>
						</tbody>
						{this.state.showMovieList ? moviePage : "loading" }
					</table>
				<button onClick={this.handlePrev} className="btn"><i className="fas fa-arrow-circle-left"></i></button>
					<span className="page">-{this.state.pageNum}-</span>
				<button onClick={this.handleNext} className="btn"><i className="fas fa-arrow-circle-right"></i></button>
				
				</div>
			</div>
		)
	}
}

export default MovieList