import React, {Component} from 'react'
import Result from '../Result'
class MovieResult extends Component{
	constructor(){
		super()
		this.state = {
			show: false
		}
	
	}

	handleClick = () => {
		this.props.hide()
	} 


	render(){
		console.log("yeeeeeeeee")
		let movies = this.props.foundMovies.map((movie, i) => {
			console.log(movie)
			return(
				<div key={i}>
					<Result key={i} movie={movie}/>
				</div>
			)
		})
		return(
			<div>
				{movies}
				<button onClick={this.handleClick}>HIDE</button>
			</div>
		)
	}
}

export default MovieResult