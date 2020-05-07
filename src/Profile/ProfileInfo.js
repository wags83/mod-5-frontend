import React from 'react';
import { Image, Flex } from '@chakra-ui/core'


class ProfileInfo extends React.Component {
    
    render (){
        const {username, bio, avatar_url, favorite_genre, email} = this.props.user
        return (
            <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' >
                <Image rounded="full" size="250px" src={avatar_url} alt="user avatar" padding="25px"/>
                <Flex flexDirection='column' ml='25pt' >
                    <Flex fontSize='24pt'>{username}</Flex>
                    <Flex fontSize='18pt' fontStyle='italic'>{bio}</Flex>
                    <Flex flexDirection='row' mx='20px' fontWeight='bold'>
                        <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' padding='5px' align='center' justify='center' flexDirection='column'>
                                    <Image src='https://imgur.com/nWCWPOJ.jpg' size='50px' alt='star'/>
                                    Favorite Genre: <br></br> {favorite_genre}    
                        </Flex> 
                        <Flex borderWidth="1px" rounded="lg"  margin='5px' bg='#fff' padding='5px' align='center' justify='center' flexDirection='column'>
                                <Image src='https://i.imgur.com/YAYh17s.jpg' size='50px' alt='email'/>
                                Email: <br></br>{email}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        )
    }
}

export default ProfileInfo