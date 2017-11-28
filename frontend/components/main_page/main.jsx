import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignupContainer from '../session/signup_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '30%',
    height                : '50%'
  }
};

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="main">
      <div className="hero-img-container">
        <div className="hero-img"></div>
        <ul className="center-this-stuff">
          <li><h1 className="splash-title">Spreading Love through Free Music</h1></li>
          <li><button className="splash-button" onClick={this.openModal}>Lets Get Started</button></li>
        </ul>
      </div>

      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Sign Up Modal"
       >
      <div className="modal-container">
        <ul>
          <li className="x-button"><a onClick={this.closeModal}><i className="fa fa-times-circle" aria-hidden="true"></i></a></li>
          <li className="signup-container"><SignupContainer /></li>
        </ul>
      </div>
      </Modal>


      <section className="sample-section">
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
        <div className="song-square">
          Song
        </div>
      </section>
      <footer className="footer">
          <i className="fa fa-male footer-icons" aria-hidden="true"></i>
          <i className="fa fa-github footer-icons" aria-hidden="true"></i>
          <i className="fa fa-envelope footer-icons" aria-hidden="true"></i>
          <p>Copyright © 2017 Chris Bigelow</p>
      </footer>
    </div>


    );
  }
}

export default Main;
