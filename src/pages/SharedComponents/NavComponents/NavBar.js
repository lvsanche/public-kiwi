import React from 'react';
import './NavBar.css';
import { auth } from '../../../services/api';

const NavBar = ({links, teacherName}) =>
  <div className="navbar">
    <nav>
      <h2 id="navbar-title"><strong>Welcome {teacherName.split(' ')[1]}!</strong></h2>
      {links}
      <p className="nav-link" onClick={auth.doSignOut}>Sign Out</p>
    </nav>
  </div>

export default NavBar;