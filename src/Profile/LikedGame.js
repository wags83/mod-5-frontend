import React from 'react';

class LikedGame extends React.Component {

    render (){
        return (
            <div>
                <h3>Liked Game Card</h3>
                <p>{this.props.likedGame.game.name}</p>
                <img className='game-thumbnail'src={this.props.likedGame.game.art_url} alt="game box art"/>
            </div>
        )
    }
}

export default LikedGame;