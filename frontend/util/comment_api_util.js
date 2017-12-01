export const getComments = (songId) => {
  return $.ajax({
    url: `api/songs/${songId}/comments`,
    method: "GET"
  });
};

export const createComment = (comment, songId) => {
  return $.ajax({
    url: `api/songs/${songId}/comments`,
    method: "POST",
    data: {comment}
  });
};

export const deleteComment = (id) => (
  $.ajax({
    url: `api/comments/${id}`,
    method: "DELETE"
  })
);