import React, {Component} from 'react'

class ShowOneMovie extends Component{
	constructor(props){
		super(props);

		this.state = {
			title: props.oneMovie.title,
			date: props.oneMovie.date,
			address: props.oneMovie.address,
			day: props.oneMovie.day,
			lng: props.oneMovie.lng,
			lat: props.oneMovie.lat
		}

	} render(){
		const movie = this.props.oneMovie
		console.log(this.state)
		console.log("Do I show up?")
		console.log(movie)
		return(
			<div>
				<ul>
					<li>Title: {movie.title} </li>
					<li>Date: {movie.date} </li>
					<li>Address: {movie.address}</li>
					<li>Day: {movie.day}</li>
				</ul>
			</div>
		)
	}
}
export default ShowOneMovie