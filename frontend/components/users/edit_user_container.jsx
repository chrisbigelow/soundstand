import { connect } from 'react-redux';

import EditUser from './edit_user';
import { updateUser, fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => (
  {
    users: state.entities.users
  }
);

const mapDisptachToProps = (dispatch) => (
  {
    fetchUser: (username) => dispatch(fetchUser(username)),
    updateUser: (user) => dispatch(updateUser(user))
  }
);

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(EditUser);