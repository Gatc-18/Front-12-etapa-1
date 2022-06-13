import { deleteU, postU } from "../helpers/crud.js";
import { getData } from "../helpers/getData.js";


const form = document.getElementById('formulario');
const btnCorreo = document.getElementById("btnCorreo");
const btnEliminar = document.getElementById("btnEliminar");
const nombre = document.getElementById('name');
const apellido = document.getElementById("lastName");
const correo = document.getElementById("email");
const id = document.getElementById('id');


form.addEventListener( "submit", e => {
    e.preventDefault();

    const u = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value
    };

    postU( u );

} );


btnCorreo.addEventListener( "click", async()=> {
    const input = document.getElementById( "email" ).value;
    const data = await getData("http://localhost:4005/usuarios");
    const u = data.find( usr=> usr.correo.toLowerCase() === input.toLowerCase() );

    if ( u ) {
        const { nombre:name, apellido:lastN, correo:email, id:idU } = u;

        nombre.value = name;
        correo.value = email;
        apellido.value = lastN;
        id.value = idU;

        // btnEliminar.removeAttribute("disabled");
        btnEliminar.disabled = false;
        
    }else {
        Swal.fire({
            title: "El usuario no existe",
            icon: "error",
            timer: 1000,
            showConfirmButton: false
        } );
    }
} );


btnEliminar.addEventListener( "click", ()=>{
    deleteU( `http://localhost:4005/usuarios/${id.value}` )
} );

