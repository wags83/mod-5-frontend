import React from 'react';
import GameCardContainer from './GameCardContainer'
import { API_BASE }  from '../constants'
import { Link } from 'react-router-dom';

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
                <h3>Home Container</h3>
                <Link to='/login'><h2>Login / Signup</h2></Link>
                <h2>New Releases:</h2>
                <GameCardContainer gamesToDisplay={this.state.newReleases}/>
            </div>
        )
    }
}

export default HomeContainer;