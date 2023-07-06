const islogin = JSON.parse(localStorage.getItem("isLogged"));

let userLoggedIn;

if (islogin) {
  userLoggedIn = true;
} else {
  userLoggedIn = false;
}

export default userLoggedIn;
