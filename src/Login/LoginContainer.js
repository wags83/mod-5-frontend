import React from 'react';
import LoginForm from '../Login/LoginForm'
import SignupForm from '../Login/SignupForm'

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
                {this.state.logInForm ? this.handleToLogIn() : this.hanleToSignUp()}
        
                <div className='base-container' id='login-container-btn'>
                    <button onClick={this.handleFormType} className="btn">{this.state.logInForm ? 'Sign up' : 'Sign in'}</button>
                </div>

            </div>
        )
    }
}



export default LoginContainer;