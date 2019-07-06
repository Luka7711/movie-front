import React, {Component} from 'react'
import MyMovie from '../Movie'

class UserCollection extends Component{
	constructor(){
		super();

		this.state = {
			mymovies:[],
			showMovieCollection: false
		}
	}

	componentDidMount(){
		this.getMovie();
		console.log('fire')
	};

	getMovie = async() => {
		try{
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/chicago-cinema/mylist', {
				method: 'GET',
				credentials: 'include'
			})

			if(response.status == 200){
				console.log('you just get list of your collection')
				const movieParsed = await response.json();

				this.setState({
					mymovies: movieParsed.data,
					showMovieCollection: true
				})
			}

			console.log(this.state.movies)
		}catch(err){
			console.log(err)
		}
	}

	handleDelete = async(e) => {
		e.preventDefault()
		
		let movieId = await e.target.dataset.id;
		try{	
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/chicago-cinema/myMovie/${movieId}`, {
				method: 'DELETE',
				credentials: 'include'
			})
			
			this.setState({mymovies: this.state.mymovies.filter((movie, i) => movie._id !== movieId)});

			
		}catch(err){
			console.log('failed to delete')
		}
	}

	render(){
		console.log('UserCollection')
		const movieCollection = this.state.mymovies.map((movie, i) => {
			return(
				<div key={i}>
					<ul>
						<li>{movie.title}</li>
						<li>Address: {movie.address}</li>
						<li>Date: {movie.date}</li>
						<li>Phone: {movie.parkphone}</li>
					</ul>
					<button data-id={movie._id} onClick={this.handleDelete}>Remove</button>
				</div>
			)
		})
		console.log('hololol')
		return(
			<div>
				{this.state.showMovieCollection === true? movieCollection : 'loading'}
			</div>
		)
	}
}

export default UserCollection