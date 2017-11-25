import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state) => (
  { 
  errors: state.errors.session 
  }
);

const mapDispatchToProps = (dispatch) => (
   { 
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())  
   }
);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);



