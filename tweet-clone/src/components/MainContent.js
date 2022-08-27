import React from "react";
import NewTweet from "./NewTweet";

function MainContent() {
    return(
        <div className="main-content-container">
            <div id="main-feed-column">
                <h1 id="app-title">Tweet Clone</h1>
                <NewTweet />
            </div>
        </div>
    )
}

export default MainContent