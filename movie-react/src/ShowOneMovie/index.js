import React, {Component} from 'react'
import Movie from '../Movie'
import {Link} from 'react-router-dom'

class ShowOneMovie extends Component{
	constructor(props){
		super(props);

		this.state = {

			oneMovie:{}
		}
	} 

	componentDidMount(){
		this.showMovie(this.props.match.params.number)
	}

	showMovie = async(number) => {
		// take id and add it to state

		const url = `http://localhost:9000/chicago-cinema/movies/${number}`

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
		})
	}

	render(){
		// <Movie movie={this.state.oneMovie}/>
		console.log(this.state)
		console.log(this.props)
		return(
			<ul>
				<li>{this.state.oneMovie.title}</li>
				<li>{this.state.oneMovie.date}</li>
				<li>{this.state.oneMovie.day}</li>
				<li>{this.state.oneMovie.address}</li>
				<Link to="/movieList">Back</Link>
			</ul>
		)
	}
}
export default ShowOneMovie