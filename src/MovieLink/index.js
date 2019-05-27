import React, {component} from 'react';
import {Link} from 'react-router-dom';

function MovieLink(props) {
	return(
		<div className="movie_message">
			<ul>
				<li> Movies in the Parks 2019: </li>
				<Link to="/movieList" onClick={props.showList}>See Movies</Link>
			</ul>
		</div>
	)
}

export default MovieLink