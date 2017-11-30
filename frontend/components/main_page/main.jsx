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
    width                 : '500px',
    height                : '400px'
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
    let letsGo = this.props.currentUser ? (<div></div>) : (<li><button className="splash-button" onClick={this.openModal}>Lets Get Started</button></li>);

    return (
      <div className="main">
      <div className="hero-img-container">
        <div className="hero-img"></div>
        <ul className="center-this-stuff">
          <li><h1 className="splash-title">Spreading Love through Free Music</h1></li>
          {letsGo}
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
          <li className="signup-container"><SignupContainer props={this.props}/></li>
        </ul>
      </div>
      </Modal>


      <section className="sample-section">
        <div className="song-square a">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511938103/13_Smash_Your_Office_kijurr.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square b">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511938100/11_The_Path_czaoez.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square c">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511938097/15_Eraser_p7yrsb.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square d">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511938087/14_Fire_tpe7kd.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square e">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511938065/10_Nowhere_grr39p.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square f">
           <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511938051/09_Like_Air_brtpl0.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square g">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511937729/From_The_Dust_Stardust_Melodic_Glitch_from_Royalty_Free_Planet_y2rqxp.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square h">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511937755/Csus_-_Hip_hop_instrumental_qmfjix.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square i">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511937801/01_..._and_as_they_spoke_it_fell_apart_ywlwkg.mp3" type="audio/mpeg"/>
            </audio>
        </div>
        <div className="song-square j">
            <audio controls>
              <source src="http://res.cloudinary.com/dmzulpcul/video/upload/v1511937807/03_Burning_Walls_I_hksigc.mp3" type="audio/mpeg"/>
            </audio>
        </div>
      </section>
      <footer className="footer">
          <a href="http://chbigelow.com/"><i className="fa fa-male footer-icons" aria-hidden="true"></i></a>
          <a href="https://github.com/chrisbigelow"><i className="fa fa-github footer-icons" aria-hidden="true"></i></a>
          <a href="mailto:chris.bigelow@outlook.com"><i className="fa fa-envelope footer-icons" aria-hidden="true"></i></a>
          <p>Copyright © 2017 Chris Bigelow</p>
      </footer>
    </div>


    );
  }
}

export default Main;
