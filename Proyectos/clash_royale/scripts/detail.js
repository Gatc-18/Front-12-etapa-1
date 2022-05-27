import { personajes } from "../data/data.js";
const imagenPersonaje = document.querySelector('.characterImage');
const titlePersonaje = document.querySelector('h1');
const descriptionPersonaje = document.querySelector('p');



document.addEventListener('DOMContentLoaded', () => {
       const id = localStorage.getItem('idPersonaje');
       let element = personajes.find(item => item.id == id );

       const { img, name, description } = element;

       imagenPersonaje.setAttribute('src', `.${img}`);
       titlePersonaje.textContent = name;
       descriptionPersonaje.textContent = description;  
})