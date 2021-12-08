import { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Home from './components/pages/Index/Home'
import GamePage from './components/pages/GameList/GamePage'
import GameDetails from './components/pages/GameDetails/GameDetailsPage'
import Navigation from './components/layout/Navigation/Navbar'
import SignupPage from './components/pages/Signup/SignupPage'
import LoginPage from './components/pages/Login/LoginPage'
import AuthService from './services/auth.service'
import Footer from './components/layout/Footer/Footer'
import ReviewPage from './components/pages/ReviewList/ReviewPage'
import UserPage from './components/pages/UserList/UserPage'
import UserProfile from './components/pages/UserProfile/UserProfile'
import MyProfile from './components/pages/UserProfile/MyProfile';
import GamePlay from './components/pages/GameList/GamePlay';
import SearchBar from './components/layout/SearchBar/SearchBar';




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedUser: undefined
    }

    this.authService = new AuthService()
  }

  componentDidMount() {
    this.authService.isloggedin()
      .then(response => this.storeUser(response.data))
      .catch(err => this.storeUser(null))
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user })
  }







  render() {
    return (
      <>

        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/game-list" exact render={() => <GamePage />} />
            <Route path="/game/details/:id" render={(props) => <GameDetails {...props} />} />
            <Route path="/game/:id" render={(props) => <GamePlay {...props} />} />


            <Route path="/user-list" render={() => <UserPage />} />

            <Route path="/profile/:id" render={(props) => <UserProfile {...props} />} />

            <Route path="/my-profile" render={(props) => <MyProfile {...props}/>} />





            {this.state.loggedUser ?
              <Redirect to="game-list" />
              :
              <>
                <Route path="/signup" render={(props) => <SignupPage {...props} storeUser={this.storeUser} />} />
                <Route path="/login" render={(props) => <LoginPage {...props} storeUser={this.storeUser} />} />
              </>
            }
          </Switch>
        </main>

        <Footer />
      </>
    )
  }
}

export default App;







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
