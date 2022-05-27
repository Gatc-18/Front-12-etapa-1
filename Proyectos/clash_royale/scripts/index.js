import { personajes } from "../data/data.js";

const personajeImage = document.querySelector('img');
const personajeNombre = document.querySelector('.show');
const buttonPrev = document.querySelector('#atras');
const buttonNext = document.querySelector('#adelante');
let personajeActive = 0;
const lenght = personajes.length - 1;


document.addEventListener('DOMContentLoaded', () => {
    showElement()
});



buttonNext.addEventListener('click', () => {
    personajeActive++;
    showElement();
})


buttonPrev.addEventListener('click', () => {
    personajeActive--;
    showElement();
});


const showElement = () => {
    personajeImage.setAttribute('src', personajes[personajeActive].img);
    personajeNombre.setAttribute('id', personajes[personajeActive].id)
    personajeNombre.textContent = personajes[personajeActive].name;


    hideButton();
    showButton();
}

personajeNombre.addEventListener('click', ({ target }) => {
    localStorage.setItem('idPersonaje', target.id);
    window.location.href = './pages/detalle.html'
})


const hideButton = () => {
    if (personajeActive == 0) {
        buttonPrev.setAttribute('disabled', true);
        buttonPrev.style.backgroundColor = "#696969"
    } else {
        buttonPrev.style.backgroundColor = "rgba(18, 46, 205, 0.83)"
        buttonPrev.removeAttribute('disabled')
    }
}

const showButton = () => {
    if (personajeActive == lenght) {
        buttonNext.setAttribute('disabled', true);
        buttonNext.style.backgroundColor = "#696969"
    } else {
        buttonNext.style.backgroundColor = "rgba(18, 46, 205, 0.83)"
        buttonNext.removeAttribute('disabled')
    }
}

