
import React, {Component} from 'react'
import './index.css'

class Profile extends Component {
	constructor(){
		super();

		this.state={
			username: '',
			movies: []
		}
	}



    handleLogout = async (e) => {
        e.preventDefault();

        try {
            const logoutResponse = await fetch('http://localhost:9000/auth/logout', {
                method: 'GET',
                credentials: 'include'
            });

            if (logoutResponse.status !== 200) {
                throw Error('Failed to logout');
            }
            this.props.handleMovieListOn(this.state.username)



        } catch (err) {
            console.log(err)
        }
    }   
	

	render(){
		return(
			<div>
				<h1>Profile Component</h1>
				<p className="Profile-p" onClick={this.handleLogout}>Logout</p>				
			</div>
		)
	}
}

export default Profile