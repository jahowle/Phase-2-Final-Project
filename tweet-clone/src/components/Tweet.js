import React from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi"; 

function Tweet({username, content,}) {
    return(
        <div className="tweet">
            <h3>{username}</h3>
            <p>{content}</p>
            <div className="like-wrap"><HiOutlineHeart /> 0</div>
        </div>
    )
}

export default Tweet