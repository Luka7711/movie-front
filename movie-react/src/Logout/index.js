import React, {Component} from 'react';
import './index.css'


class Logout extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
    }

    signOut = async (e) => {
        e.preventDefault();

        try {
            const logoutResponse = await fetch('http://localhost:9000/auth/logout', {
                method: 'GET',
                credentials: 'include'
            });

            if (logoutResponse.status !== 200) {
                throw Error('Failed to logout');
            }

            this.props.handleLogout(this.state.username)

        } catch (err) {
            console.log(err)
        }
    }    

        render() {
            return ( 
                <div>
                    <button onClick={this.signOut}>Sign Out</button>
                </div>
            )
        }
    
}


export default Logout