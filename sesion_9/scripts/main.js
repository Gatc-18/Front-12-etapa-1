import { printP } from "../module/print.js"

const div = document.getElementById("container");

let personajes;



document.addEventListener( "DOMContentLoaded", function() {
    fetch( "https://www.breakingbadapi.com/api/characters" )
        .then( resolve  => resolve.json() )
            .then( data => {
                personajes = data;
                printP( data, div );
            } )
        .catch( ( err ) => console.log( err )  )
} );



document.addEventListener( "click", ( { target } )=> {

    if ( target.classList.contains( 'btn' ) ) {
        const personaje = personajes.find( p => p.char_id == target.id );
        const h5 = document.getElementById("exampleModalLabel")
        h5.textContent = personaje.name;

        const img = document.getElementById( "imgP" );
        img.setAttribute( "src", personaje.img );
        img.style.height = "350px";
    }
} );



