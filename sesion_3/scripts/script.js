// console.log("DOM", document);


// getElementById
const container = document.getElementById("container");

// console.log( container );

// getElementByClassName
const hola = document.getElementsByClassName('titulo');

// console.log( "clase", hola );



// querySelector con id
const div = document.querySelector("#container");

// console.log( div );

// querySelector con clase
const h3 = document.querySelector('.titulo');

// console.log( h3 );

//  querySelector con tag
const h1 = document.querySelector("h1");

// console.log( h1 );


// query SelectorAll 

// const elementos = document.querySelectorAll(".titulo");

// console.log( elementos );

// setAttribute

// const imagen = document.querySelector('img');

// imagen.setAttribute( "src", "https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg" );

// imagen.setAttribute( "alt", "perrito")

const body = document.querySelector('body');

console.log( body );

// body.setAttribute("style", "background-color: #333")
// body.style.backgroundColor = "#333"
// body.style.border = "10px solid #000"

body.setAttribute( "class", "verde" );

// ClassList

const titulo = document.querySelector('#titulo');

titulo.classList.add('hola')

// titulo.classList.remove('dark-theme')

// titulo.classList.replace('hola', "chao")

console.log( titulo.classList );

// console.log( titulo.classList.contains('titulo') );


