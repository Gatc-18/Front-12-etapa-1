
export const h1 =  document.querySelector('h1');

// export const h = h1.addEventListener( 'click' , ()=> console.log("Hola") );

export function saluda ( nombre, h1 ) {
    // h1.textContent = nombre;

    document.querySelector('h1').textContent = nombre;

}

console.log( 'Hola soy el script print ' );

