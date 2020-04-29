import React from 'react';
import { Link } from 'react-router-dom';

class GameCard extends React.Component {
    render (){
        return (
            <div className='game-card'>
                <Link to={`/games/${this.props.gameObj.id}`}><h3>{this.props.gameObj.name}</h3></Link>
                <img className='game-thumbnail' src={this.props.gameObj.background_image} alt="game background"/>
                <h3>Rating: {this.props.gameObj.rating}</h3>
            </div>
        )
    }
}

export default GameCard;