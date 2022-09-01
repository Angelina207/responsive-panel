export function header() {
    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.header__burger').addEventListener('click', isOpenNav);
    const burgerClose = document.querySelector('.nav__btn-close').addEventListener('click', isCloseNav);

    function isOpenNav() {
        nav.classList.add('is-open');
    }
    function isCloseNav() {
        if ( nav.classList.contains('is-open'))
            nav.classList.remove('is-open');
    }
}