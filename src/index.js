import "./styles.css";
var url = "https://randomuser.me/api/";

var btn = document.querySelector("#btn");
var fullnameDisplay = document.querySelector("#fullname");
var usernameDisplay = document.querySelector("#username");
var emailDisplay = document.querySelector("#email");
var cityDisplay = document.querySelector("#city");
var picUrlDisplay = document.querySelector("img");

btn.addEventListener("click", function() {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function handleErrors(promise) {
  if (!promise.ok) {
    throw Error(promise.status);
  }
  return promise;
}

function parseJSON(res) {
  return res.json();
}

function updateProfile(data) {
  var fullname = data.results[0].name.first + " " + data.results[0].name.last;
  var username = data.results[0].login.username;
  var email = data.results[0].email;
  var city = data.results[0].location.city;
  var picUrl = data.results[0].picture.medium;
  fullnameDisplay.innerText = fullname;
  usernameDisplay.innerText = username;
  emailDisplay.innerText = email;
  cityDisplay.innerText = city;
  picUrlDisplay.src = picUrl;
}

function printError(err) {
  console.log(err);
}
