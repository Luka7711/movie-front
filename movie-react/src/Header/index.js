import React from 'react';
import { Link } from 'react-router-dom';
function Header(){

	return(
		<header>
			<ul>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/signup">Sign up</Link></li>
				<li><Link to="/">Home</Link></li>
			</ul>
		</header>
	)
}

export default Header