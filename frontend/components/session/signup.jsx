import React from 'react';
import { withRouter } from 'react-router';

class Signup extends React.Component {
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
    this.props.signup({user: userParams}).then(() => this.props.props.history.push('/songs'));

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
        <ul>
            <li><h2>Sign up and start listening today.</h2></li>
            <li className="rendered-errors">{this.renderErrors()}</li>
            <li>
            <form>
              <ul>
                <li><label className="form-label">Username:</label></li>
                <li><input
                    className="session-inputs" 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput("username")}
                  /></li>
                
                <li><label className="form-label">Password:</label></li>
                <li><input
                    className="session-inputs" 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                  /></li> 
                
                <li><button className="session-button sign-up-mod" onClick={this.handleSubmit}>Sign Up</button></li>
              </ul>
            </form>
            </li>
          </ul>
        
      
      </div>
    );
  }

}

export default Signup;