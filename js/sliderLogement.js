
import renderSlider from "./renderingSliderLogements.js";

renderSlider();

let wrapperSlider = document.querySelector(".wrapper__slider");
let slides = document.querySelectorAll(".slide");
let slidesBtn = document.querySelectorAll(".wrapper__btns .btn");
let arrowLeft = document.querySelector(".arrow__left");
let arrowRight = document.querySelector(".arrow__right");

let step = 0;

let curentStep = 0;

slidesBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    // clearInterval(sInterval);
    slidesBtn.forEach((item) => {
      item.classList.remove("active");
    });

    elem.classList.add("active");
  });
});

function prevSlide() {
    step--;

    if(step < 0){

        step = slides.length-1;
        curentStep = step;

        slides.forEach(elem => {
            elem.classList.remove('active');

        });

        slidesBtn.forEach((elem) => {
            elem.classList.remove("active");
        });

        slides[curentStep].classList.add('active');
        slidesBtn[curentStep].classList.add('active');
    }else{

        
        curentStep = step;

        slides.forEach(elem => {
            elem.classList.remove('active');

        });

        slidesBtn.forEach((elem) => {
            elem.classList.remove("active");
        });

        slides[curentStep].classList.add('active');
        slidesBtn[curentStep].classList.add('active');

    }

}

function nextSlide() {

    slidesBtn.forEach((elem) => {
        elem.classList.remove("active");
    });

  if (step < slides.length - 1) {
    curentStep = step;
    step++;

    slides[curentStep].classList.remove("active");
    slides[step].classList.add("active");

    slidesBtn[curentStep].classList.remove("active");
    slidesBtn[step].classList.add("active");

    // console.log(step);
    
  } else {
    step = 0;

   

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[step].classList.add("active");
    slidesBtn[step].classList.add("active");
  }


  console.log(step);
//   console.log(curentStep);

  
}

arrowRight.addEventListener("click", nextSlide);

arrowLeft.addEventListener("click", prevSlide);

let sInterval = setInterval(nextSlide,3500);

let reloadSetInterval = ()=>{
     sInterval = setInterval(nextSlide,3500);
};

let clrInterval = () => {
  clearInterval(sInterval);
};

wrapperSlider.addEventListener("mouseover", clrInterval);
wrapperSlider.addEventListener("mouseout", reloadSetInterval);









