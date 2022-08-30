import React from "react";

function Tweet({username, content,}) {
    return(
        <div className="tweet">
            <h3>{username}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Tweet