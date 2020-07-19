import React from 'react';
import './LoginButton.scss';

const LoginButton = ({onClick, label}) => (
  <button onClick={onClick} className='login-button'>
    {label}
  </button>
);

export default LoginButton;
