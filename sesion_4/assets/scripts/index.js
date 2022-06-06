// Fragmento de codigo encapsulado y que se puede reutilizar 


// let actividad = Number(prompt("que actividad realizaste : marque \n 1.  dormido \n 2. sentado"))

// calcularCalorias(actividad);

// function calcularCalorias(actividadUsuario){
    

//     let horas=Number(prompt("horas que realizaste la actividad ")); 
//     let minutos=Number(prompt("minutos que realizaste la actividad "));
  
//                             //  evaluacion  ? true : false; 
//     let caloriasConsumidas = actividadUsuario === 1 ? 1.06 : 1.66; 
//     // let estado = calificacion >= 3 ? "Aprobado" :  "Reprobado"; 
//     // let calificacion = 2.9; 

    
//     // if(actividad == 1){
//     //     caloriasConsumidas = 1.06;
//     // } else {
//     //     caloriasConsumidas = 1.66;
//     // }


//     let resultado=(((horas *60) * caloriasConsumidas )+ (minutos * caloriasConsumidas )); 

//    alert("las calorias que gasto fueron de "+ resultado)

// }



// function mostrarMultiplos(multiplo, limit){
 
//     for(let i = 1; i <= limit; i++){
//         let resultado = i * multiplo;
    
//         console.log(`${i} x ${multiplo} = ${resultado}`)
//     }
    
// }


function sumarNumeros(num1, num2){

     let resultado = num1 + num2;

     return resultado;
}


function imprimirNombre(nombre){

      alert(nombre)
}

for(let i = 1; i<=3; i++){
    let nameU = prompt("ingresa tu nombre");

    imprimirNombre(nameU)
}



















