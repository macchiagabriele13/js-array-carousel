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
    const imageMarkup = `<img class="${i === activeImage ? 'active' : '' }" src="${singleImage}" alt="">`

    slidesEl.insertAdjacentHTML("beforeend", imageMarkup)
    
}

/* Creo la variabile per definire active e la posiziono sopra il ciclo */
/* let activeImage */

/* seleziono bottoni avanti e indietro */

const nextButtonEl = document.querySelector(".next")
const prevButtonEl = document.querySelector(".prev")


/* Creo click bottone */

nextButtonEl. addEventListener('click', function () {
    console.log("next");  
})

prevButtonEl. addEventListener('click', function () {
    console.log("prev");  
})








