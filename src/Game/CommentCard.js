import React from 'react';


class CommentCard extends React.Component {

    render (){
        return (
            <div>
                <h3>Comment Card</h3>
                <h4>{this.props.comment.user.username}</h4>
                <p>{this.props.comment.title}</p>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default CommentCard;