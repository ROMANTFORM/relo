const dishesMenu = document.querySelector('.menu-list--dishes');
const barMenu = document.querySelector('.menu-list--bar');
const dishesLink = document.querySelector('.dishes__link');
const barLink = document.querySelector('.bar__link');


dishesLink.addEventListener('click', () => {
    dishesMenu.style.display = 'grid';
    barMenu.style.display = 'none';
    dishesLink.classList.add('menu__link--active');
    barLink.classList.remove('menu__link--active');
});
barLink.addEventListener('click', () => {
    dishesMenu.style.display = 'none';
    barMenu.style.display = 'grid';
    dishesLink.classList.remove('menu__link--active');
    barLink.classList.add('menu__link--active');
});

