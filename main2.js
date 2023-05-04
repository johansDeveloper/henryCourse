/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function obtenerMayor(a, b){

    var mayor = 0;

    if(a > b){
        mayor = a;
    }
    if(b > a){
        mayor = b;
    }
    if(a === b){

        mayor = a;

        if(b === a){
            mayor = b;
        }
    }

    return mayor;
}

function mayoriaDeEdad(edad){
    
    var permission = "";
    
    if(edad >= 18){
        permission = "Allowed";
    }else{
        permission = "Not allowed";
    }

    return permission;
}

function conection(status){
    
    var conection = "";

    switch (status) {
        case 1:
            conection = "Online";
            break;
        case 2:
            conection = "Away";
            break;
        default:
            conection = "Offline";
            break;
    }
    
    return conection;
}

function saludo(idioma){

    var saludo = "";

    switch (idioma) {

        case "aleman":
            saludo = "Guten Tag!";
            break;
        case "mandarin":
            saludo = "Ni Hao!";
            break;
        case "ingles":
            saludo = "Hello!";
            break;
        default:
            saludo = "Hola!";
            break;
    }
    return saludo;
}

function colors(color){

    var phrase = "";

    switch (color) {

        case "Blue":
            phrase = "This is Blue";
            break;
        case "Red":
            phrase = "This is Red";
            break;
        case "Green":
            phrase = "This is Green";
            break;
        case "Orange":
            phrase = "This is Orange";
            break;
        default:
            phrase = "Color not found";
            break;
    }

    return phrase;
}

function esDiezOCinco(numero){

    var isNumFind = false;

    if (numero == 10 || numero == 5) {
        isNumFind = true;
    }

    return isNumFind;
}

function estaEnRango(numero){

    var isRange = false;

    if(numero < 50 && numero > 20){
        isRange = true;
    }
    
    return isRange;
}

function esEntero(numero){

    var isInteger = false;

    if(Math.floor(numero)){
        isInteger = true;
    }

    return isInteger;
}

function fizzBuzz(num){

    var fizzbuzz;
    var divByFive = -1;
    var divByThree = -1;


    divByFive = num % 5;
    divByThree = num % 3;

    if(divByThree === 0){
        fizzbuzz = "fizz";
    }

    if (divByFive === 0) {
        fizzbuzz = "buzz";
    }

    if(divByFive === 0 && divByThree === 0){
        fizzbuzz = "fizzbuzz";
    }

    if (divByFive != 0 && divByThree != 0) {
        fizzbuzz = num;
    }
    
    return fizzbuzz;
}

function operadoresLogisticos(num1, num2, num3){

    var result;

    if(num1 == 0 || num2 == 0 || num3 == 0){
        result = "Error";
    }else{
        if(num1 < 0 || num2 < 0 || num3 < 0){
            result = "Hay negativos";
        }else{

            if(num1 > num2){
                if(num1 > num3){
                    if(num1 > 0){
                        result = "Numero 1 es mayor y positivo";
                    }
                }
            }else{
                
                if(num3 > num1 && num3 > num2){
                    num3 = num3 +1;
                    result = num3;
                }else{

                    result = false;
                }
            }
        }
    }
 
    return result;
}

function esPrimo(numero) {

    for(var i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}

function esVerdadero(valor){

    var message = "";

    if (valor) {
        message = "Soy verdadero";
    }else{
        message = "Soy falso";
    }

    return message;
}

function tablaDelSeis(){


    var table = new Array(60);

    for(var x = 0; x<= 60; x++){
        table[x] = x*6;
    }

    return table;
}

function tieneTresDigitos(numero){

    var flag = false;
    

    if(numero > 99){
        flag = true;
    }

    return flag;
}

function doWhile(numero){

    var cnt = 0;
    var sum = numero;

    do{

        sum = sum+5;

        cnt = cnt+1;
    }while(cnt < 8);

    return sum;
}