import React, {Component} from 'react';

class Logout extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    handleChange = async (e) => {
        e.preventDefault();

        try {
            const logoutResponse = await fetch('http://localhost:9000/auth/logout', {
                method: 'GET',
                credentials: 'include'
            });
            if (logoutResponse.status !== 200) {
                throw Error('Failed to logout');
            }

            this.props.logout(this.state.username)

        } catch (err) {
            console.log(err)
        }
    }    

        render() {
            return ( 
                <button onClick = {this.handleChange}> Sign Out </button>
            )
        }
    
}


export default Logout