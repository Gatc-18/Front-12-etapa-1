const url = "http://localhost:4005/usuarios"


export const postU = async u => {

    try {
        await fetch( url, {
            method: 'POST',
            body: JSON.stringify( u ),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        } )
        .then(()=> Swal.fire({
            title: "Usuario registrado",
            icon: "success",
            time: 2500,
            showConfirmButton: false
        } ));
    } catch ( err ) {
        console.log( err );
    }

};


export const deleteU = url => {

        Swal.fire({
            title: "Seguro deseas eliminar este usuario",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Sí eliminar'
        }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch( url, { method: "DELETE" } );
                } catch ( err ) {
                    console.log( err );
                };
            }
        })
};



