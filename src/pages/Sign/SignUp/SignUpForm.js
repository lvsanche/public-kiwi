import React, { Component } from 'react';
import { auth, users } from '../../../services/api';
import * as routes from '../../../constants/routes';
import GenericTextInput from '../../SharedComponents/input/GenericTextInput';
import PasswordInput from '../../SharedComponents/input/PasswordInput';
import ErrorBanner from '../../SharedComponents/ErrorBanner';

const INITIAL_STATE = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        if( errorDetect(this.state) )
        {
            this.setState({error: errorMsg(this.state)})
        }
        else{
            const { firstName, lastName, passwordOne, email } = this.state;
            const { history } = this.props;

            auth.doCreateUserWithEmailAndPassword(email, passwordOne)
                .then(authUserReq => {
                    users.postNewUser(authUserReq.user.uid, firstName, lastName, email)
                    .then( () => {
                        this.setState({...INITIAL_STATE});
                        history.push(routes.DASHBOARD);
                    })
                    .catch( error => {
                        this.setState({error: 'User was not created: '+error.message});
                    });

                })
                .catch(error => {
                    this.setState({error: 'User not created: '+error.message});
                });
        }

        event.preventDefault();
    }

    handleChange(key){
        return (value) => this.setState({[key]: value})
    }

    render() {
        const { firstName, lastName, email,
            passwordOne, passwordTwo, error} = this.state;

        return(
            <form onSubmit={this.handleSubmit} >
                <ErrorBanner error={error}/>
                <div className="half-container">
                    <GenericTextInput
                        labelText={'First name'}
                        handleChange={this.handleChange('firstName')}
                        value={firstName}    
                    />
                    <GenericTextInput
                        labelText={'Last name'}
                        handleChange={this.handleChange('lastName')}
                        value={lastName}    
                    />
                </div>
                <GenericTextInput
                    labelText={'Email Address'}
                    handleChange={this.handleChange('email')}
                    value={email}
                />
                <PasswordInput
                    handleChange={this.handleChange('passwordOne')}
                    value={passwordOne}
                />
                <PasswordInput
                    labelText={'Confirm Password'}
                    handleChange={this.handleChange('passwordTwo')}
                    value={passwordTwo}
                />
                <div className="button-container flex-container">
                    <button type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        );
    }
}


const errorDetect = ({passwordOne, passwordTwo, email, firstName, lastName }) => {
    if( passwordOne !== passwordTwo || passwordOne === '' || 
        passwordTwo === '' || email === '' || firstName === '' || lastName === '' ){
        return true;
    }
    else {
        return false;
    }
}

const errorMsg = ({passwordOne, passwordTwo, email, firstName, lastName }) => {
    var errors = [];
    if( passwordOne !== passwordTwo){
        errors.push('Passwords do not match');
    }
    if (passwordOne === '' || passwordTwo === '')
    {   
        errors.push('Password fields are empty');
    }
    if ( email === '' ){
        errors.push('Email field is empty');
    }
    if (firstName === ''){
        errors.push('First name field is empty');
    }
    if (lastName === ''){
        errors.push('Last name field is empty');
    }

    if( errors ){
        return errors;
    }
    else{
        return false;
    }
} 

export default SignUpForm;