
/* TODO */
/* store references to the following elements from sign-up.html using getElementById
   username, email, password, year, major, mainClub, signUpBtn, errorBox, emailError, passwordError
*/


/* TODO */
/* Add event listener for when the handleSignUp sign up button is clicked 
   Once clicked it should invoke handleSignUp
*/

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

  /* TODO */
  /* Store the values of the yearSelect, majorSelect, and mainClubSelect elemeents */
  const year = null;
  const major = null;
  const main_club = null;

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

  /* TODO */
  /* Load mockData form sessions storage*/
  let mockData = null;
  /* TODO */
  /* Parse the mockData using JSON*/
  mockData = null;

  
  const num_events_attended = Math.floor(Math.random() * (60 - 0) + 0)

  /* TODO */
  /* Create a javascript object that has username, year, majro, mainclub, and the num_events_attended, email, password*/

  mockData.push(currUser)
    
  sessionStorage.setItem("leaderboardData", JSON.stringify(mockData));
  sessionStorage.setItem("isSignedIn", "true");
  sessionStorage.setItem("currUser", JSON.stringify(currUser));

  window.location.href = '/html/home.html';
}

