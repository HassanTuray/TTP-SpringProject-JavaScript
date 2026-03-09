/* TODO */
/* Use document to add event listener for DOMContentLoaded event */
/* The arrow function should call renderLeaderboard() */


// Function to populate leaderboard table from session storage
function renderLeaderboard() {
    /* TODO */
    /* Store a reference to the leaderboard-body div from home.html */
    const tbody = null;
    
    /* TODO */
    /* Check if tboday returned nulled
       If it returned null, bail out */

    if (!tbody) {
        return;
    }

    /* TODO */
    /* Load the leaderboardData from data.js into stored using sessionStorage */
    const stored = sessionStorage.getItem("leaderboardData");

    /* TODO */
    /* Use JSON.parse() to parse stored */
    mockLeaderboardData = JSON.parse(stored);
    
    // Generate HTML for each row
    /* TODO */
    /* Call map on mockLeaderboardData to add a row to the leaderboard for each user.
       The columns should be username, year, major, main club, num events attended.
       Call .join('') on the final result */
    const rowsHtml = null;
    
    /* TODO */
    /* Set the innerHTML attribute of tbody to rows.html */
    tbody.innerHTML = null;
}