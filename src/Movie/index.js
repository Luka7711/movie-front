import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const Movie = (props) => {

	return(
		<tr key={props.movie._id}>
			<th><strong>{props.movie.title}</strong> </th>
			<th> {props.movie.date.split("").splice(0, 10).join("")}</th>
			<th> {props.movie.address}</th>
			<th> {props.movie.park}</th>
			<th><Link to={`/movieList/${props.movie._id}`}>See More</Link></th>	
		</tr>
	)

}

export default Movie

