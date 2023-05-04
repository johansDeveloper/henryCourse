

function devolverPrimerElemento(conjunto){

    return conjunto[0];
}

function devolverUltimoElemento(conjunto){

    return conjunto[conjunto.length-1];
}

function devolverLargoDelArray(conjunto){
    return conjunto.length;
}

function incrementarPorUno(conjunto){

    var update = new Array(conjunto.length);

    for(var x = 0; x < conjunto.length; x++){
        update[x]  = conjunto[x] + 1;
    }

    return update;
}

function agregarItemAlFinalDelArray(array, elemento){
    
    return array.push(elemento);
}

function agregarItemAlComienzoDelArray(array, elemento){

    array.unshift(elemento)
    return array;
}

function dePalabrasAFrase(palabras){

    var phrase = "";
    for (i = 0; i < palabras.length; i++) {
        phrase = phrase += ""+palabras[i];
    }

    return phrase;
}

function arrayContiene(array, elemento){

    var flag = false;

    if(array.indexOf(elemento) != -1){
        flag = true;
    }

    return flag;
}

function agregarNumeros(numeros){

    var sum = 0;

    for (i = 0; i < numeros.length; i++) {
        sum = numeros[i] + sum;
    }

    return sum;
}

function promedioResultadosTest(resultadosTest){

    var promedio = 0;
    var div = resultadosTest.length;
    var sum = 0;

    for (i = 0; i < resultadosTest.length; i++) {
        sum = sum + resultadosTest[i];
    }

    promedio = sum / div;

    return promedio;
}

function numeroMasGrande(numeros){


    var num = 0;

    for (i = 0; i < numeros.length; i++) {

        if(num > numeros[i]){
            num = num;
        }else{
            num = numeros[i];
        }
    }

    return num;
}



function cuentoElementos(conjunto){

    
    var counter = 0;

    if(conjunto.length >= 18){
        for (i = 0; i < conjunto.length; i++) {
            counter = counter +1;
        }
    }else{
        alert("Numero de elementos incorrecto")
    }

    return counter;
}








