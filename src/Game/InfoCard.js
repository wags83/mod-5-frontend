import React from 'react';


class InfoCard extends React.Component {

    render (){
        return (
            <div>
                <h3>{this.props.gameObj.name}</h3>
                <img className='game-thumbnail' src={this.props.gameObj.background_image} alt="game background"/>
                <p>{this.props.gameObj.description_raw}</p>
                <p>Rating: {this.props.gameObj.rating}</p>
                <p>Platforms: {this.props.gameObj.platforms ? this.props.gameObj.platforms.map(platform => platform.platform.name) : null}</p>
                <p>Genres: {this.props.gameObj.genres ? this.props.gameObj.genres.map(genre => `${genre.name} `) : null}</p>
                {this.props.gameObj.clip ? <video src={this.props.gameObj.clip.clip} controls/> : null}
            </div>
            
        )
    }
}

export default InfoCard;