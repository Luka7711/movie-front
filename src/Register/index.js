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

			<div className="movie_container col-lg-6 d-flex mx-auto justify-content-center flex-column">
				<div className="row" >
					<div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
						<div className="card rounded shadow shadow-sm">
							<div className="card-header text-center">
								<h3>Sign up</h3>
							</div>
							<div className="card-body d-flex justify-content-center">
								<form className="form" onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label className="sign">username: </label>
											<input className="form-control" type='text' name='username' value={ this.state.username } onChange = {this.handleChange} placeholder="username"/>
									</div>
									<div className="form-group">	
										<label className="sign">password:</label>
											<input className="form-control" type='password' name='password'  value={this.state.password }onChange = { this.handleChange } placeholder="password"/>
									</div>
									<button className="btn btn-dark">sign up</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login