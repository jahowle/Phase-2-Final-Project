import React, {useState} from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi"; 

function Tweet({username, content,}) {

    const [liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(!liked)
    }

    return(
        <div className="tweet">
            <h3>{username}</h3>
            <p>{content}</p>
            <div className="like-wrap">{liked ? <HiOutlineHeart onClick={handleLike}/> : <HiHeart onClick={handleLike} />} {liked ? 0 : 1}</div>
        </div>
    )
}

export default Tweet