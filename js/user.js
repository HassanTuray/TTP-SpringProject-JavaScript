// Load user menu after page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    setupUserMenu();
});

// Function to configure user dropdown menu based on authentication state
function setupUserMenu() {
    const menuButton = document.getElementById('user-menu-button');
    const dropdown = document.getElementById('user-dropdown');
    
    if (!menuButton || !dropdown) {
        return;
    } 

    const userDropdown = document.getElementById("user-dropdown")
    let isSignedIn = sessionStorage.getItem("isSignedIn")
    if (isSignedIn === "true") {
        userDropdown.innerHTML = 
        ' <a href="/html/view-profile.html" class="header-dropdown-item header-dropdown-divider">View Profile</a>' + 
        ' <a href="/html/home.html" id="logout" class="header-dropdown-item header-dropdown-divider">Logout</a>';

        document.getElementById('logout').addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    } else {
        userDropdown.innerHTML = 
        ' <a href="/html/sign-in.html" class="header-dropdown-item header-dropdown-divider">Sign In</a> ' +
        ' <a href="/html/sign-up.html" class="header-dropdown-item header-dropdown-divider">Sign Up</a>';
    }
    
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });
}

// Function to clear session storage and log out user
function handleLogout() {
    sessionStorage.setItem("currUser", "null");
    sessionStorage.setItem("isSignedIn", "false");

    window.location.href = '/html/sign-in.html';
}