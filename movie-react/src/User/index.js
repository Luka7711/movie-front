import React, {Component} from 'react'
import UserCollection from '../UserCollection'

class User extends Component {
	constructor(){
		super();

		this.state = {
			movies: []
		}
	}

	render(){
		return(
			<div>
				<h2>Saved List</h2>
				<UserCollection/>
			</div>
		)
	}
}

export default User