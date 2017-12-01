import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(event) {
    event.preventDefault();
    if (this.props.currentUser.username === this.props.comment.username ) {
      this.props.deleteComment(this.props.comment.id);
    } else {
      alert("You cannot delete comment that isn't yours!");
    }
  }

  render() {

    const comment = this.props.comment;

    if (!comment) return null;

    return (
      <div className="comment-body">
        <ul>
          <li className="delete-x-comments"><a className="enabled" onClick={ this.handleDelete.bind(this) }><i className="fa fa-times" aria-hidden="true"></i></a></li>
          <li><p className="comment-user">{comment.username} said:</p></li>
          <li><p className="comment-text">{comment.body}</p></li>
        </ul>
      </div>
    );

  }
}

export default CommentItem;







 