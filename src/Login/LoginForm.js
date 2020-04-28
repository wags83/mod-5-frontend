import React from 'react';

const LoginForm = (props) => {
    let history = props.history

    return (
        <div className="base-container" >
                <form className="form" onSubmit={(e) => props.handleSignin(e, history)}>
                    <div className="header">Login</div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type='text' name='username' value={props.stateProps.username} onChange={e => props.handleLoginOnChange(e)} placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type='password' name='password' value={props.stateProps.password} onChange={e => props.handleLoginOnChange(e)} placeholder="password"/>
                    </div>
                    <div className="footer">
                        <button type='submit' className="btn">Sign in</button>
                    </div>
                </form>
            </div>
    )
}

export default LoginForm;