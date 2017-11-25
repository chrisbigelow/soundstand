import React from 'react';

import { withRouter } from 'react-router-dom';

class SongForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      imageFile: undefined,
      imageURL: undefined,
      songURL: undefined,
      songFile: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

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
      <section>
        <h1>Upload a Song</h1>
        <form className="song-form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.title}
            placeholder="Song Title"
            onChange={this.update('title')}
          />
          <input 
            type="text"
            value={this.state.description}
            placeholder="Song Description"
            onChange={this.update('description')}
          />
          
          <label>Song:
          <input
            type="file"
            onChange={this.fileUpload("song")}
          />
          </label>

          <label>Song Image:
          <input
            type="file"
            onChange={this.fileUpload("image")}
          />
          </label>

          <button>Upload Song</button>
        </form>
      </section>
    );
  }
}
export default withRouter(SongForm);