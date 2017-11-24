export const createSong = (song) => (
  $.ajax({
    url: "api/songs",
    method: "POST",
    data: song
  })
);

export const deleteSong = (id) => (
  $.ajax({
    url: `api/songs/${id}`,
    method: "DELETE"
  })
);

export const updateSong = (song) => (
  $.ajax({
    url: `api/songs/${song.id}`,
    method: "PATCH",
    data: {song}
  })
);

export const getSong = (id) => (
  $.ajax({
    url: `api/songs/${id}`,
    method: "GET"
  })
);

export const getSongs = () => (
  $.ajax({
    url: `api/songs`,
    method: "GET"
  })
);

