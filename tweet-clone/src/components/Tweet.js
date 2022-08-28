import React from "react";

function Tweet({username, content, likes}) {
    return(
        <div className="tweet">
            <h3>{username}</h3>
            <p>{content}</p>
            <p>Likes: {likes}</p>
        </div>
    )
}

export default Tweet