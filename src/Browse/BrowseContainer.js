import React from 'react';
import GameCardContainer from '../Home/GameCardContainer'
import Filter from './Filter'
import { API_BASE }  from '../constants'
import SearchBox from './SearchBox'
import { Flex, Box} from '@chakra-ui/core'

class BrowseContainer extends React.Component {
    
    state = {
        filteredGames: [],
        filterBy: 'action',
        searchTerm: ''
    }

    componentDidMount () {
        this.getGamesByGenre()
    }

     getGamesByGenre = () => {
        fetch(`https://api.rawg.io/api/games?genres=${this.state.filterBy}&ordering=-rating`)
        .then(resp => resp.json())
        .then(result => console.log(result))
        // .then(genreGames => this.setState({ filteredGames: genreGames.results }))   
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
            <div background="#7251f0">
            <Box
            fontWeight='bold'
            fontSize='24pt'
            color='white'
            backgroundColor="#7251f0"
            >
            Browse Games:
            </Box>
            <Flex className='browse-container' backgroundColor="#7251f0" flexDirection="flex">
                <Flex classname='filter-search-container' flexDirection="column" width="25%">
                    <Filter handleFilterChange={this.handleFilterChange} />
                    <SearchBox searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
                </Flex>
            <Flex maxW="75%">
                <GameCardContainer gamesToDisplay={gamesToDisplay} />
            </Flex>
            </Flex>
            </div>
        )
    }
}

export default BrowseContainer;