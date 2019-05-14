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
		// console.log(this.props., '<---show_movie model>')
		return(
			<div>
				<ul>
					<li>Title: {this.state.title}</li>
					<li>Date: {this.state.date} </li>
					<li>Address: {this.state.address}</li>
					<li>Day: {this.state.day}</li>
				</ul>
			</div>
		)
	}
}
export default ShowOneMovie