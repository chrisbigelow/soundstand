import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.perventDefault();
    this.props.signup(this.state).then(() => this.props.history.push('/'));

  }


  render () {
    return (
      <div className="session-form">
        <h2>Sign up and start listening</h2>
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
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      
      </div>
    );
  }

}

export default Signup;