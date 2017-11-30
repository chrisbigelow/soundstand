import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      song_id: this.props.songId,
      username: this.props.currentUser.username
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const commentParams = this.state;
    console.log(this.props);
    this.props.createComment({comment: commentParams});

  }


  render () {
    return (
      <div className="comment-form">
        <ul>
            <li>
            <form>
              <ul>
                <li><label className="form-label"></label></li>
                <li className= "comment-wrapper"><input
                    className="comment-input" 
                    type="text"
                    placeholder="Write a Comment"
                    value={this.state.body}
                    onChange={this.handleInput("body")}
                  /></li>
                
                <li><button className="session-button sign-up-mod comment-button" onClick={this.handleSubmit}>Comment</button></li>
              </ul>
            </form>
            </li>
          </ul>
        
      
      </div>
    );
  }

}

export default CommentForm;