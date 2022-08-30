import React, {useEffect} from "react";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
import { Redirect } from "react-router-dom";

function MainContent({tweets, user, userId, updateTweets, isLoggedIn, userTweets}) {

    useEffect(() => {

        const updatedArr = {
            tweets: userTweets
        }

        fetch(`http://localhost:3000/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedArr)
        })
            .then((r) => r.json())
            .then((data) => console.log(data))
    })

    if (!isLoggedIn) return <Redirect to="/login" />;

    const tweetsToDisplay = tweets.map((tweet) => {
        return <Tweet key={tweet.id} username={tweet.user} content={tweet.content} likes={tweet.likes} />
    })

    return(
        <div className="main-content-container">
            <div id="main-feed-column">
                <h1 id="app-title">Tweet Clone</h1>
                <h2>Welcome, {user}</h2>
                <NewTweet user={user} updateTweets={updateTweets} userId={userId}/>
                {tweetsToDisplay}
            </div>
        </div>
    )
}

export default MainContent