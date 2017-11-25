import React from 'react';

class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const userParams = this.state;
    this.props.login({user: userParams}).then(() => this.props.history.push('/songs'));

  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }


  render () {
    return (
      <div className="session-form">
        <h2>Sign In</h2>
        {this.renderErrors()}
        <form>
          <label className="form-label">username
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>
          <label className="form-label">password
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button onClick={this.handleSubmit}>Sign In</button>
        </form>
      
      </div>
    );
  }

}

export default Signin;