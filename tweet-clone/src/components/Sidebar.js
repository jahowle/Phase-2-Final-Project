import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({isLoggedIn, handleLogout}) {
    return(
        <div className="sidebar">
            <button className="nav-button">
            <NavLink to="/" exact>
                Home
            </NavLink>
            </button>
           
            <button className="nav-button"> 
            {isLoggedIn ? 
                <NavLink onClick={handleLogout} to="/login" exact>
                    Logout
                </NavLink> : 
                <NavLink to="/login" exact>
                    Login</NavLink>    
            }
            </button>
           
           <button className="nav-button">
            <NavLink to="/profile" exact>
                Profile
            </NavLink>
            </button>
        </div>
    )
}

export default Sidebar