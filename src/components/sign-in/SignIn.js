import React, { Component } from 'react';
import './SignIn.scss';
import LoginFormInput from '../login-form-input/LoginFormInput';
import SignInButton from '../sign-in-button/SignInButton';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>

        <form onSubmit={this.handleSubmit}>
          <LoginFormInput
            name='email'
            type='email'
            tabindex='1'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <LoginFormInput
            name='password'
            type='password'
            tabindex='2'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons'>
            <SignInButton label='Sign In'/>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
