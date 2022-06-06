


const btn = document.getElementById('btn')


btn.addEventListener("click", imprimir );


function imprimir () {
    console.log( 'Boton' );
}


function crearCita ( cita, logCita ) {
    let miCita = "Como yo siempre digo, " +  cita;
    logCita( miCita );
};

function logCita ( miCita ) {
    // console.log( miCita );
};


crearCita( "Hola Juan", logCita );

const vocales = ['a', 'e', 'i', 'o', 'u'];

// forEach solo recorre arreglos
vocales.forEach( function( current )  {
    // console.log( current );
});


// .map nos permite devolver un arreglo nuevo

// const tamanio = nombres.map(function( elem, i, arr){
//     // if ( elem.includes('E')) {
//     //     return elem.length
//     // } else {
//     //     return ''
//     // }
//     return elem.length
// });

// console.log( tamanio );


const nombres = ['Edgar', "Mathyus", "Jose", "Tomas"];
// filter

// const people = nombres.filter(function( e ) { 
//     return e.includes('o')
// })

// console.log( people );

const p = nombres.filter(( e )=> e.length > 4 );
console.log( p );


// for (let i = 0; i < vocales.length; i++ ) {
//     console.log( vocales );
// }
