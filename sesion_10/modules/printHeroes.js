

const printHeroes = ( data, template, cont ) => {

    cont.innerHTML = "";

    let fragment = document.createDocumentFragment()

    data.forEach( h => {
        const { name, image } = h;

        template.querySelector('img').setAttribute( 'src', image );
        template.querySelector('h5').textContent = name;

        const clone = template.cloneNode(true);
        fragment.appendChild( clone )
    } );

    cont.appendChild( fragment );

}

export default printHeroes;






