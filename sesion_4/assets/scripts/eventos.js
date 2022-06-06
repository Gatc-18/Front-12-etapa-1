// let primerBoton = document.querySelector('#btn1');
// let segundoBoton = document.querySelector('#btn2');
let form = document.querySelector('form');
let btn = document.querySelector('#button')
// primerBoton.addEventListener('click', function(){
//      alert("se está ejecutando el evento")
// }); 

// segundoBoton.addEventListener('mouseover', function(){
//    segundoBoton.classList.add('clase1')
// }); 

// segundoBoton.addEventListener('mouseout', function(){
//     segundoBoton.classList.replace('clase1', 'clase2' )
// })


// form.addEventListener('submit', function(e){
//     e.preventDefault(); 

//     let name = document.getElementById('name').value;
    
//     if(name == ""){
//         Swal.fire(
//             'ERROR',
//             'Debes llenar el formulario',
//             'error'
//           )
//     } else {
//         Swal.fire(
//             'Felicidades',
//             `Bienvenido ${name}`,
//             'success'
//           )
//     }

    
// })

// document.addEventListener('DOMContentLoaded',function(){
//             Swal.fire(
//             'Felicidades',
//             `Bienvenido`,
//             'success'
//           )
// })

// document.addEventListener('',function(){
//     Swal.fire(
//     'Felicidades',
//     `Bienvenido`,
//     'success'
//   )
// })

let nameU = document.getElementById('name');
    

// nameU.addEventListener('focus', function(){
//           Swal.fire(
//     'Felicidades',
//     `Ingresa tu nombre`,
//     'success'
//   )
// })

nameU.addEventListener('blur', function(){
   
    if(nameU.value == ""){
        Swal.fire(
            'Felicidades',
            `Saliendo del foco`,
            'error'
            )
    } else {
        Swal.fire(
            'Felicidades',
            `Saliendo del foco`,
            'success'
            )
    }
   
   
})



