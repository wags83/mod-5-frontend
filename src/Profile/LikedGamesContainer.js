import React from 'react';
import LikedGame from './LikedGame'


class LikedGameContainer extends React.Component {

    render (){
        return (
            <div>
                <h3>Liked Game Container</h3>
                {this.props.displayLikedGames.map(likedGame=> <LikedGame likedGame={likedGame}/>)}
            </div>
        )
    }
}

export default LikedGameContainer;