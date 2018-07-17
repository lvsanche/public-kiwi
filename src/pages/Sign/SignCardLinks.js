import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

export const SignUpLink = () =>
    <div className="flex-container link-container">
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </div>

export const SignInLink = () =>
    <div className="flex-container link-container footer">
        Already a member?
        {'   '}
        <Link to={routes.SIGN_IN}>Sign In</Link>
    </div>

export const RememberSignInLink = () =>
    <div className="link-container flex-container footer">
        <Link to={routes.SIGN_IN}>Brilliance! Just remembered...</Link>
    </div>


export const PasswordForgetLink = () =>
    <div className="link-container">
        <Link to="/pw-forget">Forgot Password?</Link>
    </div>
  