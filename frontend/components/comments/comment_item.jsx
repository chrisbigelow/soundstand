import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {

    const comment = this.props.comment;

    if (!comment) return null;

    const isUserButton = (this.props.currentUser.username === comment.username ) ? "enabled" : "disabled";

    return (
      <div className="comment-body">
        <ul>
          <li className="delete-x-comments"><a className={isUserButton} onClick={ this.handleDelete.bind(this) }><i className="fa fa-times" aria-hidden="true"></i></a></li>
          <li><p className="comment-user">{comment.username} said:</p></li>
          <li><p className="comment-text">{comment.body}</p></li>
        </ul>
      </div>
    );

  }
}

export default CommentItem;







 