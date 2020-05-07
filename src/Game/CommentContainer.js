import React from 'react';
import { API_BASE }  from '../constants'
import CommentCard from './CommentCard';
import CommentForm from './CommentForm'
import { Flex, Text, Box } from "@chakra-ui/core";

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
            .then(result => this.setState({comments: [...this.state.comments, result], title: '', content: ''}))

        }

    clearForm = () => {
        this.setState({title: '', content: ''})
    }

    render (){
        return (
            <Flex flexDirection='row'>
                <Flex flexDirection='column' borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' minW='47%' maxW='47%'>
                    <Box margin='5px'>
                        <Text fontSize='24pt'>Comments</Text>
                        {this.state.comments.message ? this.state.comments.message : this.state.comments.map(comment => <CommentCard comment={comment} handleChange={this.handleChange} />)}
                    </Box>
                </Flex>
                <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' minW='47%' maxW='47%' justify='center'>
                    <CommentForm content={this.state.content} title={this.state.title}addComment={this.addComment} handleChange={this.handleChange}/>
                </Flex>
            </Flex>
        )
    }
}

export default CommentContainer;