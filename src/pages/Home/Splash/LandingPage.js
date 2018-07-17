import React from 'react'
import * as routes from '../../../constants/routes';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
    <div className="card">
        <div className="card-title">
            <h2>Welcome!</h2>
        </div>
        <div className="card-content">
            <div className="landingPage-content flex-container-cols">
                <h1>To do anything sign in or sign up</h1>
                <p>Really nice landing page is lower on the priority list</p>
                <div className="landingPage-links flex-container">
                    <NavLink className="btn-like" to={routes.SIGN_IN}>Sign In</NavLink>
                    <NavLink className="btn-like" to={routes.SIGN_UP}>Sign Up</NavLink>
                </div>
                
            </div>
        </div>
    </div>
);

export default LandingPage;
