import React from 'react';


class SignupForm extends React.Component { 
    state = {

    }
     
    render() {
        const history = this.props.history
        
        return (
            <div className="base-container" >
                    <form className="form" onSubmit={e => this.props.handleCreateNewUser(e, history)}>
                        <div className="header">Sign up</div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type='text' name='username' value={this.props.stateProps.signup.username} onChange={e => this.props.handleSignupOnChange(e)} placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type='password' name='password' value={this.props.stateProps.signup.password} onChange={e => this.props.handleSignupOnChange(e)} placeholder="password" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type='text' name='email' value={this.props.stateProps.signup.email} onChange={e => this.props.handleSignupOnChange(e)} placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label>Bio</label>
                            <input type='text' name='bio' value={this.props.stateProps.signup.username} onChange={e => this.props.handleSignupOnChange(e)} placeholder="bio"/>
                        </div>
                        <div className="form-group">
                            <label>Avatar URL</label>
                            <input type='text' name='avatar_url' value={this.props.stateProps.signup.username} onChange={e => this.props.handleSignupOnChange(e)} placeholder="avatar_url"/>
                        </div>
                        <div className="footer">
                            <button type='submit' className="btn">Sign up</button>
                        </div>
                    </form>
                </div>
        )
    }

}

export default SignupForm;