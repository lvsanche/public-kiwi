import React from 'react';
import PasswordForgetForm from './PasswordForgetForm';
import { RememberSignInLink } from '../SignCardLinks';
const PasswordForgetPage = () =>
  <div className="form-container card">
    <div className="card-title">
      <h2>Reset Password</h2>
    </div>
    <PasswordForgetForm />
    <RememberSignInLink />
  </div>

export default PasswordForgetPage;
