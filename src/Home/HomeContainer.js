import React from 'react';
import GameCardContainer from './GameCardContainer'
import { API_BASE }  from '../constants'
import { Link } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/core'

class HomeContainer extends React.Component {
   
    state = {
        newReleases: []
    }
    
    componentDidMount () {
        fetch(`${API_BASE}new_releases`)
        .then(resp => resp.json())
        .then(newReleases => this.setState({ newReleases: newReleases.results }))
    }

    render () {
        return (
            <div>
                <div>
                    <Image src='https://i.imgur.com/WvlgEp8.jpg' alt='welcome banner' width='100%' />
                </div>
                <Box
                    backgroundColor="#7251f0"
                    background-blend-mode="multiply">
                    <Box
                        fontWeight='bold'
                        fontSize='24pt'
                        color='white'
                        >
                        New Releases:
                    </Box>
                    <GameCardContainer gamesToDisplay={this.state.newReleases.slice(0,8)}/>
                </Box>
            </div>
        )
    }
}

export default HomeContainer;