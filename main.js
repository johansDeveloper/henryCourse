



function devolverString(str){
    return str;
}

function suma(x, y){
    return x + y;
}

function resta(x, y){
    return x - y;
}

function multiplica(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}


/**
 *
 *  Esta funcion por defecto retorna false
 ***/
function sonIguales(x, y){

    var comparation = false;

    if(x === y){
        comparation = true;
    }

    return comparation;
}


function tienenMismaLongitud(str1, str2){

    var resultado = false;

    if(str1.length == str2.length){

        resultado = true;
    }


    return resultado;
}

function menosQueNoventa(num){

    var response = false;


    if(num < 90){

        response = true;
    }

    return response;
}

function mayorQueCincuenta(num){

    var result = false;

    if(num > 50){
        result = true;
    }

    return result;
}


function obtenerResto(x, y){

    var num = 0;

    num = x % y;

    return num;
}


function esPar(num){

    var is = false;


    if(num % 2 == 0) {
        is = true;
    }

    return is;
}

function esImpar(num){

    var is = false;

    if(num % 2 != 0){
        is = true;
    }
    
    return is;
}


function elevarAlCuadrado(num){

    var cuadrado = 0;

    cuadrado = Math.pow(num, 2);

    return cuadrado;
}

function elevarAlCubo(num){

    var cubo = 0;

    cubo = Math.pow(num, 3);

    return cubo;
}

function elevar(num, exponent){

    var result = 0;

    //f(x) = bx, donde b > 0 y b ­ 1.

    if(num > 0){}else{
        return;
    }
    if(num != 1){}else{
        return;
    }

    result = Math.pow(num, exponent);

    return result;
}

function redondearNumero(x){

    var num = 0;

    num = Math.round(x);

    return num;
}

function redondearHaciaArriba(x){

    var num = 0;

    num = Math.ceil(x);

    return num;
}

function numeroRandom(){
    return Math.random();
}

function esPositivo(num){
    
    var message = "";
    
    if(num > 0){
        message = "positivo";
    }
    
    if(num < 0){
        message = "negativo";
    }

    if (num === 0) {
        message = "false";
    }
    
    return message; 
}

function agregarSimboloExclamacion(str){
    
    var newString = "!";
    
    newString = str + newString;
    
    return newString;
}

function combinarNombres(nombre, apellido){
    return nombre+" "+apellido;
}

function obtenerSaludo(nombre){

    var saludo = "Hola";

    saludo = saludo + " " +nombre;

    return saludo;
}

function obtenerAreaRectangulo(largo, ancho){

    var area =  largo * ancho;

    return area;
}

function retornarPerimetro(lado){

    var perimetro = lado*4;
     
    return perimetro;
}

function areaTriangulo(base,altura){

    var area = (base * altura) / 2;

    return area;
}

function deEuroAdolar(euro){

    var dolar = 1.20;
    var dolares = dolar*euro;


    return dolares;
}

function esVocal(letra){

    var is = false;

    if(letra === 'a' | letra === 'e' | letra === 'i' | letra === 'o' | letra === 'u'){
        is = true;
    }

    return is;
}