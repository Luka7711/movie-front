import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const Movie = (props) => {

	return(
		<tr key={props.movie._id}>
			<th><Link to={`/movieList/${props.movie._id}`}>{props.movie.title}</Link></th>
			<th> {props.movie.date.split("").splice(0, 10).join("")}</th>
			<th> {props.movie.address}</th>
			<th> {props.movie.park}</th>
		</tr>
	)

}

export default Movie

