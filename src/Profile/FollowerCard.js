import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@chakra-ui/core'

class FollowerCard extends React.Component {

    render (){
        return (
            <div>
                <Link to={`/profiles/${this.props.follower.user_id}`}>
                <Avatar name={this.props.follower.user.username} src={this.props.follower.user.avatar_url} size='md'/>
                <p>{this.props.follower.user.username}</p>
                </Link>
            </div>
        )
    }
}

export default FollowerCard;