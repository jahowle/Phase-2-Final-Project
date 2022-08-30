import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return(
        <div className="sidebar">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/profile">
                Profile
            </NavLink>
        </div>
    )
}

export default Sidebar