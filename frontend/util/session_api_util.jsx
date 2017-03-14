export const signIn = user => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  })
);


export const signOut = user => (
  $.ajax({
      method: "DELETE",
      url: "/api/session"
  })
);
