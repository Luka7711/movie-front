import React, {Component} from 'react';
import Login from '../Login';
import Register from '../Register'
class Authentication extends Component{
	constructor(){
		super();
		this.state = {
			showLogin: false,
			showRegister: false
		}
	}

	handleLogin = () => {
		this.setState({
			showLogin: true,
			showRegister: false
		})
	}

	handleRegister = () => {
		this.setState({
			showRegister: true,
			showLogin: false
		})
	}




	render(){
		
		return(
			<header>
				<ul>
					<li onClick={this.handleLogin}>Login</li>
					<li onClick={this.handleRegister}>Sign up</li>
				</ul>
				{this.state.showLogin === true? <Login loggedIn={this.props.loggedIn}/> : <Register loggedIn={this.props.loggedIn}/>}
			</header>
			
		)
	}
}

export default Authentication