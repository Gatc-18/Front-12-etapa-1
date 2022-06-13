

export const printPets = ( data, template, container ) => {
    
    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    data.forEach( pet => {
        const { imagen, nombre, raza } = pet;
        
        template.querySelector( "img" ).setAttribute( "src", imagen );
        template.querySelector( "h5" ).textContent = nombre;
        template.querySelector( "p" ).textContent = raza;

        const clone = template.cloneNode( true );
        fragment.appendChild( clone );

    } );

    container.appendChild( fragment );
    
};






