## SoundStand - Your repository for Copyright-free Music

**LIVE LINK:   https://soundstand.herokuapp.com/#/**

SoundStand is a clone of [soundcloud.com](https://soundcloud.com)

It features much of the functionality of SoundCloud including song uploads, user profiles, music streaming and comments.



### Functionality

- a user can look at all the songs available to stream, upload their own tracks, or comment on other user's tracks. - a user can add custom profile information such as their names, profile photos or locations.
- If a user makes a mistake in their profile or in a track upload, they have the option to edit these entries. They can also delete tracks if they are the owner of the track.

### Tech Stack

**TLDR:**<br>
**Backend:** Ruby on Rails<br>
**Frontend:** React/Redux

The backend is a rails application using PostgreSQL. API calls are made through AJAX requests from the frontend. Redux state is altered accordingly and this state is passed to the various components.

### Audio player with continuous play

The sight features an audio player that will stream continuously as you navigate the site. To play a song you simply click the play button on the songs index page or on the single song page. This adds the track to the playlist slice of state.

![alt text](http://res.cloudinary.com/dmzulpcul/image/upload/v1512165698/Screen_Shot_2017-12-01_at_1.58.45_PM_xe6aws.png)

I have also included a small pop up that you can toggle to view the current song info that is playing.

[![https://gyazo.com/25659ba1d247f5c1d846d4b6a367aac6](https://i.gyazo.com/25659ba1d247f5c1d846d4b6a367aac6.gif)](https://gyazo.com/25659ba1d247f5c1d846d4b6a367aac6)


### Song upload

Another challenging feature I implemented was mounting a loading icon component when the music file uploads to the site. To accomplish this I created a `START_LOADING` action that sets a formLoading slice of state to `true`.

My reducer also handles incoming errors by removing the formLoading icon:

```javascript
const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONG:
      return Object.assign({}, state, { formLoading: false });
    case START_LOADING:
      return Object.assign({}, state, { formLoading: true });
    case RECEIVE_FORM_ERRORS:
    return Object.assign({}, state, { formLoading: false });
    default:
      return state;
  }
};
```



[![https://gyazo.com/460087510fb022f5ed3a296ea510d42d](https://i.gyazo.com/460087510fb022f5ed3a296ea510d42d.gif)](https://gyazo.com/460087510fb022f5ed3a296ea510d42d)

### Future Directions

- add full waveform Functionality
