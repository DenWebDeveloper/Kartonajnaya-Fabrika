
const body = document.querySelector('body');

const mobileBurgerMenu = document.querySelector('.icon__burger__menu');
const burgerMenu = document.querySelector('.burger__menu');
const closemobileBurgerMenu = document.querySelector('.close');
const wrapperContacts = document.querySelector('.wrapper__contacts');
// const mainTitle = document.querySelector('.wrapper__sub-menu .title');
const indexMainTitle = document.querySelector('.main__description');





mobileBurgerMenu.addEventListener('click',()=>{

    burgerMenu.classList.add('active');
    mobileBurgerMenu.style.display = 'none';
    wrapperContacts.style.opacity = 0;
    wrapperContacts.style.transition = '0.2s';

    indexMainTitle.style.opacity = 0;
    indexMainTitle.style.transition = '0.2s';

    body.classList.add('disableScroll');

    console.log(mainTitle);

});

closemobileBurgerMenu.addEventListener('click', ()=>{

    burgerMenu.classList.remove('active');
    mobileBurgerMenu.style.display = 'block';
    body.classList.remove('disableScroll');
    wrapperContacts.style.opacity = 1;
    wrapperContacts.style.transitionDelay = '1s';

    inexMainTitle.style.opacity = 1;
    inexMainTitle.style.transitionDelay = '1s';

    wrapperContacts.style.transition = '3s';
    indexMainTitle.style.transition = '3s';


});

console.log("Работает");
