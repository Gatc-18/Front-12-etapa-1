let form = document.querySelector('form');
let imagenPelta = document.querySelector('#imgPaleta');
let selectPaletas = document.querySelector('select');
let pedidosAgendados = [];


form.addEventListener('submit', function (e) {

    e.preventDefault();

    let name = document.getElementById('nombre').value;
    let lastName = document.getElementById('apellido').value;
    let addres = document.getElementById('direccion').value;
    let flavor = selectPaletas.value;

    let pedido = {
        name,
        lastName,
        addres,
        flavor
    }

    pedidosAgendados.unshift(pedido);

    console.log(pedidosAgendados)


    mostrarNombres(pedidosAgendados)
    mostrarAlerta(pedido)
    mostrarPaleta();
    form.reset();
})


selectPaletas.addEventListener('change', function () {
    imagenPelta.style.display = 'inline';
   
    let urlPaleta = mostrarPaleta(selectPaletas.value);

    imagenPelta.setAttribute('src', urlPaleta)
})



function mostrarPaleta(value = "0") {
    let urlImage;


    switch (value) {
        case '1':
            urlImage = "https://i.ibb.co/hFKCp2x/Sandia.png";
            break;

        case '2':
            urlImage = "https://i.ibb.co/QKs50Ch/Mango.png";
            break;

        case '3':
            urlImage = "https://i.ibb.co/4YtQRWW/Fresa.png";
            break;

        case '4':
            urlImage = "https://i.ibb.co/X7tH6S1/Arandanos.png";
            break;

        default:
            imagenPelta.style.display = 'none';
    }

    return urlImage;

}


function mostrarAlerta(obj = {}){

    const {name} = obj;
    alert(`${name}, tu pedido ha sido agendado`)

    // Swal.fire(
    //     '',
    //     `${name}, tu pedido ha sido agendado`,
    //     'success'
    //   )
}


function mostrarNombres(arr = []){
   
    console.clear();

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].name)
    }

    

}


