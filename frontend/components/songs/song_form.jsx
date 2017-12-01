import React from 'react';

import { withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading';

class SongForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: '',
      imageURL: '',
      songURL: '',
      songFile: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.startLoad();

    const formData = new FormData();

    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    formData.append("song[song_image]", this.state.imageFile);
    formData.append("song[song]", this.state.songFile);
    this.props.createSong(formData).then((data) => this.props.history.push('/songs'));
    // this.props.createSong(this.state).then(data => this.props.history.push('/songs'));  
    // /${data.songs.id} if you want to go to the show page
  }

  // handleUpload(e) {
  //   return event => this.setState
  // }

  update(property) {
    return event => this.setState({ [property]: event.target.value });
  }


  renderErrors() {
    console.log(this.props.errors);
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
    return (
      this.props.loading ?
      <ul>
        <li><LoadingIcon /></li> 
      </ul>
      :
      <section>
        
        <form className="session-form" onSubmit={this.handleSubmit}>
          <ul>
            <li><h1>Upload a Song</h1></li>
            <li className="rendered-errors">{this.renderErrors()}</li>
            <li><input 
              type="text"
              className="session-inputs" 
              value={this.state.title}
              placeholder="Song Title"
              onChange={this.update('title')}
            /></li>
            <li><input 
              type="text"
              className="session-inputs" 
              value={this.state.description}
              placeholder="Song Description"
              onChange={this.update('description')}
            /></li>
            
            <li><label>Song File:</label></li>
            <li><input
              type="file"
              onChange={this.fileUpload("song")}
            /></li>
            

            <li><label>Song Image:</label></li>
            <li><input
              type="file"
              onChange={this.fileUpload("image")}
            /></li>
          
            <li><button className="session-button sign-up-mod">Upload Song</button></li>
          </ul>
        </form>
      </section>
    );
  }
}
export default withRouter(SongForm);