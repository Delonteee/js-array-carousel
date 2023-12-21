

/* Inseriamo le singole img in delle variabili con un template Literal con il quale 
integriamo la variabile della classe */

const img1 =  document.querySelector('.canvas').innerHTML = `<img src="img/01.webp">`;
const img2 =  document.querySelector('.canvas').innerHTML = `<img src="img/02.webp">`;
const img3 =  document.querySelector('.canvas').innerHTML = `<img src="img/03.webp">`;
const img4 =  document.querySelector('.canvas').innerHTML = `<img src="img/04.webp">`;
const img5 =  document.querySelector('.canvas').innerHTML = `<img src="img/05.webp">`;

// array delle img da inserire
const imgArray = [ 
     ` ${img1} ` ,
     ` ${img2} ` ,
     ` ${img3} ` ,
     ` ${img4} ` ,
     ` ${img5} ` 
    ];
      
    
document.querySelector('.canvas').innerHTML = (imgArray[0]);

let counter = 0 ;

// associamo una variabile ai bottoni
const buttonRight = document.getElementById('right-button');
const buttonLeft = document.getElementById('left-button');  

let autoplayInterval = setInterval(nextSlide, 1000);

const stopAutoplayButton = document.getElementById('autoplay');

stopAutoplayButton.addEventListener('click', function() {
    if (autoplayInterval == null) {
        autoplayInterval = setInterval(nextSlide, 1000)
    } else {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
})


/* 
    FUNZIONI
*/

function nextSlide() {
    if (counter < imgArray.length -1){
        counter += 1;
        console.log(counter);
        document.querySelector('.canvas').innerHTML = imgArray[counter];
    } else {
        counter = 0;
        console.log(counter);
        document.querySelector('.canvas').innerHTML = imgArray[counter];
    }
}

