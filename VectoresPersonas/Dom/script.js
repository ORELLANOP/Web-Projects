
/*
// Paso 1 creo los nodos
const nodoH1 = document.createElement('h1');
const nodoH1Texto = document.createTextNode('HOla Mundo!');
// Paso 2 enlazo los nodos creados
nodoH1.appendChild(nodoH1Texto);
// Paso 3 insertar el nuevo nodo enlazado dentro del DOM
// Enlazarlo en body
document.body.appendChild(nodoH1);
// Enlazarlo en otra etiqueta
// PASO A: tomar esa etiqueta
const nav = document.querySelector('.nav');
// PASO B: inserto el nodo
nav.appendChild(nodoH1);

*/

const persona1 = {
    nombre: "Lorena",
    edad: 43
}
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);
const vectorEjemplo = [1, 2, 3, 4];
/*
            <tr>
                <td>Lorena</td>
                <td>43</td>
            </tr>
            <tr>
                <td>Franco</td>
                <td>21</td>
            </tr>
*/
const personas = [
    {
        nombre: "Lorena",
        edad: 43
    },
    {
        nombre: "Franco",
        edad: 21
    }
];
/*
<tr>
    <td>Lorena</td> 
    <td>43</td>
</tr>
*/
//<tr></tr>
const tr1 = document.createElement('tr');
//<td></td>
const td1 = document.createElement('td');
//Lorena
const td1Txt = document.createTextNode(personas[0].nombre);
//<td>Lorena</td>
td1.appendChild(td1Txt);
//<td></td>
const td2 = document.createElement('td');
//43
const td2Txt = document.createTextNode(personas[0].edad);
//<td>43</td>
td2.appendChild(td2Txt);
//<tr> <td>Lorena</td> </tr>
tr1.appendChild(td1);
/*
<tr>
    <td>Lorena</td> 
    <td>43</td>
</tr>
*/
tr1.appendChild(td2);
const tbody = document.querySelector('tbody');
tbody.appendChild(tr1);



/*
<tr>
    <td>Franco</td> 
    <td>21</td>
</tr>
*/

const tr2 = document.createElement('tr');
//<td></td>
const td3 = document.createElement('td');
//Lorena
const td3Txt = document.createTextNode(personas[1].nombre);
//<td>Lorena</td>
td3.appendChild(td3Txt);
//<td></td>
const td4 = document.createElement('td');
//43
const td4Txt = document.createTextNode(personas[1].edad);
//<td>43</td>
td4.appendChild(td4Txt);
//<tr> <td>Lorena</td> </tr>
tr2.appendChild(td3);
/*
<tr>
    <td>Lorena</td> 
    <td>43</td>
</tr>
*/
tr2.appendChild(td4);
//const tbody = document.querySelector('tbody');
tbody.appendChild(tr2);