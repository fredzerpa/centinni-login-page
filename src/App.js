import React from 'react';
import './App.css';
import LoginModal from './components/login-modal/LoginModal';
import LoginButton from './components/login-button/LoginButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  handleOpenModal = () => {
    const bodySelector = document.body;
    bodySelector.style.overflow = 'hidden';
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = () => {
    const bodySelector = document.body;
    bodySelector.style.overflow = '';
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <LoginButton label='Log In' onClick={this.handleOpenModal} />
        
        <LoginModal isOpen={this.state.modalIsOpen} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}

export default App;
