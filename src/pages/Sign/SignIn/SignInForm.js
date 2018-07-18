import React, {Component} from 'react';
import { auth } from '../../../services/api';
import * as routes from '../../../constants/routes';
import GenericTextInput from '../../SharedComponents/input/GenericTextInput';
import ErrorBanner from '../../SharedComponents/ErrorBanner';
import PasswordInput from '../../SharedComponents/input/PasswordInput';


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
  

class SignInForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event){
      const {
        email,
        password,
      } = this.state;
  
      const {
        history,
      } = this.props;

      if( email === '' || password === '') {
          this.setState({ error: 'One or more of the fields are empty'})
      }
      else{
        auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          history.push(routes.DASHBOARD);
        })
        .catch(error => {
          this.setState({error: 'Issue logging in: '+error});
        });
      }
      event.preventDefault();
      
    }
  
    handleEmailChange(value){
      this.setState({email: value});
    }
  
    handlePasswordChange(value){
      this.setState({password: value})
    }
  
    render() {
        const { email, password, error} = this.state;
  
        return (
          <div className="form-container">
              <form onSubmit={event => event.preventDefault()}>
                  <ErrorBanner error={error}/>
                  <GenericTextInput
                      labelText={'Email Address'}
                      handleChange={this.handleEmailChange}
                      value={email}
                  />
                  <PasswordInput
                      handleChange={this.handlePasswordChange}
                      value={password}
                  />
              </form>
              <div className="button-container flex-container">
                      <button onClick={this.handleSubmit} type="submit">Sign In</button>
              </div>
          </div>
            
        
      );
    }
  }

  export default SignInForm;