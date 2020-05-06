import React from 'react';
import { API_BASE }  from '../constants'
import CommentCard from './CommentCard';
import CommentForm from './CommentForm'

class CommentContainer extends React.Component {

    state = {
        comments: [],
        title: '',
        content: ''
    }

    componentDidMount () {
        fetch(`${API_BASE}game_comments/${this.props.api_id}`)
        .then(resp => resp.json())
        .then(comments => this.setState({ comments }))
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addComment = (event) => {
        event.preventDefault()
        const configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({
                user_id: this.props.validated.id, 
                name: this.props.gameObj.name,
                image: this.props.gameObj.background_image,
                api_id: this.props.api_id,
                content: this.state.content,
                title: this.state.title,
            })
            }
            fetch(`${API_BASE}new_comment`, configObj)
            .then(resp => resp.json())
            .then(result => this.setState({comments: [...this.state.comments, result]}))
        }

    render (){
        return (
            <div>
                <h3>Comment Container</h3>
                {this.state.comments.message ? this.state.comments.message : this.state.comments.map(comment => <CommentCard comment={comment} handleChange={this.handleChange} />)}
                <CommentForm addComment={this.addComment} handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default CommentContainer;