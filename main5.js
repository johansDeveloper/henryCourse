


class Opcion{

    constructor(user, name, email, password){
        
        this.usuario = user;
        this.nombre = name;
        this.correo = email;
        this.clave = password;

    }

    getUsuario(){

        return this.usuario;
    }

    getNombre(){

        return this.nombre;
    }

}

class Usuario{
  
    constructor(user, name, email, password){

        this.opcion = new Opcion(user, name, email, password);
        this.saludar();

    }

    saludar(){
        console.log("Hola " + this.opcion.getNombre());
    }

}

function crearUsuario(user, name, email, password){


    var user = new Usuario(user, name, email, password);
    
    return user;
}