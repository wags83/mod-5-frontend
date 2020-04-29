import React from 'react';


const genres = ["Action", "Arcade", "Adventure", "Casual", "Family", "Fighting", "Indie", "Platformer", "Puzzle", "Racing", "RPG", "Shooter","Simulation", "Sports", "Strategy"]

class Filter extends React.Component {
    
    render (){
        return (
            <div>
                <h3>Filter Box</h3>
                    <h1>Genres:</h1>
                    <div className="select">
                        <select 
                        name='filterBy' 
                        onChange={(event) => {this.props.handleFilterChange(event)}}>
                        {genres.map((genre) => <option key={genre} value={genre.toLowerCase()}>{genre}</option>)}
                        </select>
                    </div>  
                </div>
        )
    }
}

export default Filter;