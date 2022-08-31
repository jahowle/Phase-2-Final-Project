import React, {useState} from "react";

function NewTweet({user, updateTweets}) {

    const [post, setPost] = useState("")

    function handleSetPost(e) {
        setPost(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const newPost = {
            user: user,
            content: post,
        }

        fetch('http://localhost:3000/tweets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        })
            .then((r) => r.json())
            .then((post) => {
                updateTweets(post)
            })
        


    }

    return(
        <div className="form-wrap">
            <form className="form">
                <input onChange={handleSetPost} className="input" type="text" placeholder="Say something...">   
                </input>
                <input onClick={handleSubmit} className="submit-btn"  type="submit" value="Post"></input>
            </form>
        </div>
    )
}

export default NewTweet