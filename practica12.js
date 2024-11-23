
function validarformulario(){
    const usuario= document.getElementById("usuario").value;
    const email= document.getElementById ("correo").value;
    const password= document.getElementById("password").value;
    const passwordAgain= document.getElementById("passwordAgain").value;

    if (usuario.length < 4){
     alert ("El nombre de usuario debe tener al menos 4 caracteres,lo siento pon no más largo que ¡tu puedes!");
     return false;

    }

//Caracteres especiales para el mail
    const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

   if (!regexEmail.test(email)) {
     alert ("Este correo no es válido, prueba a usar otro que seguro que tienes");
     return false;
   }

//Para que la contraseña deba tener entre 6 y 12 caracteres por obligación
   if (password.length < 6 || password.length > 12 ) {
     alert ("La contraseña debe tener entre 6 y 12 caracteres, esfuerzate más.");
     return false;
   }

//Esto es para comprobar que la contraseña es igual en los dos campos
   if (password !== passwordAgain) {
     alert ("Las contraseñas no coinciden, por favor intenta de nuevo.");
     return false;
   }

 return true;
}
 