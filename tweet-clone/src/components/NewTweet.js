import React, {useState} from "react";

function NewTweet({user}) {

    const [post, setPost] = useState("")

    function handleSetPost(e) {
        setPost(e.target.value)
    }

    function handleSubmit(tweet) {
        const newPost = {
            user: {user},
            content: {post},
            likes: 0
        }
    }

    return(
        <div id="new-tweet">
            <form>
                <input onChange={handleSetPost} id="tweet-input" type="text" placeholder="Say something...">   
                </input>
                <input id="post-btn"  type="submit" value="Post"></input>
            </form>
        </div>
    )
}

export default NewTweet