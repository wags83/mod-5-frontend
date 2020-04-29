import React from 'react';
import { API_BASE }  from '../constants'
import GameCard from './GameCard'


class GameCardContainer extends React.Component {

    render () {
        return (
            <div className='game-card-container'>
                {this.props.gamesToDisplay ? this.props.gamesToDisplay.map(game => <GameCard gameObj={game} key={game.id} />) : null}
            </div>
        )
    }
}

export default GameCardContainer;