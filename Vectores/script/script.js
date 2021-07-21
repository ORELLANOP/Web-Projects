//vectores
/*
let vector = [1, 2, 3, 4, 5];
let vector2 = ["franco", "walter", "maggie"];
let vector3 = [true, false, true, false];
let vector5 = [];


let vector4 = [3, "franco", true]; //NO

console.log(vector.length);

let variable = ''; */

/*

let vector = [];

for(let i = 0; i < 999; i++){
    vector.push(i);

}

for(let i = 0; i < 999; i++){
    vector.pop(i);

}

console.log(vector.length);



let indice = 0;
for(indice; indice < 10; indice + 1){}*/


/*
const vectorFor = [22, 42, 53, 33, 11, 15, 63, 66, 59, 29, 33, 20, 40, 19, 45, 9];

let mayor, posicionMayor;
let menor, posicionMenor;

mayor = vectorFor[0];
posicionMayor = 0;

menor = vectorFor[0];
posicionMenor = 0;

for(let i = 0; i < vectorFor.length; i++){
    if(mayor < vectorFor[i]){
        mayor = vectorFor[i];
        posicionMayor = i;
    }
    if(menor > vectorFor[i]){
        menor = vectorFor[i];
        posicionMenor = i;
    }
}


console.log("EL mayor numero es: "+mayor+" y se encuentra en la posicion: "+posicionMayor);
console.log("EL menor numero es: "+menor+" y se encuentra en la posicion: "+posicionMenor); */




//Ejercicio 1 vectores: mostrar por consola, los elementos pares del vector dado:
//const numeros = [121, 345, 456, 567, 678, 789, 890, 12, 23, 34, 45, 56, 67, 78, 89, 90];



const vectorNumeros = [121, 345, 456, 567, 678, 789, 890, 12, 23, 34, 45, 56, 67, 78, 89, 90];

let vectorPares = [];
let vectorImpares = [];

for(let i = 0; i < vectorNumeros.length; i++){
    if((vectorNumeros[i] % 2) == 0){
        vectorPares.push(vectorNumeros[i]);
    }
    else{
        vectorImpares.push(vectorNumeros[i]);
    }
}

console.log("Los numeros pares son: "+vectorPares+"");
console.log("Los numeros impares son: "+vectorImpares+"");
