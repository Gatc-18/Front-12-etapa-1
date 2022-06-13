import getHeroes from "../helpers/getHeroes.js"
import printHeroes from "../modules/printHeroes.js";

const url = "http://localhost:4000/heroes";
const template = document.getElementById( "template" ).content;
const div = document.getElementById( "container" );
let data;

document.addEventListener( "DOMContentLoaded", async () => {

    try {

        data = await getHeroes( url );
        printHeroes( data, template, div  );

    } catch (err) {

        alert( "Servidor no responde" );

    }

} );

const formB = document.getElementById('formB');

formB.addEventListener( "submit", e => {
    e.preventDefault();
    const input = document.getElementById('search').value;
    const results = data.filter( h => h.name.toLowerCase().includes(input.toLowerCase()) )
    
    printHeroes( results, template, div );

} );
