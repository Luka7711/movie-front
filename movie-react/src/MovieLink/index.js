import React, {component} from 'react';
import {Link} from 'react-router-dom';

function MovieLink(){
	return(
		<div className="movie_message">
			<ul>
				<li> Movies in the Parks 2019: </li>
				<li><Link to='/movieList'> See Events </Link></li>
			</ul>
		</div>
	)
}

export default MovieLink