(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__list');
    const menuCloseItem = document.querySelector('.header__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__list_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__list_active');
    });
}());