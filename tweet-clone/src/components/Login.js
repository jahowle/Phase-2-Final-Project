import React, {useState} from "react";
import { useHistory } from "react-router-dom"; 

function Login({updateUser, updateLogin}) {

    const [username, setUsername] = useState("")


    function handleLogin(e) {
        setUsername(e.target.value)
    }

    function handleSubmit(e) {

        e.preventDefault()

        const newUser = {
            username: username,
            tweets: 0
        }

        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then((r) => r.json())
            .then((data) => updateUser(data.username, data.id))

            updateLogin()
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