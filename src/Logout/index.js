import React, {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom';

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
            const logoutResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/auth/logout`, {
                method: 'GET',
                credentials: 'include'
            });

            if (logoutResponse.status !== 200) {
                throw Error('Failed to logout');
            }
            this.props.handleLogout(this.state.username);


        } catch (err) {
            console.log(err)
        }
    }    

        render() {
            return ( 
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to='/user'>
                            Profile
                        </Link>
                    </li>
                        
                    <li style={{cursor:"pointer"}} className="nav-link" onClick={this.signOut}>
                        Sign Out
                    </li>
                </>
            )
        }
    
}


export default Logout