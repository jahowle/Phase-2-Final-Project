import React from "react";

function NewTweet() {
    return(
        <div id="new-tweet">
            <form>
                <input id="tweet-input" type="text" placeholder="Say something...">   
                </input>
                <input id="post-btn"  type="submit" value="Post"></input>
            </form>
        </div>
    )
}

export default NewTweet