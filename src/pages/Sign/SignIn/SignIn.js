import React from 'react';
import { SignUpLink, PasswordForgetLink } from '../SignCardLinks';
import SignInForm from './SignInForm';

const SignInContainer = () =>
    <div className="card card-30">
      <div className="card-title">
        <h2>Sign In</h2>
      </div>
      <SignInForm/>
      <div className="flex-container-cols footer">
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  



export default SignInContainer;
