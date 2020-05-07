import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image } from "@chakra-ui/core";

class GameCard extends React.Component {

     renderGameCard = () => {

        return (
            <Link to={`/games/${this.props.gameObj.id}`}>
            <Box maxW="350px" borderWidth="1px" rounded="lg" overflow="hidden" margin='5px' bg='#FFF'>
              <Image 
              height='200px'
              width='350px'
              src={this.props.gameObj.background_image} 
              alt='game background image' />
        
              <Box p="2">
        
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  textTransform="uppercase"
                  isTruncated='true'
                  white-space='nowrap'
                  overflow='hidden'
                  text-overflow='ellipsis'
                  maxW="sm"
                >
                  {this.props.gameObj.name}
                </Box>
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {this.props.gameObj.rating} Stars
                  </Box>
                </Box>
              </Box>
              </Link>
          );
        }
 
    render (){
        return (
            <div>{this.renderGameCard()}</div>
            // <div className='game-card'>
            //     <Link to={`/games/${this.props.gameObj.id}`}><h3>{this.props.gameObj.name}</h3></Link>
            //     <img className='game-thumbnail' src={this.props.gameObj.background_image} alt="game background"/>
            //     <h3>Rating: {this.props.gameObj.rating}</h3>
            // </div>
        )
    }
}

export default GameCard;