import React from 'react';
import { API_BASE }  from '../constants'
import InfoCard from './InfoCard';
import CommentContainer from './CommentContainer'
import { Flex } from "@chakra-ui/core";

class GameContainer extends React.Component {
    state = {
        gameObj: {}
    }

    componentDidMount () {
        let id = this.props.match.params.id
        fetch(`${API_BASE}games/${id}`)
        .then(resp => resp.json())
        .then(gameObj => this.setState({ gameObj }))
    }

    likeGame = () => {
        let id = this.props.match.params.id
        const configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }, 
              body: JSON.stringify({
                user_id: this.props.validated.id, 
                name: this.state.gameObj.name,
                image: this.state.gameObj.background_image

            })
            }
            fetch(`${API_BASE}liked_games/like_game/${id}`, configObj)
            .then(resp => resp.json())
            .then(result => console.log(result))
        }

    render (){
        let api_id = this.props.match.params.id
        return (
            <Flex flexDirection="column" bg="#7251f0">
                <InfoCard gameObj={this.state.gameObj} likeGame={this.likeGame}/>
                <CommentContainer api_id={api_id} gameObj={this.state.gameObj} validated={this.props.validated}/>
            </Flex>
        )
    }
}

export default GameContainer;