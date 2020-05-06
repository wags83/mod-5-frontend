import React from 'react';

class ProfileInfo extends React.Component {
    
    render (){
        const {username, bio, avatar_url, favorite_genre, email} = this.props.user
        return (
            <div>
                <img className="avatar-thumbnail" src={avatar_url} alt="user avatar"/>
                <h3>Username: {username}</h3>
                <p>Bio: {bio}</p>
                <p>Favorite Genre: {favorite_genre}</p>
                <p>Email: {email}</p>

            </div>
        )
    }
}

export default ProfileInfo