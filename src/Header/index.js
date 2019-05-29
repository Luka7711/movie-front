import React from 'react';
import { Link } from 'react-router-dom';
function Header(){

	return(
		<div className='head'>
			<ul className='header'>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/signup">Sign Up</Link></li>
			</ul>
		</div>
	)
}

export default Header