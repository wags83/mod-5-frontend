import React from 'react';
import { Input, Box } from '@chakra-ui/core'

class SearchBox extends React.Component {
    
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
                Filter results by search term:
                <Input
                    name="searchTerm"
                    type="text"
                    placeholder='Search Games'
                    onChange={this.props.handleSearchChange}
                ></Input>
           </Box>  
        )
    }
}

export default SearchBox;