import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { SignInLink } from '../SignCardLinks';

const SignUpPage = ({history}) =>
    <div className="form-container card">
        <div className="card-title">
            <h2>Sign Up</h2>
        </div>
        <SignUpForm history={history} />
        <SignInLink />
    </div>

export default withRouter(SignUpPage);
