import React from 'react';
import LikedGame from './LikedGame'
import { Flex, Text } from '@chakra-ui/core'


class LikedGameContainer extends React.Component {

    render (){
        return (
            <Flex flexDirection='column' borderWidth="1px" rounded="lg"  margin='5px' bg='#fff'>
                <Text fontSize='24pt'>Liked Games</Text>
                {this.props.displayLikedGames.map(likedGame=> <LikedGame likedGame={likedGame}/>)}
            </Flex>
        )
    }
}

export default LikedGameContainer;