import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state) => (
  { 
  errors: state.errors.session, 
  currentUser: state.session.currentUser
  }
);

const mapDispatchToProps = (dispatch) => (
   { 
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())  
   }
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);