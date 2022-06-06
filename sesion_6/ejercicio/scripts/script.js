const empleados = [
    {
        nombre: "Jose Garcia",
        edad: 22,
        ciudad: "Bogota"
    },
    {
        nombre: "Edgar Castilla",
        edad: 22,
        ciudad: "Bogota"
    },
    {
        nombre: "Jennifer Duque",
        edad: 22,
        ciudad: "Bogota"
    }
]

const form = document.getElementById('form');
const input = document.getElementById('search');
const div = document.getElementById('root');


document.addEventListener( "DOMContentLoaded", ()=> {

    empleados.forEach( e => {
       const h2 = document.createElement('h2');
       h2.textContent = e.nombre;
       div.appendChild(h2);
    })

})


// form.addEventListener( 'submit', function( event ){
//     event.preventDefault();
//     const empleado = empleados.find( (e)=> e.nombre === input.value );
//     console.log( empleado.nombre );
// });

// form.addEventListener( 'submit', function( event ){
//     event.preventDefault();
//     const empleado = empleados.filter( (e)=> e.nombre === input.value );
//     console.log( empleado[0].nombre );
// });