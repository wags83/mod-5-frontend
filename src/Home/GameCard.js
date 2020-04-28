import React from 'react';

class GameCard extends React.Component {
    render (){
        return (
            <div>
            <h3>Game Card </h3>
            <h3>{this.props.game.name}</h3>
            <img src={this.props.game.background_image} alt="game background"/>
            </div>
        )
    }
}

export default GameCard;