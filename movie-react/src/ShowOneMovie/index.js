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

	} 

	handleBack = () => {
		//set showOneMovie === false
		//set showMovieList === true
		// this.props.handleMovieList(this.props.oneMovie.title)
		console.log('HandleBack ')
	}

	render(){
		const movie = this.props.oneMovie
		return(
			<div>
				<ul>
					<li>Title: {this.state.title}</li>
					<li>Date: {this.state.date} </li>
					<li>Address: {this.state.address}</li>
					<li>Day: {this.state.day}</li>
					<button onClick={this.handleBack}>Back</button>
				</ul>
			</div>
		)
	}
}
export default ShowOneMovie