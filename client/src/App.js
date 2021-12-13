import { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Index/Home'
import GamePage from './components/pages/GameList/GamePage'
import GameDetails from './components/pages/GameDetails/GameDetailsPage'
import Navigation from './components/layout/Navigation/Navbar'
import SignupPage from './components/pages/Signup/SignupPage'
import LoginPage from './components/pages/Login/LoginPage'
import AuthService from './services/auth.service'
import Footer from './components/layout/Footer/Footer'
import UserPage from './components/pages/UserList/UserPage'
import UserProfile from './components/pages/UserProfile/UserProfile'
import MyProfile from './components/pages/UserProfile/MyProfile';
import GamePlay from './components/pages/GameList/GamePlay';
import ProtectedRoute from './components/ProtectedRoute';

const authService = new AuthService()

function App(props) {

  const [currentUser, setCurrentUser] = useState({ loggedUser: undefined });

  const { loggedUser } = currentUser

  useEffect(() => {
    authService
      .isloggedin()
      .then(response => storeUser(response.data))
      .catch(err => storeUser(null))
  }, []);

  const storeUser = (user) => {
    setCurrentUser({ ...currentUser, loggedUser: user })
  }

  return (
    <>
      <Navigation storeUser={storeUser} loggedUser={loggedUser} />
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />

          <Route path="/game-list" exact render={() => <GamePage />} />
          <Route path="/game/details/:id" render={(props) => <GameDetails {...props} />} />
          <Route path="/game/:id" render={(props) => <GamePlay {...props} />} />

          <Route path="/user-list" render={() => <UserPage />} />
          <Route path="/profile/:id" render={(props) => <UserProfile {...props} />} />
          <Route path="/my-profile" render={(props) => <MyProfile {...props} />} />
          
          {loggedUser ?
            <Redirect to="/" />
            :
            <>
              <Route path="/signup" render={(props) => <SignupPage {...props} storeUser={storeUser} />} />
              <Route path="/login" render={(props) => <LoginPage {...props} storeUser={storeUser} />} />
              <ProtectedRoute exact path="/logout" />
            </>
          }

        </Switch>
      </main>
      <Footer />
    </>
  )

}

export default App;