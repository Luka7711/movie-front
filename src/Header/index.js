import React from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

function Header(){

	return(
		<>
			<Nav>
				<Nav.Link href="/login">Login</Nav.Link>
				<Nav.Link href="/signup">Sign Up</Nav.Link>
			</Nav>
		</>
	)
}

export default Header