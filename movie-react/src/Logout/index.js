import React, {Component} from 'react';
import './index.css'

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
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
                    <p>{this.state.username}</p>
                    <button onClick={this.signOut}>Sign Out</button>
                </div>
            )
        }
    
}


export default Logout