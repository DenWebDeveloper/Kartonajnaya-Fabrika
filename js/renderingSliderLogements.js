import databaseSliderLogements from "./database/databaseSliderLogements.js";

function renderSlider(){

    // let wrapperSlider = document.querySelector(".wrapper__slider");


    let logements = document.querySelector('.logements .container');

    let slider = document.createElement('div');
    slider.classList.add('wrapper__slider');

    slider.innerHTML = `  <div class="arrow arrow__left">
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </div>

                        <div class="arrow arrow__right">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>`;

    

    for( let i = 0; i < databaseSliderLogements.length; i++){

        let itemDiv = document.createElement('div');
        itemDiv.classList.add('slide');
        itemDiv.innerHTML = `<img src="${databaseSliderLogements[i].img}" alt="">
                            <p class="descroption__img">${databaseSliderLogements[i].description}</p> `;


        slider.append(itemDiv);

    }
    
    slider.children[2].classList.add('active');

    let wrapperBtns = document.createElement('div');

    wrapperBtns.classList.add('wrapper__btns');

    wrapperBtns.innerHTML = `  <div class="btn active"></div>
                                <div class="btn"></div>
                                <div class="btn"></div>`;
    
    slider.append(wrapperBtns);
    logements.append(slider);

   
    // wrapperSlider.classList.remove('wrapper__slider');
        
    // wrapperSlider.innerHTML = '';
  
    
}

export default renderSlider;


 

