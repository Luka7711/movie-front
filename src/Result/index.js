import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const Result = (props) => {
	return(
		<ul className="result" key={props.movie._id}>
			<li>{props.movie.title}</li>
			<li>{props.movie.date}</li>
			<li>{props.movie.address}</li>
			<li>{props.movie.park}</li>
			<li><Link to={`/movieList/${props.movie._id}`}>See more</Link></li>
		</ul>
	)
}

export default Result