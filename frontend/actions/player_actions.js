export const PLAY_PREVIOUS = "PLAY_PREVIOUS";
export const ADD_TO_QUEUE = "ADD_TO_QUEUE";
export const PLAY_NEXT = "PLAY_NEXT";
export const PLAY = "PLAY";


export const addSongToQueue = (song) => ({
  type: ADD_TO_QUEUE,
  song
});

export const play = () => ({
  type: PLAY,
});

export const playNextSong = () => ({
  type: PLAY_NEXT
});

export const playPreviousSong = () => ({
  type: PLAY_PREVIOUS
});