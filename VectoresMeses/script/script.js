const meses = [
    {
        mes: "Enero",
        dias: 31
    },
    {
        mes: "Febrero",
        dias: 28
    },
    {
        mes: "Marzo",
        dias: 30
    },
    {
        mes: "Abril",
        dias: 30
    },
    {
        mes: "Mayo",
        dias: 31
    },
    {
        mes: "Junio",
        dias: 30
    },
    {
        mes: "Julio",
        dias: 31
    },
    {
        mes: "Agosto",
        dias: 31
    },
    {
        mes: "Septiembre",
        dias: 30
    },
    {
        mes: "Octubre",
        dias: 31
    },
    {
        mes: "Noviembre",
        dias: 30
    },
    {
        mes: "Diciembre",
        dias: 31
    },
];



function crearTabla(modo) {
    //const trsOnHtml = document.querySelectorAll('tr');
    const trsOnHtml = document.querySelectorAll("tbody tr");
    const tbody = document.querySelector('tbody');

    //Impide que se sume una tabla bajo la otra, remueve la que ya esta creada
    trsOnHtml.forEach( (trItem)=> {
        tbody.removeChild(trItem);
        console.log(trItem);
    });


    meses.forEach((item, indice)=>{
        console.log(item, indice);

        const tr = document.createElement('tr');
        
        const tdMes = document.createElement('td');
        const tdMesTxt = document.createTextNode(item.mes);
        tdMes.appendChild(tdMesTxt);

        const tdDia = document.createElement('td');
        const tdDiaTxt = document.createTextNode(item.dias);
        tdDia.appendChild(tdDiaTxt);
        
        tr.appendChild(tdMes);
        tr.appendChild(tdDia);


        if(indice % 2 == 0){
            if(modo == 'base'){
                tr.className = 'trBase';
            }
            if(modo == 'diurno'){
                tr.className = 'trDiurnoClaro';
            }
            if(modo == 'nocturno'){
                tr.className = 'trNocturnoClaro';
            }
        }
        else {
            if(modo == 'base'){
                tr.className = 'trBase';
            }
            if(modo == 'diurno'){
                tr.className = 'trDiurnoOscuro';
            }
            if(modo == 'nocturno'){
                tr.className = 'trNocturnoOscuro';
            }
        }
        tbody.appendChild(tr);
    });
}


function modoDiurno() {
    const body =  document.querySelector('body');
    body.className = 'backgroundDiurno';
    crearTabla('diurno');
}


function modoNocturno(){
    const body =  document.querySelector('body');
    body.className = 'backgroundNocturno';
    crearTabla('nocturno');
}


function modoBase() {
    const body =  document.querySelector('body');
    body.className = 'backgroundBase';
    crearTabla('base');
}
















