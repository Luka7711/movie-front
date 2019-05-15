import React, {Component} from 'react';
import Login from '../Login'
import Register from '../Register'

class Header extends Component{
	constructor(){
		super();
		this.state = {
			username: '',
			showLogin: false,
			showRegister: false
		}
	}


	handleLogin = () => {
		this.setState({
			showAuth: true,
		})
	}

	handleRegister = () => {
		this.setState({
			showRegister: true
		})
	}


	render(){
		
		return(
			<div>
				<ul>
					<li onClick={this.handleLogin}>Login</li>
					<li onClick={this.handleRegister}>Sign Up</li>
				</ul>
			</div>
		)
	}
}
export default Header