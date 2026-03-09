document.addEventListener('DOMContentLoaded', () => {
  /* store references to the following elements from sign-in.html
     email, password
     signInBtn and errorBox have been done for you
  */
  const signInBtn = document.getElementById("signInBtn");
  const errorBox = document.getElementById("errorBox");

  /* add an event listener to signInBtn
     when the user clicks, it should call the handleSignIn function
  */
  signInBtn.addEventListener("click", handleSignIn);
  

  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSignIn();
  });

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSignIn();
    } 
  });

  // Function to control sign in error display
  function showError(message) {
  if (!message) {
    errorBox.style.display = "none";
    errorBox.textContent = "";
    return;
  }

  errorBox.style.display = "block";
  errorBox.textContent = message;
}

  // Function to validate credentials and sign user in
function handleSignIn() {
  /* TODO */
  /* store the value from emailInput using its' value attribute */
  const email = emailInput.value;

  /* TODO */
  /* Store the value of the passwordInput  */
  const password = passwordInput.value;

  /* TODO */
  /* load the leaderBoardData from sessionStorage and use parse the stored data */
  let stored = null;
  mockLeaderboardData = null;

  /* TODO */
  /* Use the array function, find, on mockLeaderboardData 
  to find a user whos email is equal to email and password is equal to password*/

  let validAccount = null;

  /* TODO */
  /* Check if validAccount is null */
  /* if it is null, call showError and display an erro message */
  /* if it is not null, use sessionStorage to set the isSignedIn key to true 
     and set the currUser to the result of calling stringify on the validAccount
  */

  if (validAccount) {
    sessionStorage.setItem("isSignedIn", "true");
    sessionStorage.setItem("currUser", JSON.stringify(validAccount));

    window.location.href = '/html/home.html';
  } else {
    showError("Invalid Sign In")
  }
}
});