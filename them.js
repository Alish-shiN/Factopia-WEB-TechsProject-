// Применить тему при загрузке страницы
function applyDarkModeOnLoad() {
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Вызываем эту функцию на каждой странице
document.addEventListener('DOMContentLoaded', applyDarkModeOnLoad);
