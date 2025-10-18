
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});
