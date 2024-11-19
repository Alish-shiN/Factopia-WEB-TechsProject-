document.addEventListener('DOMContentLoaded', () => {
    const profileLink = document.getElementById('profileLink');
    
    if (profileLink) {
        profileLink.addEventListener('click', handleProfileClick);
    }

    updateAuthUI();
});

function handleProfileClick(e) {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        window.location.href = 'registration.html';
    } else {
        window.location.href = 'signin.html?redirect=profile';
    }
}

function updateAuthUI() {
    const profileLink = document.getElementById('profileLink');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (profileLink) {
        if (currentUser) {
            profileLink.textContent = currentUser.username;
        } else {
            profileLink.textContent = 'Profile';
        }
    }
}