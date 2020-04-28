import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    let id = props.validated.id 
    return (
        <div className="nav-bar">GameView
            <Link to='/home'><div>Home</div></Link>
            <Link to='/browse'><div>Browse</div></Link>
            <Link to={location => `/profiles/${id}`}><div>View Profile</div></Link>
            <Link to='/login'><div>Login / Signup</div></Link>
        
        </div>
    )

}

export default NavBar;