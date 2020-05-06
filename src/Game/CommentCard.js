import React from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/core'
import { Link } from 'react-router-dom';


class CommentCard extends React.Component {

    render (){
        return (
            
            <Flex flexDirection="row" borderWidth="1px" rounded="lg"  margin='5px' bg='lightblue' align='center'>
                <Link to={`/profiles/${this.props.comment.user_id}`}>
                    <Avatar name={this.props.comment.user.username} src={this.props.comment.user.avatar_url} size='md' m='5px'/>
                </Link>
                <Flex flexDirection='column' align='left' textAlign='left' m='5px' >
                    <Link to={`/profiles/${this.props.comment.user_id}`}>
                    <Flex fontSize='18pt'>
                        {this.props.comment.user ? this.props.comment.user.username : null}
                    </Flex>
                    </Link>
                    <Text fontWeight='bold'>{this.props.comment.title}<br></br></Text>
                    <Text color='darkblue'>{this.props.comment.content}</Text>
                </Flex>
            </Flex>
        )
    }
}

export default CommentCard;