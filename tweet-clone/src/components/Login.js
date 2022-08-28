import React from "react";

function Login() {
    return(
        <div className="main-content-container">
            <div className="centered-column">
                <h1>Login</h1>
                <div id="login">
                    <form>
                        <input type="text" placeholder="Enter Username">
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