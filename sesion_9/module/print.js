

export const printP = ( personajes , contenedor = "Se te olvido" ) => {
    
    personajes.forEach( personaje => {
        // contenedor.innerHTML += "Hola"

        // console.log( personaje );

        const div = document.createElement("div");
        div.classList.add("card");
        div.style.width = "18rem";

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute( "alt", personaje.nickname );
        img.setAttribute( "src", personaje.img );

        const divB = document.createElement("div");
        divB.setAttribute( "class", "card-body" );

        const ancla = document.createElement("a");
        ancla.classList.add('btn', 'btn-outline-success', 'd-block');
        ancla.setAttribute('data-bs-toggle', 'modal');
        ancla.setAttribute('data-bs-target', '#exampleModal');
        ancla.setAttribute( "id", personaje.char_id )
        ancla.textContent = personaje.nickname;

        div.appendChild(img);
        divB.appendChild(ancla);
        div.appendChild(divB);

        contenedor.appendChild(div);
    } );
};

    {/* <div class="card" style="width: 18rem;">
            <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn d-block m btn-outline-success">Go somewhere</a>
            </div>
        </div> */}





