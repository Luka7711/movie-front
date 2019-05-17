import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const MyMovie = (props) => {
	return(
		<div>
			<p>Title: {props.oneMovie.title}</p>
			<p>Date: {props.oneMovie.date}</p>
			<p>Address: {props.oneMovie.address}</p>
			<p>Park: {props.oneMovie.park}</p>
			
			<br/>
		</div>
	)
}

export default MyMovie
