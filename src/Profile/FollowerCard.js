import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Flex, Text } from '@chakra-ui/core'

class FollowerCard extends React.Component {

    render (){
        return (
            <Link to={`/profiles/${this.props.follower.user_id}`}>
                <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' flexDirection='column'>
                    <Flex align='center'>
                        <Avatar name={this.props.follower.user.username} src={this.props.follower.user.avatar_url} size='md'/>
                        <Text fontSize='18pt'>{this.props.follower.user.username}</Text>
                    </Flex>
                </Flex>
            </Link>

        )
    }
}

export default FollowerCard;