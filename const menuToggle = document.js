const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    menuToggle.innerHTML = navUl.classList.contains('active') ? '✕' : '☰';
});