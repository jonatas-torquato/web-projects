document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const label = document.querySelector('.toggle-label');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
        label.textContent = 'Dark Mode';
    }

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            label.textContent = 'Light Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
