import React from 'react';
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './pages/Home'
import ShopPage from  './pages/shop/Shop'
import Header from './components/Header'
import LoginLogout from './pages/users/LoginLogout'
import {setCurrentUser} from './redux/actions/actions'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth()
  } 

  render() {
    return (
      <AppStyle>
        <Header />
  
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={LoginLogout}/>
        </Switch>
      </AppStyle>
    );
  }
}

const mdp = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mdp)(App);


const AppStyle = styled.div`
  font-family: 'Open Sans Condensed';
  padding: 20px 60px;
  a {
    text-decoration: none;
    color: black;
  }
  
  /* * {
    box-sizing: border-box;
  } */
`