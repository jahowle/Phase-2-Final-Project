import React from "react";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";

function MainContent() {
    return(
        <div className="main-content-container">
            <div id="main-feed-column">
                <h1 id="app-title">Tweet Clone</h1>
                <NewTweet />
                <Tweet />
            </div>
        </div>
    )
}

export default MainContent