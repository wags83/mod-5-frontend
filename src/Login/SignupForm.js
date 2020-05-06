import React from 'react';
import { Input, Text, Button } from "@chakra-ui/core";


class SignupForm extends React.Component { 
    state = {

    }
     
    render() {
        const history = this.props.history
        
        return (
                    <form className="form" onSubmit={e => this.props.handleCreateNewUser(e, history)}>
                        <Text fontSize='2em'>Sign Up</Text>
                            <label>Username</label>
                            <Input type='text' name='username' value={this.props.stateProps.signup.username} onChange={e => this.props.handleSignupOnChange(e)} placeholder="username"/>

                            <label>Password</label>
                            <Input type='password' name='password' value={this.props.stateProps.signup.password} onChange={e => this.props.handleSignupOnChange(e)} placeholder="password" />

                            <label>Email</label>
                            <Input type='text' name='email' value={this.props.stateProps.signup.email} onChange={e => this.props.handleSignupOnChange(e)} placeholder="email"/>

                            <label>Bio</label>
                            <Input type='text' name='bio' value={this.props.stateProps.signup.username} onChange={e => this.props.handleSignupOnChange(e)} placeholder="bio"/>

                            <label>Avatar URL</label>
                            <Input type='text' name='avatar_url' value={this.props.stateProps.signup.username} onChange={e => this.props.handleSignupOnChange(e)} placeholder="avatar_url"/>


                            <Button m='5px' type='submit' className="btn">Sign up</Button>
                    </form>

        )
    }

}

export default SignupForm;