import {GetData} from '../helpers/getData.js'
let form = document.querySelector("form");



form.addEventListener('submit', async (e) => {
   e.preventDefault();
   alert("Hola")

   let email = document.getElementById('email').value;

   let users = await GetData("http://localhost:3000/Usuarios");
console.log(users)
   users.forEach(item => {
      if(item.emailU == email){
        window.location.href = "./pages/home.html"
      }
   })

})