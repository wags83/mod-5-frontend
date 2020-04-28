import React from 'react';
import { API_BASE }  from '../constants'
import GameCard from './GameCard'


class GameCardContainer extends React.Component {
    
    render (){
        return (
            <div>
            <h3>Game Card Container</h3>
            {/* {this.props.newReleases.map(game => <GameCard gameObj={game} />)} */}
            </div>
        )
    }
}

export default GameCardContainer;