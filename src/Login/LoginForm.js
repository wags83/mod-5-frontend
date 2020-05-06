import React from 'react';
import { Input, Box, Text, Button } from "@chakra-ui/core";


const LoginForm = (props) => {
    let history = props.history

    return (
                <form isFullWidth='true' className="form" onSubmit={(e) => props.handleSignin(e, history)}>
                    <Text fontSize='2em'>Login</Text>
                        <label>Username</label>
                        <Input m='5px'isFullWidth="true" type='text' name='username' value={props.stateProps.username} onChange={e => props.handleLoginOnChange(e)} placeholder="username"/>
                        <label>Password</label>
                        <Input mx='5px' type='password' name='password' value={props.stateProps.password} onChange={e => props.handleLoginOnChange(e)} placeholder="password"/>
                        <Button m='5px' type='submit' className="btn">Sign in</Button>
                </form>

    )
}

export default LoginForm;