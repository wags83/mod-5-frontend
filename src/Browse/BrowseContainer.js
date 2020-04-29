import React from 'react';
import GameCardContainer from '../Home/GameCardContainer'
import Filter from './Filter'
import { API_BASE }  from '../constants'
import SearchBox from './SearchBox'

class BrowseContainer extends React.Component {
    
    state = {
        filteredGames: [],
        filterBy: '',
        searchTerm: ''
    }

    componentDidMount () {
        fetch(`${API_BASE}new_releases`)
        .then(resp => resp.json())
        .then(newReleases => this.setState({ filteredGames: newReleases.results }))
    }

     getGamesByGenre = (event) => {
        fetch(`https://api.rawg.io/api/games?genres=${this.state.filterBy}&ordering=-rating`)
        .then(resp => resp.json())
        .then(genreGames => this.setState({ filteredGames: genreGames.results }))   
    }
    
    handleFilterChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        this.getGamesByGenre()
    }

    handleSearchChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render (){
        let gamesToDisplay = this.state.filteredGames.filter(game => game.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return (
            <div>
                <h3>Browse Container</h3>
                <SearchBox searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
                <Filter handleFilterChange={this.handleFilterChange} />
                <GameCardContainer gamesToDisplay={gamesToDisplay} />
            </div>
        )
    }
}

export default BrowseContainer;