import React from 'react';

class FollowerCard extends React.Component {

    render (){
        return (
            <div>
                <h3>Follower Card</h3>
                <p>{this.props.follower.user.username}</p>
            </div>
        )
    }
}

export default FollowerCard;