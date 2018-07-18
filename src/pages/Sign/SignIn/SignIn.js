import React from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink, PasswordForgetLink } from '../SignCardLinks';
import SignInForm from './SignInForm';


const SignInContainer = ({history}) =>
  <div className="card">
    <div className="card-title">
      <h2>Sign In</h2>
    </div>
    <SignInForm history={history}/>
    <div className="flex-container-cols footer">
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </div>



export default withRouter(SignInContainer);
