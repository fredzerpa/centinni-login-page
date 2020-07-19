import React from 'react';
import './SignInButton.scss';

const SignInButton = ({label}) => (
  <button
    className='sign-in-button'
  >
    {label}
  </button>
)

export default SignInButton;