import React, { Component } from 'react';

class Login extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	} 

	handleSubmit = async(e) => {
		
		e.preventDefault();
		
		console.log(this.props.loggedIn)
		try{
			const registerResponse = await fetch('http://localhost:9000/auth/register', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
          		'Content-Type': 'application/json'
       	 }
			})	

			const parsedResponse = await registerResponse.json();
			
			//here we check if res from DB is positive 
			if(parsedResponse.status === 200) {
				this.props.handleRegister(this.state.username)
			}
			// console.log(this.props.loggedIn)
		}catch(err){
			
		}
	}

	render(){
		return(
			<form onSubmit = { this.handleSubmit }>
				<input type='text' name='username' value={ this.state.username } onChange = {this.handleChange} placeholder="username"/>
				<input type='password' name='password'  value={this.state.password }onChange = { this.handleChange } placeholder="password"/>
				<button>Register</button>
			</form>
		)
	}
}

export default Login