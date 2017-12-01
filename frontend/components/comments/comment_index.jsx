import React from 'react';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.comments) return null;



    return (
      <div className="comments-index-container">
        <ul className="comment-index">
          {
            this.props.comments.map(comment => (
              <div key={`song${comment.id}`} className="comment-body">
                <p className="comment-user">{comment.username} said:</p>
                <p className="comment-text">{comment.body}</p>
              </div>
            ))
          }
        </ul>
      </div>
    );

  }
}

export default CommentsIndex;