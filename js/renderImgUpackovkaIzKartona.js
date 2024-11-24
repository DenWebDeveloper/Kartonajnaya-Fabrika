import databaseImgUpakovkaIzKartona from "./database/databaseImgUpakovkaIzKartona.js";

function renderGallaryItem(){

    let gallary = document.querySelector('.wrapper__gallary');

    gallary.innerHTML = '';

    for(let i = 0; i< databaseImgUpakovkaIzKartona.length; i++){

        let item = document.createElement('div');

        item.classList.add('item__gallary');

        item.innerHTML =  `<div class="wrapper__img">
                            <img src='${databaseImgUpakovkaIzKartona[i].img}' alt="" class="image__item">
                            </div>

                            <p class="title__item">Коробка для кальянного мундштука <span>от 10 р / шт*</span></p>

                            <p class="description__item">
                            Выполнена в формате пенала со сборной внутренней частью и "рукавом с боковой склейкой". Также в комплекте предусмотрена вставка для 
                            "двойного дна", где прячется шнурок. Внешний размер упаковки : 132*82*36 мм. 
                            </p>`;


        gallary.append(item);

        
    }
  
    console.log(gallary.classList);

}

export default renderGallaryItem;
