import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import GenericTextInput from '../../SharedComponents/input/GenericTextInput';
import ErrorBanner from '../../SharedComponents/ErrorBanner';
import { auth } from '../../../services/api';

const INITIAL_STATE = {
    email: '',
    error: null,
  };
  
class PasswordForgetForm extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
    }
  
    handleSubmit(event){
        const { email } = this.state;
        const { history } = this.props;

        if( email === ''){
            this.setState({error: 'Email field is empty'})
        }
        else{
            auth.doPasswordReset(email)
            .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.SIGN_IN);
            })
            .catch(error => {
            this.setState({error: error.message});
            });
        }
        event.preventDefault();
    }
  
    handleEmailChange(value){
      this.setState({email: value})
    }
  
    render() {
      const { email, error } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <ErrorBanner error={error} />
          <GenericTextInput 
            handleChange={this.handleEmailChange}
            value={email}
            labelText={'Email Address'}
          />
          <div className="button-container flex-container">
            <button type="submit">Reset</button>
          </div>
        </form>
      );
    }
  }

export default withRouter(PasswordForgetForm);