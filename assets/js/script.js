/* Creo la mia Arrey di foto */

const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

/* Seleziono il luogo dove insiere la lista */

const slidesEl = document.querySelector(".slides")


/* Creo il ciclo e inserisco l'immagine, */

let activeImage = 0

for (let i = 0; i < images.length; i++) {
    const singleImage = images[i];

    /* let imageMarkup; 
    if (i === activeImage) {
       imageMarkup = `<img class="active" src="${singleImage}" alt="">`
    } else {
        imageMarkup = `<img class="" src="${singleImage}" alt="">`
        
    } */

    const imageMarkup = `<img class="${i === activeImage ? 'active' : ''}" src="${singleImage}" alt="">`

    slidesEl.insertAdjacentHTML("beforeend", imageMarkup)

}

/* Creo la variabile per definire active e la posiziono sopra il ciclo */
/* let activeImage */

/* seleziono bottoni avanti e indietro */

const nextButtonEl = document.querySelector(".next")
const prevButtonEl = document.querySelector(".prev")


/* Creo click bottone */

nextButtonEl.addEventListener('click', function () {
    console.log("next");

    /* Seleziono immagine corrente attiva */
    /* const currentImage = document.querySelector('.slides > img.active')
    console.log(currentImage); */

    /* Selezione con query selector all */
    const slides = document.querySelectorAll('.slides > img')
    const currentImage = slides[activeImage]
    console.log(currentImage);

    /* Tolgo classe active */
    currentImage.classList.remove("active")

    /* Incremento immagine */
    activeImage++

    /* Seleziono nuova immagine */
    /*  const nextImage = document.querySelector('.slides > img.active')
     console.log(currentImage); */

    let nextImage = slides[activeImage]
    console.log(nextImage);
    
    /* Ciclo infinito */

    if (activeImage > images.length -1) {
        activeImage = 0
        nextImage = slides[activeImage]
    
        
    } 

    /* Aggiungo classe active */
    nextImage.classList.add('active')
    
})

prevButtonEl.addEventListener('click', function () {
    console.log("prev");

    /* Selezione con query selector all */
    const slides = document.querySelectorAll('.slides > img')
    const currentImage = slides[activeImage]
    console.log(currentImage);

    /* Tolgo classe active */
    currentImage.classList.remove("active")

    /* Decremento immagine */
    activeImage--

    /* Seleziono nuova immagine */
    /*  const nextImage = document.querySelector('.slides > img.active')
    console.log(currentImage); */

    const nextImage = slides[activeImage]
    console.log(nextImage);


    if (activeImage <= 0) {
        activeImage = images.length - 1 
        nextImage = slides[activeImage]
    
    } 

    /* Aggiungo classe active */
    nextImage.classList.add('active')


})








