import { sumar } from "./module/module.js";
import { saluda, h1 } from "./print.js";

import { cards } from "./Ejercicio de integracion/assets/data/data.js"

cards.forEach( p => {
    console.log( p.name )
})

saluda( "Jose", h1 );

sumar( 10, 15 );

// const h1 = document.querySelector('h1')

// console.log( sumar( 10, 5) );

// document.addEventListener( 'click' )

// h1.addEventListener('click', ()=> console.log('Hola'))