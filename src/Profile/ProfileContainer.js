import React from 'react';
import { API_BASE }  from '../constants'
import ProfileInfo from './ProfileInfo'

class ProfileContainer extends React.Component {
    
    state = {
        user: {}
    }

    componentDidMount () {
        let id = this.props.match.params.id
        fetch(`${API_BASE}users/${id}`)
        .then(resp => resp.json())
        .then(user => this.setState( {user} ))
    }
    
    render (){
        return (
            <div>
                <h3>Profile Container</h3>
                <ProfileInfo user={this.state.user}/>
            </div>
        )
    }
}

export default ProfileContainer;