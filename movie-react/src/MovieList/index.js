import React, {Component} from 'react'

class MovieList extends Component {
	constructor(){
		super();

		this.state = {
			title: '',
     		date: '',
     		address: '',
     		day: '',
     		lat: '',
     		lng: '',
     		park: ''
		}
	} 


	render(){
		return(
			<h1>Movie list:</h1>
		)
	}
}

export default MovieList