const signUp = user => {
  return $.ajax({
    method: "POST",
    url:"api/user",
    data: { user }
  });
};

export default signUp;
