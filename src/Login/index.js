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

			const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/login`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await loginResponse.json();

			if(parsedResponse.status === 200){
				this.props.handleLogin(this.state.username)
				this.props.history.push('/') // "change the page" using react router
			}

		}catch(err){
			console.log(err)
		}
	}

	render(){
		return(
			<div className="movie_container col-lg-6 d-flex mx-auto justify-content-center flex-column">
				<div className="row" >
					<div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
						<div className="card rounded shadow shadow-sm">
							<div className="card-header text-center">
								<h3>Sign in</h3>
							</div>
							<div className="card-body d-flex justify-content-center">
								<form className="form" onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label className="sign">username: {this.state.message}</label>
											<input className="form-control w-100" type="text" placeholder="username" name="username" onChange={this.handleChange} autoComplete="off"/>
									
									</div>
									<div className="form-group">	
										<label className="sign">password:</label>
											<input className="form-control w-100" type="password" placeholder="password" name="password" onChange={this.handleChange}/>
										
									</div>
									<button className="btn btn-dark">sign in</button>
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