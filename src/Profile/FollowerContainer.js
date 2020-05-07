import React from 'react';
import FollowerCard from './FollowerCard'
import { Flex, Text } from '@chakra-ui/core'

class FollowerContainer extends React.Component {

    render (){
        return (
            <Flex flexDirection='column' borderWidth="1px" rounded="lg"  margin='5px' bg='#fff'>
            <Text fontSize='24pt'>Followers</Text>
                {this.props.displayFollower.map(follower => <FollowerCard follower={follower}/>)}
            </Flex>
        )
    }
}

export default FollowerContainer;