import React, {Component} from 'react'

class Login extends Component {

	constructor(){
		super();
		this.state = {
			username: '',
			password:''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = async(e) => {
		
		e.preventDefault()

		try{

			const loginResponse = await fetch('http://localhost:9000/auth/login', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await loginResponse.json();

			if(parsedResponse.status === 200){
				console.log(`user loggedIN ${this.state.username}`)
				// this.props.handleLogin(this.state.username)
				// this.props.history.push('/') // "change the page" using react router
				this.setState({
					username: parsedResponse.data.username
				})

				//run function to set main file to loggedIn === true

				this.props.loggedIn(this.state.username)
			}

		}catch(err){
			console.log(err)
		}
	}

	render(){

		return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='username' placeholder='username' onChange={this.handleChange} />
				<input type='password' name='password' placeholder='password' onChange={this.handleChange} />
				<button>Login</button>
			</form>
		)
	}
}

export default Login