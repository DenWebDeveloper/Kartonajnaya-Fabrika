
import renderGallaryItem from './renderImgUpackovkaIzKartona.js';

// const body = document.querySelector('body');

let slide = document.querySelectorAll('.section-3 .wrapper__item-img .slide');
let bottomNavigation = document.querySelectorAll('.section-3 .item__navigation');
let wrapperTextDescription = document.querySelector('.wrapper__text-description');
let btnActiveWrapperTextDescription = document.querySelector('.btn__active__description');

btnActiveWrapperTextDescription.addEventListener('click', () => {

    if(btnActiveWrapperTextDescription.textContent !== "Свернуть"){
        wrapperTextDescription.classList.add('active');
        btnActiveWrapperTextDescription.textContent = "Свернуть";
    }else{

        wrapperTextDescription.classList.remove('active');
        btnActiveWrapperTextDescription.textContent = "Читать больше";
    }
   
});


bottomNavigation.forEach(element => {

    element.addEventListener('click', (event) =>{

        bottomNavigation.forEach(element => {

            element.classList.remove('active');
        });

        let index = event.target.id;

        slide.forEach(item => {
            item.classList.remove('active');

        });

        slide[index -1].classList.add('active');
        element.classList.add("active");

        
    });
});

// renderGallaryItem();



