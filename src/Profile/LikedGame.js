import React from 'react';
import { Image, Flex } from '@chakra-ui/core'
import { Link } from 'react-router-dom';

class LikedGame extends React.Component {

    render (){
        return (
            <Link to={`/games/${this.props.likedGame.game.api_id}`}>
                <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' flexDirection='column'>
                    {this.props.likedGame.game.name}
                    <Image height="200px" width='300px' src={this.props.likedGame.game.art_url} alt="game box art"/>
                </Flex>
            </Link>
        )
    }
}

export default LikedGame;