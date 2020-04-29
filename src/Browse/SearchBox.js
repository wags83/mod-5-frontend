
import React from 'react';
import GameCardContainer from '../Home/GameCardContainer'


const genres = ["Action", "Arcade", "Adventure", "Casual", "Family", "Fighting", "Indie", "Platformer", "Puzzle", "Racing", "RPG", "Shooter","Simulation", "Sports", "Strategy"]

class SearchBox extends React.Component {
    
    render (){
        return (
            <div>
                <h3>Search Box</h3>
                <input
                    name="searchTerm"
                    type="text"
                    placeholder='Search Games'
                    onChange={this.props.handleSearchChange}
                ></input>
            </div>  
        )
    }
}

export default SearchBox;