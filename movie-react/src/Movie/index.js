import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const Movie = (props) => {

	return(
		<div key={props.movie._id}>
			<p>Title: {props.movie.title}</p>
			<p>Date: {props.movie.date}</p>
			<p>Address: {props.movie.address}</p>
			<p>Park: {props.movie.park}</p>
			<Link to='/movieList/movie_.id'>movie</Link>
			<br/>
		</div>
	)

}

export default Movie
