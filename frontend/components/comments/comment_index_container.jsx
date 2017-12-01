import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import React from 'react';

const mapStateToProps = (state) => (
{ 
  currentUser: state.session.currentUser,
  errors: state.errors.commentForm,
  comments: Object.values(state.entities.comments)
}
);

const mapDispatchToProps = (dispatch) => (
   { 
    fetchComments: (songId) => dispatch(fetchComments(songId)),
    deleteComment: (id) => dispatch(deleteComment(id))
   }
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);