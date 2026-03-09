// Getting page elements
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signInBtn = document.getElementById("signInBtn");
  const errorBox = document.getElementById("errorBox");

  // events
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
  const email = emailInput.value;
  const password = passwordInput.value;

  let stored = sessionStorage.getItem("leaderboardData");
  mockLeaderboardData = JSON.parse(stored);

  let validAccount = mockLeaderboardData.find((user) =>
    user.email === email && user.password === password
  );

  if (validAccount) {
    sessionStorage.setItem("isSignedIn", "true");
    sessionStorage.setItem("currUser", JSON.stringify(validAccount));

    window.location.href = '/html/home.html';
  } else {
    showError("Invalid Sign In")
  }
}
});