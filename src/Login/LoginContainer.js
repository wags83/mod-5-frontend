import React from 'react';
import LoginForm from '../Login/LoginForm'
import SignupForm from '../Login/SignupForm'
import { Flex, Text, Button } from '@chakra-ui/core'

class LoginContainer extends React.Component {
    state = {
        logInForm: true
    }

    handleToLogIn = () => 
        <div>
            <LoginForm handleLoginOnChange={this.props.handleLoginOnChange} stateProps={this.props.stateProps} handleSignin={this.props.handleSignin} {...this.props}/>
        </div>
    
    hanleToSignUp = () => 
        <div>
            <SignupForm stateProps={this.props.stateProps} handleSignupOnChange={this.props.handleSignupOnChange} handleCreateNewUser={this.props.handleCreateNewUser} {...this.props}/>
        </div>
    
    handleFormType = () => {
        this.setState(prevState => ({logInForm: !prevState.logInForm}))
    }

    render() {
        return (
            <div>
                <Flex display="flex" flexDirection="column" align="center" justify="top"  bg='#7251f0' size="100%" height="1000px">
                    <Flex width="30%" borderWidth="1px" rounded="lg" margin="10px" bg='darkgrey' algin="center" justify="center">
                    {this.state.logInForm ? this.handleToLogIn() : this.hanleToSignUp()}
                    </Flex>

                    <Flex align="center" width="30%" borderWidth="1px" rounded="lg" margin="10px" bg='lightgrey' justify="center">
                        {this.state.logInForm ? 
                        <><Text>Don't have an account yet? </Text>
                        <Button m='5px' onClick={this.handleFormType} className="btn"> Sign up</Button></> :
                        <><Text>Already have an account? </Text><Button m='5px' onClick={this.handleFormType} className="btn">Sign in</Button></>}
                    </Flex>
                </Flex>
             </div>
        )
    }
}

// Don't have an account yet?
// <Button m='5px' onClick={this.handleFormType} className="btn">{this.state.logInForm ? 'Sign up' : 'Sign in'}</Button>

export default LoginContainer;