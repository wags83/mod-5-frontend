import React from 'react';
import { Input, Text, Flex, Button } from "@chakra-ui/core";

class CommentForm extends React.Component {

    render (){
        return (
            <Flex flexDirection='column' align='center'>
                <Text fontSize='24pt'>Leave a comment</Text>
                <Flex>
                    <form >
                        <label>
                        Title: 
                        </label>
                        <Input 
                        isFullWidth
                        type="text" 
                        name='title' 
                        value={this.props.title} 
                        onChange={this.props.handleChange} />
                        <label>
                        Content: 
                        </label> 
                        <Input 
                        type="text" 
                        name='content' 
                        value={this.props.content}
                        onChange={this.props.handleChange}/>
                        <Button m='10px' className='btn' onClick={this.props.addComment}>Submit Comment</Button> 
                    </form>
                </Flex>
        </Flex>
        )
    }
}

export default CommentForm;