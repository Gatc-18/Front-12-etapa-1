

const getHeroes = async url => {

    try {
        // const data = await ( await fetch( url ) ).json();
        const resp = await fetch( url );
        const data = await resp.json();
        return data
    } catch ( err ) {
        throw err 
    }

}

export default getHeroes;

// let heroes;
// fetch(url)
// .then( resp => resp.json() )
// .then( data => {
//     console.log( data );
//     heroes = data;
// } )
// console.log( heroes )

// return heroes;





