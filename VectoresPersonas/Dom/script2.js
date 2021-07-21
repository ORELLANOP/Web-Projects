const personas = [
    {
        nombre: "Lorena",
        edad: 43
    },
    {
        nombre: "Franco",
        edad: 21
    },
    {
        nombre: "Alicia",
        edad: 12
    },
    {
        nombre: "Hernan",
        edad: 34
    },
    {
        nombre: "Lorena",
        edad: 43
    },
    {
        nombre: "Franco",
        edad: 21
    },
    {
        nombre: "Alicia",
        edad: 12
    },
    {
        nombre: "Hernan",
        edad: 34
    }

];


const tbody = document.querySelector('tbody');

/*
            <tr>
                <td>Franco</td>
                <td>21</td>
            </tr>
*/

personas.forEach(persona => {
    const tr = document.createElement('tr');

    const tdNombre = document.createElement('td');
    const tdNombreTxt = document.createTextNode(persona.nombre);
    tdNombre.appendChild(tdNombreTxt);
    tr.appendChild(tdNombre);
    
    const tdEdad = document.createElement('td');
    const tdEdadTxt = document.createTextNode(persona.edad);
    tdEdad.appendChild(tdEdadTxt);
    tr.appendChild(tdEdad);

    tbody.appendChild(tr);
});