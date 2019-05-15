import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login'
import Register from '../Register'

class Header extends Component{
	constructor(){
		super();
	}
	
	// handleLogin = () => {

	// }


	render(){
		<header>
			<ul>
				<li onClick={this.handleLogin}>Login</li>
				<li>Sign Up</li>
			</ul>
		</header>
	return(
			<h1>aksnd</h1>
		)
	}
}

export default Header