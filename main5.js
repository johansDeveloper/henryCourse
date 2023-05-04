


class Opcion {

    constructor(user, name, email, password) {

        this.usuario = user;
        this.nombre = name;
        this.correo = email;
        this.clave = password;

    }

    getUsuario() {

        return this.usuario;
    }

    getNombre() {

        return this.nombre;
    }

}

class Usuario {

    constructor(user, name, email, password) {

        this.opcion = new Opcion(user, name, email, password);
        this.saludar();

    }

    saludar() {
        console.log("Hola " + this.opcion.getNombre());
    }

}

function crearUsuario(user, name, email, password) {


    var user = new Usuario(user, name, email, password);

    return user;
}

function agregarMetodoPrototype(Constructor) {

    Constructor.prototype.saludar = function () {
        return "Hello world!";
    };
}

function agregarStringInvertida() {

    String.prototype.reverse = function () {

        var wordinverse = '';

        for (var i = this.length - 1; i >= 0; i--) {
            wordinverse = wordinverse + this.charAt(i);
        }

        return wordinverse;
    };   
}


class Persona{

    constructor(name, lastname, age, address){

        this.nombre = name;
        this.lastname = lastname;
        this.edad = age;
        this.direccion = address;

        this.detalle = function(){
            return{
                Nombre: this.nombre,
                Apellido: this.apellido,
                Edad: this.edad,
                Domicilio = this.direccion
            }
        }
    }

}
// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: {
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'