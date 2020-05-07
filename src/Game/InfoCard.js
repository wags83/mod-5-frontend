import React from 'react';
import { Flex, Text, Box, Button, Image } from "@chakra-ui/core";

class InfoCard extends React.Component {

    render (){
        return (
            <Flex flexDirection='column' align='center'>
                <Box borderWidth="1px" rounded="lg"  margin='5px' bg='#fff'>
                    <Box margin='5px'>
                        <Text fontSize='24pt'>{this.props.gameObj.name}</Text>
                        <img className='game-background' src={this.props.gameObj.background_image} alt="game background"/>
                    </Box>
                </Box>
                <Flex flexDirection='row'>
                    <Flex flexDirection='column' minW='45%' maxW='50%' borderWidth="1px" rounded="lg"  margin='5px' bg='#fff'>
                        <Box margin='5px' >
                        <Text fontSize='24pt'>Trailer</Text>
                            {this.props.gameObj.clip ? <video src={this.props.gameObj.clip.clip} controls/> : <Text fontSize='18pt'>Sorry, no trailer available</Text>}
                        </Box>
                    </Flex>
                    <Flex flexDirection='column' maxW='50%' borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' align='center'>
                        <Box margin='5px'>
                            <Text fontSize='24pt'>Description</Text>
                            {this.props.gameObj.description_raw}
                        </Box>
                        <Flex flexDirection='row' justifyContent='space-between' mx='20px' fontWeight='bold'>
                            <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' padding='5px' align='center' justify='center' flexDirection='column'>
                                <Image src='https://i.imgur.com/3wkFJww.jpg' size='50px' alt='star'/>
                                Rating: {this.props.gameObj.rating}
                            </Flex>
                            <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' padding='5px' align='center' justify='center' flexDirection='column'>
                                <Image src='https://imgur.com/nWCWPOJ.jpg' size='50px' alt='console'/>
                                Platforms: {this.props.gameObj.platforms ? this.props.gameObj.platforms.map(platform => `${platform.platform.name} `) : null}
                            </Flex>
                            <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' padding='5px' align='center' justify='center' flexDirection='column'>
                                <Image src='https://i.imgur.com/8yKtd84.jpg' size='50px' alt='genre'/>
                                Genres: {this.props.gameObj.genres ? this.props.gameObj.genres.map(genre => `${genre.name} `) : null}
                            </Flex>
                        </Flex>
                        <Button width='100px' m='10px' onClick={this.props.likeGame}>Like Game</Button>
                    </Flex>
                </Flex>


            </Flex>
            
        )
    }
}

export default InfoCard;