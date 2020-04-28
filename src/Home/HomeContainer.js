import React from 'react';
import GameCardContainer from './GameCardContainer'
import { API_BASE }  from '../constants'

class HomeContainer extends React.Component {
    
    state = {
        newReleases: {}
    }
    
    componentDidMount () {
        fetch(`${API_BASE}new_releases`)
        .then(resp => resp.json())
        .then(newReleases => this.setState({ newReleases: newReleases.results }))
    }
    
    render () {
        return (
            <div>
            <h3>Home Container</h3>
            <GameCardContainer newReleases={this.state.newReleases} />
            </div>
        )
    }
}

export default HomeContainer;