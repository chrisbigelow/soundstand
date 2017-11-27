export const getUser = (username) => (
  $.ajax({
    url: `api/users/${username}`,
    method: "GET"
  })
);