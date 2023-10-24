//TAREA 1 ---------------------------------------------------------------------------------------------------------------------------------
//Localizar y añadir evento al boton del nickname
const buttonNickname = document.querySelector("#buttonNickname").addEventListener('click', modificaNick);

function modificaNick(){

    //Capturar el valor de input
    const valueNickname = document.querySelector("#nickname").value;

    if(valueNickname == ""){
        alert("Perdona el nickname está vacio...");
    } else {

        //Eliminar los espacios
        let finalNickname = valueNickname.trim();
        //Reemplazar espacio por _
        finalNickname = finalNickname.replaceAll(" ", "_");
        //Volver mayusculas
        finalNickname = finalNickname.toUpperCase();
    
        document.querySelector("#resultadoNickname").innerHTML = finalNickname;
    }
}

//TAREA 2 ---------------------------------------------------------------------------------------------------------------------------------
//Localizar y añadir evento al boton de fechas

const buttonDate = document.querySelector("#buttonDate").addEventListener('click', modificaData);

function modificaData(){
    // console.log("1973/04/13 00:00:00");
    const date = document.querySelector("#date").value;
    //console.log(date);
    
    if(date == ""){
        alert("Perdona la fecha está vacia...");
    } else {
        
        // RESULTADO FINAL: 27 enero 2022 - 18:05:12
        //Transformo la fecha en objeto
        let finalDate = new Date(date);
        //Declaro array de meses
        const allMonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        //Extraigo el dia
        const finalDay = finalDate.getDate();
        //Extraigo el mes
        const finalMonth = allMonth[finalDate.getMonth()];
        //Extraigo el año
        const finalYear = finalDate.getFullYear();
        //Extraigo el tiempo
        let finalTime = finalDate.toTimeString();
        finalTime = finalTime.split(' ')[0];

        //Creo el formato
        finalDate = finalDay + " " + finalMonth + " " + finalYear + " - " + finalTime;
        //Inserto el resultado
        document.querySelector("#resultadoDate").innerHTML = finalDate;
    }
}

//Función modificaData2 recibe un objeto fecha
modificaData2(new Date("2017/12/23 00:00:00"));

    function modificaData2(date){
        // RESULTADO FINAL: 23/12/17 03:24:00
        
            //Extraigo el dia
            const finalDay = date.getDate();
            //Extraigo el mes
            const finalMonth = date.getMonth()+1;
            //Extraigo el año
            const finalYear = date.getFullYear();
            //Extraigo el tiempo
            let finalTime = date.toTimeString();
            finalTime = finalTime.split(' ')[0];

            //Creo el formato
            date = finalDay + "/" + finalMonth + "/" + finalYear + " " + finalTime;
            //Inserto el resultado
            console.log("Fecha de modificaData2:",date);
    }

//TAREA 3 ---------------------------------------------------------------------------------------------------------------------------------

//Función dias()
const dataText = "2023-10-23T03:24:00";
//Esta función recibe un objeto tipo date
dias(new Date(dataText));

function dias(dataText){
    //Recojo el dia de hoy
    dataCurrent = new Date();
    //Calculo los dias que hay entre cada fecha Fuente: https://lenguajejs.com/javascript/fechas/date-fechas-nativas/
    //Calculo son 1000 milisegundos * segundos por horas * horas del dia
    dayBetween = Math.floor(Math.abs(dataCurrent.getTime() - dataText.getTime()) / (1000 * 3600 * 24) );
     console.log("Días transcurridos respecto a la fecha actual:",dayBetween);
}

//TAREA 4 ---------------------------------------------------------------------------------------------------------------------------------

//Declarar array de objetos de ejemplo
const dades = {
    partidas: [
    {
        avatar: "imagen1.png",
        nick: "MANOLO",
        puntuacion: 124561,
        fecha: "23/12/05T12:12:00",
    },
    {
        avatar: "imagen2.png",
        nick: "PEDRA",
        puntuacion: 1561,
        fecha: "23/09/05T13:12:00",
    },
    ],
    ranking: [
    {
        avatar: "imagen1.png",
        nick: "MANOLO",
        puntuacion: 124561,
    },
    {
        avatar: "imagen2.png",
        nick: "PEDRA",
        puntuacion: 1561,
    },
        ],
    };

//Se inicializa porque en la tarea 5 requerimos de que dicha variable en localStorage ya exista
setDades(dades);
    
    //Funcion que guarda los datos en localStorage
    function setDades(dades){
        //Convertir el objeto en String
        const textoObjeto = JSON.stringify(dades);
        console.log("Este es el texto del objeto:",textoObjeto);
        //Guardamos en localstorage
        localStorage.setItem('tetris_dades', textoObjeto);
    }


    //Funcion para retornar los datos del localStorage
    function getDades(){

        //Comprobar si existen los datos
        if (localStorage.getItem('tetris_dades') === null) {
            alert("Estos datos no estan guardados en el localStorage");
        } else {
            //Recuperarmos la variable creada
            const textoLocal = localStorage.getItem('tetris_dades')
            //Reconversión a objeto
            const objetoLocal = JSON.parse(textoLocal);

            console.log("Este es el objeto:",objetoLocal);

            return objetoLocal;

        }
    }

//TAREA 5 ---------------------------------------------------------------------------------------------------------------------------------

partida = {
    avatar: "imagen2.png",
    nick: "BEITA",
    puntuacion: 4234,
    fecha: "23/09/05T13:12:00",
};

registraPartidas(partida);

function registraPartidas(partida){
    //Llamamos a la función getDades para obtener el objeto almacenado
    let allPartidas = getDades();
    //Añadimos el objeto en su lugar correspondiente
    allPartidas["partidas"].push(partida);
    //Finalmente añadimos la nueva partida y la variable se actualiza
    setDades(allPartidas);
}



