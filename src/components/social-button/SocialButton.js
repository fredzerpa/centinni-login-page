import React from 'react';
import './SocialButton.scss';
import {ReactComponent as GoogleLogo} from '../../assets/google.svg';
import {ReactComponent as TwitterLogo} from '../../assets/twitter.svg';
import {ReactComponent as FacebookLogo} from '../../assets/facebook.svg';


const SocialButton = ({media}) => (
  <div className='logo-container'>
    {
      media === 'google' ? <GoogleLogo /> : media === 'twitter' ? <TwitterLogo /> : <FacebookLogo />
    }
    
  </div>
)

export default SocialButton;