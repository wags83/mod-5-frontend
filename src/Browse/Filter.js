import React from 'react';
import { Select, Text, Box } from '@chakra-ui/core'

const genres = ["Action", "Arcade", "Adventure", "Casual", "Family", "Fighting", "Indie", "Platformer", "Puzzle", "Racing", "RPG", "Shooter","Simulation", "Sports", "Strategy"]

class Filter extends React.Component {
    
    render (){
        return (
                    <Box
                        maxW="sm" 
                        borderWidth="1px" 
                        rounded="lg" 
                        overflow="hidden" 
                        margin='5px' 
                        bg='darkgrey'
                        >
                        Filter by genre:
                        <Select 
                        name='filterBy' 
                        onChange={(event) => {this.props.handleFilterChange(event)}}>
                        {genres.map((genre) => <option key={genre} value={genre.toLowerCase()}>{genre}</option>)}
                        </Select>

                </Box>
        )
    }
}

export default Filter;