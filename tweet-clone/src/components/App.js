import '../App.css';
import MainContent from './MainContent';
import Login from './Login';
import Sidebar from './Sidebar';
import Profile from './Profile';
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function App() {

  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState("")
  const [userId, setUserId] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userTweets, setUserTweets] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((r) => r.json())
      .then((data) => setTweets(data))
  }, [])

  function updateTweets(newTweet) {
    setTweets([...tweets, newTweet])
    setUserTweets([...userTweets, newTweet])
  }

  function updateUser(newUser, newUserId) {
    setUser(newUser)
    setUserId(newUserId)

  }

  function updateLogin() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="App">
      <Sidebar isLoggedIn={isLoggedIn}/>
      <Switch>
        <Route path="/login">
          <Login updateUser={updateUser} updateLogin={updateLogin}/>
        </Route>
        <Route path="/profile">
          <Profile userTweets={userTweets} user={user}/>
        </Route>
        <Route exact path="/">
          <MainContent tweets={tweets} user={user} updateTweets={updateTweets} userId={userId} isLoggedIn={isLoggedIn} userTweets={userTweets}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
