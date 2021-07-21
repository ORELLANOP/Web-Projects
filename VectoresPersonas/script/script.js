var cuadrado = document.getElementById("cuadrado");
var estiloDelCuadrado = getComputedStyle(cuadrado);

//valores para el reset
var topInicial = "140px";
var leftInicial = "425px";


var posicionTop = parseInt(estiloDelCuadrado.top);
var posicionLeft = parseInt(estiloDelCuadrado.left);


function moverArriba(){
    posicionTop = posicionTop - 10;
    cuadrado.style.top = posicionTop + 'px';

}

function moverAbajo(){
    posicionTop = posicionTop + 10;
    cuadrado.style.top = posicionTop + 'px';

}

function moverDerecha(){
    posicionLeft = posicionLeft + 10;
    cuadrado.style.left = posicionLeft + 'px';

}


function moverIzquierda(){
    posicionLeft = posicionLeft - 10;
    cuadrado.style.left = posicionLeft + 'px';

}

function restart(){
    cuadrado.style.top = topInicial;
    cuadrado.style.left = leftInicial;
    posicionLeft = 425;
    posicionTop = 140;
}