import React, {useState} from "react";

function NewTweet({user}) {

    const [post, setPost] = useState("")

    function handleSetPost(e) {
        setPost(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newPost = {
            user: user,
            content: post,
            likes: 0
        }

        console.log("new post", newPost)

        fetch('http://localhost:3000/tweets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        })
            .then((r) => r.json())
            .then((post) => console.log(post))


    }

    return(
        <div id="new-tweet">
            <form>
                <input onChange={handleSetPost} id="tweet-input" type="text" placeholder="Say something...">   
                </input>
                <input onClick={handleSubmit} id="post-btn"  type="submit" value="Post"></input>
            </form>
        </div>
    )
}

export default NewTweet