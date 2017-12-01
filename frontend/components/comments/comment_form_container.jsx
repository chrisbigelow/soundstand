import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import React from 'react';

const mapStateToProps = (state) => {
return { 
  currentUser: state.session.currentUser,
  errors: state.errors.commentForm
};
};

const mapDispatchToProps = (dispatch) => (
   { 
    createComment: (comment, songId) => dispatch(createComment(comment, songId))
   }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);