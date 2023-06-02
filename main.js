// Light/Dark Theme button toggle

function changeTheme() {
    body.classList.toggle('light');
};

// nav animation for hamburger menu

const navMenu = document.getElementsByClassName('.hamburgerMenu'),
toggleMenu = document.getElementById('menu-btn')
closeMenu = document.getElementById('menu-btn')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})