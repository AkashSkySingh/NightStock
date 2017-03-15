export const signin = user => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
);

export const signout = user => (
  $.ajax({
      method: "DELETE",
      url: "/api/session"
  })
);

export const signup = user => {
  return $.ajax({
    method: "POST",
    url:"api/user",
    data: { user }
  });
};
