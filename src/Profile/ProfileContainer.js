import React from 'react';
import { API_BASE }  from '../constants'
import ProfileInfo from './ProfileInfo'
import FollowerContainer from './FollowerContainer'
import LikedGamesContainer from './LikedGamesContainer'
import { Flex, Button } from '@chakra-ui/core'

class ProfileContainer extends React.Component {
    
    state = {
        user: {},
        follower: [],
        likedGames: []
        
    }

    componentDidMount () {
        let id = this.props.match.params.id
        fetch(`${API_BASE}users/${id}`)
        .then(resp => resp.json())
        .then(user => this.setState( {user} ))

        fetch(`${API_BASE}followers`)
        .then(resp => resp.json())
        .then(follower => this.setState({ follower }))

        fetch(`${API_BASE}liked_games`)
        .then(resp => resp.json())
        .then(likedGames => this.setState({ likedGames }))
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
        let id = this.props.match.params.id
        fetch(`${API_BASE}users/${id}`)
        .then(resp => resp.json())
        .then(user => this.setState( {user} ))
        }
    }

    followUser = () => {
        let id = this.props.match.params.id
        const configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({user_id: this.props.validated.id, follower_id: id })
            }
            fetch(`${API_BASE}followers`, configObj)
            .then(resp => resp.json())
            .then(result => this.setState({follower: [...this.state.follower, result]}))
        }

    render (){
        let id = this.props.match.params.id
        let displayFollower = this.state.follower.filter(follower => parseInt(follower.follower_id) === parseInt(id))
        let displayLikedGames = this.state.likedGames.filter(likedGame => parseInt(likedGame.user_id) === parseInt(id))
        return (
            <Flex flexDirection='column' bg="#7251f0" height='100%' align='center'>
                <ProfileInfo user={this.state.user}/>
                <Button width='150px' margin='10px' onClick={this.followUser} className="follow-button">Follow User</Button>
                <Flex flexDirection='row'>
                    <LikedGamesContainer displayLikedGames={displayLikedGames} />
                    <FollowerContainer displayFollower={displayFollower}/>
                </Flex>
            </Flex>
        )
    }
}

export default ProfileContainer;