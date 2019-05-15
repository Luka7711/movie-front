
import React, {Component} from 'react'
import './index.css'

class Profile extends Component {
	constructor(){
		super();

		this.state={
			movies: []
		}
	}

	render(){
		return(
			<div>
				<h1>Profile Component</h1>
				<p className="Profile-p" onClick={()=>console.log("click!")}>Logout</p>				
			</div>
		)
	}
}

export default Profile