import React, {useState} from "react";
import { useHistory } from "react-router-dom"

function Login({updateUser, updateLogin}) {
    const history = useHistory();
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
            history.push("/");
    }

    return(
        <div className="main-content-container">
            <div className="centered-column">
                <h1>Login</h1>
                <div className="form-wrap">
                    <form className="form" onSubmit={handleSubmit}>
                        <input className="input" onChange={handleLogin} type="text" placeholder="Enter Username">
                        </input>
                        <input className="submit-btn" type="submit">
                        </input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login