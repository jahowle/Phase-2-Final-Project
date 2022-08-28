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





  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <MainContent tweets={tweets} user={user}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
