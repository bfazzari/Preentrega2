// VARIABLES GLOBALES
let totalFinal = 0;

// FUNCION para generar el total de la cena
function total_parcial_cena(beb, com) {
    return (beb + com);
}

function pago_efectivo(pagoParcial) {
    totalFinal = pagoParcial - (pagoParcial * .10);
    return totalFinal;
}

function filtrarPorMozo(objMesa) {
    return objMesa.numMozo == numeroMozo;
}

//////////////////////////////////////////////////////////////////////////

let listaMesas = [];
let mozo = "";
let valorBedida = 1000;
let valorMenu = 5000;

//CONSTRUCTOR NUEVA MESA

class Mesa {

    constructor(numMesa, numMozo, cantComensales, cantMenues) {
        this.numMesa = numMesa;
        this.numMozo = numMozo;
        this.cantComensales = cantComensales;
        this.cantMenues = cantMenues;
        this.totalFinal = 0;
    }
    calcularTotal(cantMenues) {
        this.totalFinal = cantMenues * valorMenu;
    }
    getMesasAbiertas() {
        console.log("----------------------");
        console.log("Mozo: ", this.numMozo);
        console.log("Mesa N°: ", this.numMesa);
        console.log("Total consumido: $", this.totalFinal);
        console.log("----------------------");
    }
}
//////////////////////////////////////////////////////////////////////////
while (mozo != "CERRAR") {
    console.log("ALASKA RESTO");
    console.log("");
    mozo = prompt("Indique número de mozo (1 o 2) o CERRAR para dejar de cargar");

    if (mozo != "CERRAR") {

        let numMozo = mozo;

        if (numMozo=="1"){
            alert("Hola Juan Carlos");
        }else if(numMozo=="2"){
            alert("Hola Julieta");
        }
        let numMesa = prompt("Ingrese Número de mesa");
        let cantComensales = prompt("Ingrese la cant de comensales");
        let cantMenues = prompt("Ingrese la cant de menues que van a consumir");
        let montoParcialMesa = cantMenues * valorMenu;

        // CREO UN NUEVO OBJETO MESA - CREO UNA MESA NUEVA

        let objMesa = new Mesa(numMesa, numMozo, cantComensales, cantMenues);
        objMesa.calcularTotal(cantMenues);
        listaMesas.push(objMesa);
        console.log("La mesa se agregó exitosamente");
        alert("Nueva Mesa creada N°: " + objMesa.numMesa);
    }
    console.log(listaMesas);
}
//VER MESAS
    let menuOpciones = prompt("1- Ver todas las mesas abiertas 2- Ver mesas asignadas por mozo");
    let numeroMozo;
    if (menuOpciones == "1") {
        console.log("-------- Listado de mesas abiertas --------");
        for (let mesa of listaMesas) {
            mesa.getMesasAbiertas();
        }
    }
    else if (menuOpciones == "2") {
        numeroMozo = prompt("Ingresa el número de mozo por filtrar mesas");
        let filtroMozoPorMesa = listaMesas.filter(filtrarPorMozo);
        if (filtroMozoPorMesa.length != 0) {
            console.log("--------Mesas por Mozo --------");
            for (let mesa of filtroMozoPorMesa) {
                mesa.getMesasAbiertas();
            }
            console.log("-------------------------------------------");
        }
        else {
            console.log("No hay mesas asignadas al mozo ", numeroMozo);
        }
    }