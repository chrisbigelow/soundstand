export const getUser = (username) => (
  $.ajax({
    url: `api/users/${username}`,
    method: "GET"
  })
);

export const updateUser = (user) => {
  return $.ajax({
    url: `api/users/${user.get("user[username]")}`,
    method: "PATCH",
    data: user,
    contentType: false,
    processData: false
  });
};