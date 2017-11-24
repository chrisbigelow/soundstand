import React from 'react';

import { withRouter } from 'react-router-dom';

class SongForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSong(this.state).then(data => this.props.history.push('/songs'));  
    // /${data.songs.id} if you want to go to the show page
  }

  update(property) {
    return event => this.setState({ [property]: event.target.value });
  }

  render() {
    return (
      <section>
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
          <button>Upload Song</button>
        </form>
      </section>
    );
  }
}
export default withRouter(SongForm);