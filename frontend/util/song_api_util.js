export const createSong = (song) => (
  $.ajax({
    url: "api/songs",
    method: "POST",
    datatype: "json",
    data: song,
    contentType: false,
    processData: false
  })
);

export const deleteSong = (id) => (
  $.ajax({
    url: `api/songs/${id}`,
    method: "DELETE"
  })
);

export const updateSong = (song) => {
  return $.ajax({
    url: `api/songs/${song.get("song[id]")}`,
    method: "PATCH",
    data: song,
    contentType: false,
    processData: false
  });
};

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

export const getUserSongs = (id) => (
  $.ajax({
    url: `/api/users/${id}/songs`,
    method: "GET"
  })
);


