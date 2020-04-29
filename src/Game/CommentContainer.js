import React from 'react';
import { API_BASE }  from '../constants'
import CommentCard from './CommentCard';

class CommentContainer extends React.Component {

    state = {
        comments: []
    }

    componentDidMount () {
        fetch(`${API_BASE}game_comments/${this.props.api_id}`)
        .then(resp => resp.json())
        .then(comments => this.setState({ comments }))
    }

    render (){
        return (
            <div>
                <h3>Comment Container</h3>
                {this.state.comments.message ? this.state.comments.message : this.state.comments.map(comment => <CommentCard comment={comment} />)}
            </div>
        )
    }
}

export default CommentContainer;