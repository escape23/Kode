function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value; // Dette er selvfølgelig veldig usikkert
  if (username == "brukernavn" && password == "123456") {
    alert("Du har logget inn!");
  } else {
    alert("Brukernavn eller passord er feil!");
  }
}
