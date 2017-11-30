import React from 'react';
import { Link } from 'react-router-dom';
import getImageColor from '../../util/image_color';
import WaveSurfer from 'wavesurfer';
import CommentForm from '../comments/comment_form';
import CommentIndex from '../comments/comment_index';

class SongPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSongPlay = this.handleSongPlay.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchSong(this.props.match.params.songId);
    // this.props.getComments(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.songId !== nextProps.match.params.songId) {
      this.props.fetchSong(nextProps.match.params.songId);
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteSong(this.props.song.id);
  }


  handleSongPlay(e){
    e.preventDefault();
    this.props.addSongToQueue(this.props.song);
    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'black',
      progressColor: 'purple',
      barWidth: '2'
    });

    wavesurfer.load('http://res.cloudinary.com/dmzulpcul/video/upload/v1511938004/05_None_Of_It_bzco6h.mp3');
  }

  render(){
    const song = this.props.song;

    if (!song) return null;

    let editUser = (this.props.currentUser.id === song.user_id) ? 
    (<Link to={`/edit/${song.id}`}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>)
    :
    (<div></div>);


    return (
      <div className= "profile-container">

        <section className="user-profile">
          <div className="profile-header">
            <div className="info-section">
              <img src={song.song_image} className="song-image-profile"></img>
              <ul>
                <li>
                  <ul className="user-info">
                    <li>{song.title}</li>
                    <li className="page-description">{song.artist}</li>
                  </ul>
                </li>
                <li className="button-page-box">
                  <a className="play-button play-button-on-show" onClick={ this.handleSongPlay }><i className="fa fa-play" aria-hidden="true"></i></a>
                </li>
              </ul>
            </div>
            <div className="edit-section">
              {editUser}
            </div>
          </div>
        </section>
        <section className="comment-section">
          <div className="song-description">
            <p>Description: {song.description}</p>
          </div>
          <CommentForm songId={song.id} currentUser={this.props.currentUser} createComment={this.props.createComment}/>
          <CommentIndex currentUser={this.props.currentUser} comments={song.comments} />
        </section>
        
      </div>
        

    );
  }




}

export default SongPage;