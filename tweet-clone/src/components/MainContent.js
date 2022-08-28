import React from "react";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";

function MainContent({tweets, user, updateTweets}) {

    const tweetsToDisplay = tweets.map((tweet) => {
        return <Tweet key={tweet.id} username={tweet.user} content={tweet.content} likes={tweet.likes} />
    })

    return(
        <div className="main-content-container">
            <div id="main-feed-column">
                <h1 id="app-title">Tweet Clone</h1>
                <NewTweet user={user} updateTweets={updateTweets}/>
                {tweetsToDisplay}
            </div>
        </div>
    )
}

export default MainContent