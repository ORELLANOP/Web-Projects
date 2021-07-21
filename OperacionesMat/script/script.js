const inputNumero1 = document.querySelector('#numero1');
const inputNumero2 = document.querySelector('#numero2');

const respuestaSuma = document.querySelector('#suma');
const respuestaDivision = document.querySelector('#division');
const respuestaPositivo = document.querySelector('#numeroPositivo');

function sumarNumeros() {
    //const suma2 = inputNumero1.value*1 + inputNumero2.value*1;
    const suma = parseInt(inputNumero1.value) + parseInt(inputNumero2.value);

    respuestaSuma.innerHTML = suma;
}

function dividirNumeros() {

    if ( parseInt(inputNumero2.value) != 0 ) {
        const dividir = parseInt(inputNumero1.value) / parseInt(inputNumero2.value);
        respuestaDivision.innerHTML = dividir;
    }
    else {
        respuestaDivision.innerHTML = "No se puede dividir por 0";
    }
}

function numeroPositivo() {
    // Tomar el inputNumero1 y decir si es positivo o negativo
    
    // Mostrar el valor positivo del numero ingresado en inputNumero1

    //Operadores logicos
    // distinto de !=
    // igual a ==
    // mayor a >
    // menor que <
    // mayor o igual a >=
    // menor o igual que <=

    // Si x >= 0 => x
    // Si x < 0 => x * (-1)


    // Forma 1
    if (parseInt(inputNumero1.value) < 0){
        respuestaPositivo.innerHTML = parseInt(inputNumero1.value) * (-1);
    }
    else {
        respuestaPositivo.innerHTML = inputNumero1.value;
    }


    // Forma 2
    const positivo = parseInt(inputNumero1.value);
    let mensaje = '';

    if ( positivo < 0 ) {
        mensaje = positivo * (-1);
    }
    else {
        mensaje = positivo;
    }

    respuestaPositivo.innerHTML = mensaje;


    // Forma 3
    const numeroEvaluar = parseInt(inputNumero1.value);
    let mensaje2 = numeroEvaluar;

    if (numeroEvaluar < 0){
        mensaje2 = numeroEvaluar * (-1);
    }

    respuestaPositivo.innerHTML = mensaje2;


    // Forma 4
    let mensaje3 = parseInt(inputNumero1.value);

    if (mensaje3 < 0){
        mensaje3 = mensaje3 * (-1);
    }

    respuestaPositivo.innerHTML = mensaje3;

}

function diaDeLaSemana() {
    const dia = document.querySelector('#dia');
    const mensaje = document.querySelector('span');

    if(parseInt(dia.value) == 1){
        mensaje.innerHTML = "Lunes";
    }

    if(parseInt(dia.value) == 2 ) {
        mensaje.innerHTML = "Martes";
    }

    if(parseInt(dia.value) == 3 ) {
        mensaje.innerHTML = "Miercoles";
    }

    if(parseInt(dia.value) == 4 ) {
        mensaje.innerHTML = "Jueves";
    }

    if(parseInt(dia.value) == 5 ) {
        mensaje.innerHTML = "Viernes";
    }

    if(parseInt(dia.value) == 6 ) {
        mensaje.innerHTML = "Sabado";
    }

    if(parseInt(dia.value) == 7 ) {
        mensaje.innerHTML = "Domingo";
    }
    
    if(parseInt(dia.value) > 7) {
        mensaje.innerHTML = "No es un dia de la semana"
    }

    if(parseInt(dia.value) < 1) {
        mensaje.innerHTML = "No es un dia de la semana"
    }

}