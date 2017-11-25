import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import Signin from './signin';

const mapStateToProps = (state) => (
  { 
  errors: state.errors.session 
  }
);


const mapDispatchToProps = (dispatch) => (
  { 
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())  
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Signin);