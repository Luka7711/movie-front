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
		
		// console.log(this.props.loggedIn)
		try{
			const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/register`, {
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
				this.props.history.push('/')
			}
			// console.log(this.props.loggedIn)
		}catch(err){
			
		}
	}

	render(){
		return(
			<div className="sign">
				<form onSubmit = { this.handleSubmit }>
					<label>username</label><input type='text' name='username' value={ this.state.username } onChange = {this.handleChange} placeholder="username"/>
					<label>password</label><input type='password' name='password'  value={this.state.password }onChange = { this.handleChange } placeholder="password"/>
					<button>Register</button>
				</form>
			</div>
		)
	}
}

export default Login