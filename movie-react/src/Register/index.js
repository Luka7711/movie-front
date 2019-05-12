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
			
			if(parsedResponse.status === 200) {
				this.props.loggedIn = true
			}

		}catch(err){
			
		}
	}

	render(){
		return(
			<form onSubmit = { this.handleSubmit }>
				<input type='text' name='username' onChange = {this.handleChange}/>
				<input type='password' name='password' onChange = { this.handleChange }/>
				<button>Register</button>
			</form>
		)
	}
}

export default Login