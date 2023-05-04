

class Gato{


    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }


    meow(){
        return "Meow!";
    }

}


class ObjetoPropiedades{


    constructor(prop1, prop2){
        this.propiedad1 = prop1;
        this.propiedad2 = prop2;
    }
    
    metodoAInvocar(){
        confirm("Metodo invocado por el usuario: ");
    }


    metodoMisterioso(numero){
        return numero*5;
    }
}

class ObjetoInstancia{

    constructor(prop){

        this.propiedadAeliminar = prop;
    }
}

class User{

    constructor(nombre, email, password){

        this.nombre = nombre;
        this.email= email;
        this.password = password;
    }
    
}

class PropertyEncrypt{


    constructor(prop1, prop2){

        if(prop1 != ""){
            this.propiedad1 = prop1;
        }

        if(prop2 != ""){
            this.propiedad2 = prop2;

        }
    }
  
}


class Usuario {

 
    constructor(){

        //... 

        this.friends = new Array();
    }


    getNombre(){
        return this.nombre;
    }

    setNombre(name){
        this.nombre = name;
    }

    addFriend(usuario){
        //Es recomentable validar que sea instancia de un objeto usuario
        this.friends.push(usuario);
    }
    
}

function crearGato(nombre, edad){

    var michi = new Gato(nombre, edad);    
    return michi;
}

function agregarPropiedad(objeto, property){

    objeto[property] = null;

    return objeto;
}

function invocarMetodo(objeto, metodo){
    objeto[metodo]();
}


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso){

    var numero = prompt("Digite el numero: ");
    return objetoMisterioso["metodoMisterioso"](numero);
}

function eliminarPropiedad(objeto, unapropiedad){
    
    return delete objeto[unapropiedad];
}

function nuevoUsuario(nombre, email, password){

    const instance = new User(nombre, email,password);


    return instance;
}

function tieneEmail(usuario){

    var flag = false;

    if(usuario.email != ""){
        flag = true;
    }

    
    return flag;
}

function tienePropiedad(objeto, propiedad){

    var response = false;

    if(objeto[propiedad] != null){
        response = true;

    }
    

    return response;
}

function verificarPassword(usuario, password){

    var result = false;
    const usr = new User("usuario", "email@domain.com", "contrasena");
    
    if(password == usr.password){
        result = true;
    }

    return result;
}

function actualizarPassword(usuario, password){

    var updateUser = new User("", "", "password");

    updateUser["password"] = password;

    

    return updateUser;
}


function agregarAmigo(usuario, nuevoAmigo){


    
    usuario.addFriend(nuevoAmigo);


    return usuario;
}

class UsuarioPremium{

    constructor(){

        //...
        this.premium = false;
    }

    setPremium(value){
        this.premium = value;
    }

}

function pasarUsuarioAPremiun(usuarios){


    for (i = 0; i < usuarios.length; i++) {
        usuarios[i].setPremium(true);
    }
   
    return usuarios;
}

class Post{

    constructor(){
        this.likes = 0;
    }


    setLikes(likes){

        this.likes = likes;
    }

    getLikes(){

        return this.likes;
    }
}

class UsuarioWithPost{

    constructor(){

        this.posts = new Array();
    }

    setPost(post){

        this.posts.push(post);
    }

    getPosts(){

        return this.posts;
    }
}

function sumarLikesDeUsuario(usuario){


    var postsFromUser = new Array();
    var cnt = 0;

    postFromUser = usuario.getPosts();


    for (i = 0; i < postFromUser.length; i++) {
        cnt = cnt+= postFromUser[i].getLikes();
    }

    return cnt;
}


class Producto{


    constructor(){

        this.precio = 0;
        this.precioDescuento = 0;
    }

    setPrecio(price){
        this.precio = price;
    }

    setDescuento(price){

        this.descuento = price;
    }

    calcularPrecioDescuento(){

        var descuento = 0;

        descuento = this.precio * this.descuento;

        return descuento;
    }

}


function agregarMetodoCalculoDescuento(producto){

    var price = prompt("Digite el precio de su nalga: ");
    producto.setPrecio(price);

    var descuento = prompt("Digite el descuento de su nalga");
    producto.setDescuento(descuento);

    producto.calcularPrecioDescuento();

    return producto;
}
