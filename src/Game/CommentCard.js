import React from 'react';
import { Avatar } from '@chakra-ui/core'
import { Link } from 'react-router-dom';


class CommentCard extends React.Component {

    render (){
        return (
            <div>
                <Link to={`/profiles/${this.props.comment.user_id}`}>
                <Avatar name={this.props.comment.user.username} src={this.props.comment.user.avatar_url} size='md'/>
                <h4>{this.props.comment.user ? this.props.comment.user.username : null}</h4>
                </Link>
                <p>{this.props.comment.title}</p>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default CommentCard;