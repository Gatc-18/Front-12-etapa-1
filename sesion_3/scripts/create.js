// let container = document.querySelector('div');
// let titulo = document.createElement('h5');
// let image = document.createElement('img');
// let texto = document.createTextNode("Prueba dle fragmento de texto")


// // titulo.textContent = "Academia geek";
// titulo.appendChild(texto)
// image.setAttribute('src', 'https://img.asmedia.epimg.net/resizer/uNjpwR4muq4-phyQYar7kCf3CuE=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/D56EEJ2ZXBIOFGPHEYLA4AXHVI.jpg');
// image.setAttribute('alt', 'perrito');

// console.log(titulo);
// console.log(image);

// container.appendChild(titulo);
// container.appendChild(image);

// let name = "Gustavo";
// container.innerHTML += `
//      <h1>${name}</h1>
//      <h2>Segundo Hijo</h2>
//      <h3> Tercer Hijo </h3>
//      `




let contenedor = document.getElementById('container');

let nombre = "Gustavo"
for(let i = 1; i <= 10; i++){
    let number = prompt("Inserta un número")
    let title = document.createElement('h2');
  
    let multiplo = 5; 
    let resultado = i* multiplo; 

    title.textContent = '${ nombre } x ${multiplo} = ${number}';
    contenedor.appendChild(title);
}
contenedor.classList.add('table')



