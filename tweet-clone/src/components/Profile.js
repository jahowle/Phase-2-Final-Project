import React, {useEffect} from "react";
import Tweet from "./Tweet";

function Profile({userTweets, user}) {


    const tweetsToDisplay = userTweets.map((tweet) => {
        return <Tweet key={tweet.id} username={tweet.user} content={tweet.content}/>
    })

    return(
        <div className="main-content-container">
            <div className="centered-column">
            <h1>{user}'s Profile</h1>
            {tweetsToDisplay}
            </div>
        </div>
    )
}

export default Profile