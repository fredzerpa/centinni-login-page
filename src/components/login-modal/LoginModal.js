import React from 'react';
import ReactModal from 'react-modal';
import './LoginModal.scss';
import SignIn from '../sign-in/SignIn';
import LoginButton from '../login-button/LoginButton';
import SocialButton from '../social-button/SocialButton';

const LoginModal = ({ isOpen, handleCloseModal }) => (
  <div className='main'>
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleCloseModal}
      className='login-modal'
    >
      <div className='modal-header'>
        <div className='logo'>
          <img
            width='50'
            src='./images/centinni-logo.png'
            alt='Centinni Logo'
          />
          <h2>Welcome to Centinni</h2>
          <p>Discover a new world with us</p>
        </div>
      </div>

      <div className='modal-body'>
        <div className='email-login'>
          <SignIn />
          <div className='extra-info'>
            <p>
              Don't have an account? <a href='#' className='create-account-link'>create account</a>
            </p>
          </div>
        </div>

        <div className='login-buttons'>
          <a href='#'>
            <SocialButton media='google' />
          </a>
          <a href='#'>
            <SocialButton media='facebook' />
          </a>
          <a href='#'>
            <SocialButton media='twitter' />
          </a>
        </div>
      </div>

      <div className='modal-footer'>
        <span className='copyright'>
          &copy; 2020 Centinni
          <i>|</i>
        </span>
        <span className='terms-and-policy'>
          <a href='#'>Terms of Service</a>
          <i>|</i>
          <a href='#'>Privacy Policy</a>
        </span>
      </div>
    </ReactModal>
  </div>
);

export default LoginModal;
