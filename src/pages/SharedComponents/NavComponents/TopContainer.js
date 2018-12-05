import React from 'react';
import { NavLink } from 'react-router-dom';
const TopContainerBar = ({path}) =>
    <div className="topbar">
        <NavLink className="logo" to={path}>SMS</NavLink>
    </div>

export default TopContainerBar;