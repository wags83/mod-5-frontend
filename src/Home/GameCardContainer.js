import React from 'react';
import GameCard from './GameCard'
import { Flex } from '@chakra-ui/core'

class GameCardContainer extends React.Component {

    render () {
        return (
            <Flex display="flex" flexWrap="wrap">
                {this.props.gamesToDisplay ? this.props.gamesToDisplay.map(game => <GameCard gameObj={game} key={game.id} />) : null}
            </Flex>
        )
    }
}

export default GameCardContainer;