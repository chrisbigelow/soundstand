import React from 'react';

import { withRouter } from 'react-router-dom';

class SongEdit extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  componentWillMount() {
    this.props.fetchSong(this.props.match.params.songId);
    this.setState({title: undefined, description: undefined});
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.songId !== nextProps.match.params.songId) {
      this.props.fetchSong(nextProps.match.params.songId);
    }
  }


  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("song[id]", this.props.match.params.songId);
    formData.append("song[song_file]", undefined);
    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    formData.append("song[song_image]", this.state.imageFile);
    this.props.updateSong(formData).then((data) => this.props.history.push('/songs'));
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


    const song = Object.values(this.props.songs)[0];

    if (!song) return null;

    return (
      <section>
        
        <form className="session-form" onSubmit={this.handleSubmit}>
          <ul>
          <li><h1>Edit Song</h1></li>
          <li><label>Song Title:</label></li>
          <li><input
            className="session-inputs"  
            type="text"
            placeholder={song.title}
            onChange={this.update('title')}
          /></li>
          <li><label>Song Description:</label></li>
          <li><input
            className="session-inputs" 
            type="text"
            placeholder={song.title}
            onChange={this.update('description')}
          /></li>
          

          <li><label>Song Image:</label></li>
          <li><input
            type="file"
            onChange={this.fileUpload("image")}
          />
          </li>

          <li><button className="session-button sign-up-mod">Update Song</button></li>
          </ul>
        </form>
      </section>
    );
  }

}

export default withRouter(SongEdit);