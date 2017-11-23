import React from 'react';
import Navbar from './nav_bar';
import {connect} from 'react-redux';
import {logout, login} from '../../actions/session_actions';


const mapStateToProps = (state) => (
  {currentUser: state.session.currentUser}
); 

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
