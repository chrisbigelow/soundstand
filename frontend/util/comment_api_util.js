// export const getComments = (songId) => (
//   $.ajax({
//     url: `api/songs/${songId}/comments`,
//     method: "GET"
//   })
// );

export const createComment = (comment) => {
  return $.ajax({
    url: `api/comments`,
    method: "POST",
    data: comment
  });
};

export const deleteComment = (id) => (
  $.ajax({
    url: `api/comments/${id}`,
    method: "DELETE"
  })
);