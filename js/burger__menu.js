
const body = document.querySelector('body');

const mobileBurgerMenu = document.querySelector('.icon__burger__menu');
const burgerMenu = document.querySelector('.burger__menu');
const closemobileBurgerMenu = document.querySelector('.close');
const wrapperContacts = document.querySelector('.wrapper__contacts');

mobileBurgerMenu.addEventListener('click',()=>{

    burgerMenu.classList.add('active');
    mobileBurgerMenu.style.display = 'none';
    wrapperContacts.style.opacity = 0;
    wrapperContacts.style.transition = '0.2s';

    body.classList.add('disableScroll');
});

closemobileBurgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    body.classList.remove('disableScroll');
    wrapperContacts.style.opacity = 1;
    wrapperContacts.style.transitionDelay = '1s';

    wrapperContacts.style.transition = '3s';
    mobileBurgerMenu.style.display = 'block';

});

console.log("Работает");
