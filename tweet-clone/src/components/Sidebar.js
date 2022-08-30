import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return(
        <div className="sidebar">
            <NavLink to="/" exact>
                Home
            </NavLink>
            <NavLink to="/login" exact>
                Login
            </NavLink>
            <NavLink to="/profile" exact>
                Profile
            </NavLink>
        </div>
    )
}

export default Sidebar