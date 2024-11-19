document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'signin.html?redirect=profile';
        return;
    }

    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
        <p><strong>Username:</strong> ${currentUser.username}</p>
        <p><strong>Email:</strong> ${currentUser.email}</p>
    `;

    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const logoutButton = document.getElementById('logoutButton');

    // Dark Mode
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    darkModeSwitch.checked = isDarkMode;
    updateDarkMode();

    darkModeSwitch.addEventListener('change', () => {
        isDarkMode = darkModeSwitch.checked;
        updateDarkMode();
    });

    // Logout
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });

    function updateDarkMode() {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Apply dark mode on page load
    updateDarkMode();
});

// Update auth UI on all pages
function updateAuthUI() {
    const profileLink = document.getElementById('profileLink');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (profileLink) {
        if (currentUser) {
            profileLink.textContent = currentUser.username;
        } else {
            profileLink.textContent = 'Sign In';
            profileLink.href = 'signin.html';
        }
    }
}

// Call updateAuthUI on page load
document.addEventListener('DOMContentLoaded', updateAuthUI);
