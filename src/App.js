import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import NavBar from './TopLevelComponents/NavBar';
import LoginContainer from './Login/LoginContainer';
import HomeContainer from './Home/HomeContainer'
import ProfileContainer from './Profile/ProfileContainer'
import BrowseContainer from './Browse/BrowseContainer'
import GameContainer from './Game/GameContainer'
import { API_BASE }  from './constants'

class App extends React.Component {

  state = {
    login: {    
      username: '',
      password: ''
    }, 
    validated: {
      id: 1
      }, 
    signup: {
      username: '', 
      password: '', 
      email: '',
      bio: '',
      avatar_url: ''   
      }
    }

  handleSignin = (e, history) => {
    e.preventDefault()

    fetch(`${API_BASE}users`)
    .then(response => response.json())
    .then(data => this.setState({
      validated: { ...data.find(user => ((user.username === this.state.login.username) && (user.password === this.state.login.password)))}
    }))
    .then(history.push('/home'))
  }

  handleCreateNewUser = (e, history) => {
    e.preventDefault()

    const obj = {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(this.state.signup)
    }

    fetch(`${API_BASE}users`, obj)
    .then(response => response.json())
    .then(data => {
      console.log('Success', data)
      this.setState({ validated: { data } })
    }, () => console.log(this.state.validated))
    .then(history.push('/home'))
    .catch(error => console.log('Error', error))
  }

  handleLoginOnChange = e => {
    this.setState({
      login: {...this.state.login, [e.target.name]: e.target.value}
    })
  }

handleLoginOnChange = e => {
  this.setState({
    login: {...this.state.login, [e.target.name]: e.target.value}
  })
}
  handleSignupOnChange = e => {
    this.setState({
      signup: { ...this.state.signup, [e.target.name]: e.target.value }
    })
  }

  render () {
    const stateProps = {...this.state}
  return (
    <div className="App">
        <NavBar validated={this.state.validated}/>
        <Switch>
        <Route path="/login" render={routerProps => <LoginContainer {...routerProps} 
            stateProps={stateProps}
            handleLoginOnChange={this.handleLoginOnChange} 
            handleSignin={this.handleSignin} 
            handleSignupOnChange={this.handleSignupOnChange}
            handleCreateNewUser={this.handleCreateNewUser}/>} 
            />
        <Route path="/home" render={routerProps => <HomeContainer {...routerProps} />}/>
        <Route path="/browse" render={routerProps => <BrowseContainer {...routerProps} />}/>
        <Route path="/games/:id" render={routerProps => <GameContainer {...routerProps} />}/>
        <Route path="/profiles/:id" render={routerProps => <ProfileContainer {...routerProps} />}/>
        </Switch>
    </div>
  );
  }
}

export default App;
