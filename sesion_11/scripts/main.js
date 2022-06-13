import { getData } from "../helpers/getData.js";
import { printPets } from "../modules/printPets.js";

const btnP = document.getElementById('btnP');
const btnG = document.querySelector("#btnG");
const tPets = document.getElementById('petsCard').content;
const container = document.querySelector('#container');
// const lmp = document.getElementById('lmp');
const url = "http://localhost:4005/";


// Limpiar DOM
// lmp.addEventListener( "click", ()=> {
//     container.innerHTML = "";
// } );


// Perros
btnP.addEventListener( "click", async()=> {
    try {
        const data = await getData( url + "perros" );
        printPets( data, tPets, container );
    } catch (error) {
        console.log( error );
    }
} );

// Gatos
btnG.addEventListener( "click", async()=> {
    try {
        const data = await getData( url + "gatos" );
        printPets( data, tPets, container );
    } catch (error) {
        console.log( error );
    }
} );

