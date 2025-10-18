const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save dark mode preference to local storage
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
});