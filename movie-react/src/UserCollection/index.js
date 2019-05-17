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
			const response = await fetch('http://localhost:9000/chicago-cinema/mylist', {
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

	render(){
		console.log('UserCollection')
		const movieCollection = this.state.mymovies.map((movie, i) => {
			return(
				<div key={i}>
					<ul>
						<li>{movie.title}</li>
						<li>{movie.address}</li>
						<li>{movie.date}</li>
					</ul>
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