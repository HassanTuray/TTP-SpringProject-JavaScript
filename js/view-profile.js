// Getting page elements
document.addEventListener('DOMContentLoaded', () => {
  const profileTitle = document.getElementById("profileTitle");
  const usernameValue = document.getElementById("usernameValue");
  const yearValue = document.getElementById("yearValue");
  const majorValue = document.getElementById("majorValue");
  const clubValue = document.getElementById("clubValue");
  const eventsValue = document.getElementById("eventsValue");

  const modalOverlay = document.getElementById("modalOverlay");
  const editBtn = document.getElementById("editProfileBtn");
  const saveBtn = document.getElementById("saveProfileBtn");
  const cancelBtn = document.getElementById("cancelProfileBtn");

  const editUsername = document.getElementById("edit-username");
  const editYear = document.getElementById("edit-year");
  const editMajor = document.getElementById("edit-major");
  const editClub = document.getElementById("edit-club");

  // events
  editBtn.addEventListener("click", openModal);
  cancelBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    } 
  });
  saveBtn.addEventListener("click", saveProfile);

  // Function to load current user profile from session storage
  function loadProfile() {
    let currUser = sessionStorage.getItem("currUser");

    const user = JSON.parse(currUser);

    usernameValue.textContent = user.username;
    yearValue.textContent = user.year;
    majorValue.textContent = user.major;
    clubValue.textContent = user.main_club
    eventsValue.textContent = user.num_events_attended
  }

  // Functions to open and close the edit profile modal
  function openModal() {
    editUsername.value = usernameValue.textContent;
    editYear.value = yearValue.textContent.toLowerCase();
    editMajor.value = majorValue.textContent;
    editClub.value = clubValue.textContent.toLowerCase().replace(/ /g, "-");

    modalOverlay.style.display = "flex";
  }

  function closeModal() {
    modalOverlay.style.display = "none";
  }

  // Function to save updated profile values into session storage
  function saveProfile() {
    let stored = sessionStorage.getItem("leaderboardData");
    mockLeaderboardData = JSON.parse(stored);

    currAccount = mockLeaderboardData.find((user) => {
      user.username === usernameValue.textContent
      return user;
    })

    currAccount.username = editUsername.value;
    currAccount.year = editYear.value;
    currAccount.major = editMajor.value;
    currAccount.main_club = editClub.value;

    sessionStorage.setItem("currUser", JSON.stringify(currAccount));
    sessionStorage.setItem("leaderboardData", JSON.stringify(mockLeaderboardData));
    closeModal();
    loadProfile();
  }

  // initial page load
  loadProfile();
});