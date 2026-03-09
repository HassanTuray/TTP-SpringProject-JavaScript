// Getting page elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const yearSelect = document.getElementById("year");
const majorSelect = document.getElementById("major");
const mainClubSelect = document.getElementById("mainClub");

const signUpBtn = document.getElementById("signUpBtn");

const errorBox = document.getElementById("errorBox");
const emailErrorBox = document.getElementById("emailError");
const passwordErrorBox = document.getElementById("passwordError");

// events
signUpBtn.addEventListener("click", handleSignUp);

// Functions to control errors associated with signing up
function showMainError(message) {
  if (!message) {
    errorBox.style.display = "none";
    errorBox.textContent = "";
    return;
  }
  errorBox.style.display = "block";
  errorBox.textContent = message;
}

function showEmailError(message) {
  emailErrorBox.style.display = message ? "block" : "none";
  emailErrorBox.textContent = message || "";
}

function showPasswordError(message) {
  passwordErrorBox.style.display = message ? "block" : "none";
  passwordErrorBox.textContent = message || "";
}

// Functions to validate user input
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}


function handleSignUp() {
  showEmailError("");
  showPasswordError("");
  showMainError("");

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const year = yearSelect.value;
  const major = majorSelect.value;
  const main_club = mainClubSelect.value;

  // email validation
  if (!validateEmail(email)) {
    showEmailError("Please enter a valid email address");
    return;
  }

  // password validation
  if (!validatePassword(password)) {
    showPasswordError("Password must be at least 6 characters");
    return;
  }

  // other fields
  if (!username || !year || !major || !mainClub) {
    showMainError("Please fill in all fields");
    return;
  }

  let mockData = sessionStorage.getItem("leaderboardData");
  mockData = JSON.parse(mockData);

  const num_events_attended = Math.floor(Math.random() * (60 - 0) + 0)
  const currUser = {username: username, year: year, major: major, main_club: main_club, num_events_attended: num_events_attended, email: email, password: password};

  mockData.push(currUser)
    
  sessionStorage.setItem("leaderboardData", JSON.stringify(mockData));
  sessionStorage.setItem("isSignedIn", "true");
  sessionStorage.setItem("currUser", JSON.stringify(currUser));

  window.location.href = '/html/home.html';
}

