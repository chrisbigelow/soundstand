import CommentItem from './comment_item';

import React from 'react';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComments(this.props.songId);
  }


  render() {

    if (!this.props.comments) return null;

    return (
      <div className="comments-index-container">
        <ul className="comment-index">
          {
            this.props.comments.reverse().map(comment => (
              < CommentItem key={`song${comment.id}`} deleteComment={this.props.deleteComment} comment={comment} currentUser={this.props.currentUser}/>
            ))
          }
        </ul>
      </div>
    );

  }
}

export default CommentsIndex;