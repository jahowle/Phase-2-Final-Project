import '../App.css';
import MainContent from './MainContent';
import Login from './Login';
import Sidebar from './Sidebar';
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from 'react';

function App() {

  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState("jonny howle")

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((r) => r.json())
      .then((data) => setTweets(data))
  }, [])

  function updateTweets(newTweet) {
    setTweets([...tweets, newTweet])
  }

  function updateUser(newUser) {
    setUser(newUser)
  }

  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <MainContent tweets={tweets} user={user} updateTweets={updateTweets}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
