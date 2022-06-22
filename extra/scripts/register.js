import { GetData } from "../helpers/getData.js";
import { PostData } from "../helpers/postData.js";

let formulario = document.querySelector("form");

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nameU = document.getElementById('name').value;
    let emailU = document.getElementById("email").value;
    let passwordU = document.getElementById("password").value;

    if (nameU.length == 0 || emailU.length == 0) {
        alert("Todos los campos son requeridos");
    } else {

        let user = {
            id: crypto.randomUUID(),
            nameU,
            emailU,
            passwordU
        }

        let dataUser = await GetData("http://localhost:3000/Usuarios");

        dataUser.forEach(async(item) => {
            if(item.email != emailU) {
                alert("Ya esxite un usuario con ese correo");
            } else {
                await PostData(user, "http://localhost:3000/Usuarios");
            }
        })

    }
})