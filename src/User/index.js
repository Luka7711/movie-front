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
				<UserCollection/>
			</div>
		)
	}
}

export default User