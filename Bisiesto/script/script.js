const inputYear = document.querySelector('#year');
const pMessage = document.querySelector('p');

const tds = document.querySelectorAll('td');


const notas = [1, 3, 5, 7, 9];

//const promedio = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5;

//pMessage.innerHTML = 'Promedio: ' + promedio;


let suma = 0;

notas.forEach( (item, index) => {
    suma = suma + item;
    console.log(item, index);
});

const promedio = suma / notas.length;

pMessage.innerHTML = 'Promedio: ' + promedio;


function calcularBisiesto() {

    let esBisiesto =  false;

    const year = parseInt(inputYear.value);
    
    const mod400 = year % 400;
    
    if ( mod400 == 0) {
        esBisiesto = true;
    }
    else {
        const mod4 = year % 4;
        const mod100 = year % 100;
        
        if (mod4 == 0) {
            if (mod100 != 0) {
                esBisiesto = true;
            }
        }
    }
    
    if(esBisiesto) { //esBisiesto == true
        pMessage.innerHTML = year + ' es bisiesto';
    }
    else { // esBisiesto == false
        pMessage.innerHTML = year + ' NO es bisiesto';
    }

}


