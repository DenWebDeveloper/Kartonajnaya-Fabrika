let wrapperBlur = document.querySelector('.blur');
let mobileMenuOriginalUpakovka = document.querySelector('.mobile__menu__originalUpakovki');
let arrowDown = document.querySelector('.arrow__down');
let btnClose = document.querySelector('.btn__close');

arrowDown.addEventListener('click', ()=>{

    arrowDown.classList.remove('active');
    mobileMenuOriginalUpakovka.classList.add('active');
    btnClose.classList.add("active");
    wrapperBlur.classList.add('active');

    document.querySelector('body').style.position = "fixed";
});

btnClose.addEventListener('click', ()=>{

    btnClose.classList.remove("active");
    arrowDown.classList.add('active');
    mobileMenuOriginalUpakovka.classList.remove('active');
    wrapperBlur.classList.remove('active');

    document.querySelector('body').style.position = "static";


})
