import React, {useState} from "react";

function Login() {

    const [username, setUsername] = useState("")


    function handleLogin(e) {
        setUsername(e.target.value)
    }

    function handleSubmit(e) {

        e.preventDefault()

        const newUser = {
            username: username,
            tweets: []
        }

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then((r) => r.json())
            .then((data) => console.log(data))
    }

    return(
        <div className="main-content-container">
            <div className="centered-column">
                <h1>Login</h1>
                <div id="login">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleLogin} type="text" placeholder="Enter Username">
                        </input>
                        <input type="submit">
                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login