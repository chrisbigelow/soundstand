import React from 'react';

import { withRouter } from 'react-router-dom';

class EditUser extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.username);
    this.setState({ name: undefined, location: undefined})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.props.fetchUser(nextProps.match.params.username);
    }
  }


  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[username]", this.props.match.params.username);
    formData.append("user[name]", this.state.name);
    formData.append("user[location]", this.state.location);
    formData.append("user[profile_image]", this.state.profileFile);
    this.props.updateUser(formData).then((data) => this.props.history.push(`/users/${this.props.match.params.username}`));
  }


  update(property) {
    return event => this.setState({ [property]: event.target.value });
  }

  fileUpload(field){
    return (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.currentTarget.files[0];

      let that = this;
      let fieldURL = `${field}URL`;
      let fieldFile = `${field}File`;

      reader.onloadend = function() {
        that.setState({[fieldURL]: reader.result, [fieldFile]: file});
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({[fieldURL]: "", [fieldFile]: null});
      }
    };
  }

  render() {

    const user = Object.values(this.props.users)[0];

    if (!user) return null;


    return (
      <section>
        
        <form className="session-form" onSubmit={this.handleSubmit}>
          <ul>
            <li><h1>Edit User Profile</h1></li>
            <li><label>Name:</label></li>
            <li><input
              className="session-inputs" 
              type="text"
              placeholder={user.name}
              onChange={this.update('name')}
            /></li>
            <li><label>Location:</label></li>
            <li><input
              className="session-inputs"  
              type="text"
              placeholder={user.location}
              onChange={this.update('location')}
            /></li>
            <li><label>User Image:</label></li>
            <li><input
            type="file"
            onChange={this.fileUpload("profile")}
            /></li>
            <li><button className="session-button sign-up-mod">Update User Profile</button></li>
          </ul>
        </form>
      </section>
    );
  }

}

export default withRouter(EditUser);