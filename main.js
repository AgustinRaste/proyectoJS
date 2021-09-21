// Autor: AgustinRaste


class DatosReserva{
    constructor(pNroReserva, pCancha, pPrecio, pHorario){
        this.nroReserva = pNroReserva;
        this.cancha = pCancha;
        this.precio = pPrecio;
        this.horario = pHorario;
    }
}



class Reserva{
    constructor(pDatosReserva, pUsuario){
        this.datosReserva = pDatosReserva;
        this.usuario = pUsuario;
    }

    mostrarReserva(){
        console.log(this);
    }
    altaReserva(){
        console.log("Reserva creada");
    }
    bajaReserva(){
        console.log("Reserva eliminada");
    }
}


class User{
    constructor(pNombre, pApellido, pDomicilio){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.domicilio = pDomicilio; 
    }

    mostrarDatos(){
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.domicilio);
    }

    altaUsuario(){
        console.log("Usuario creado")
    }
    bajaUsuario(){
        console.log("Usuario eliminado")
    }

}

class Cancha{
    constructor(pId, pNombre, pHorarios, pDescripcion){
        this.id = pId;
        this.nombre = pNombre;
        this.horarios = pHorarios;
        this.descripcion = pDescripcion;
    }
}







function calcularReserva(){
    let seleccion = document.getElementById("selecCancha") 
    let montoSenia = document.getElementById("montoSenia").value;
    let cancha = seleccion.value;
    let precio = 0
    let nroReserva = Math.trunc((Math.random() * (999 - 0) + 0)) ; 

    if (cancha == '1'){
        precio = 900;
        precioFinal = 900 - parseInt(montoSenia);
    }
    else if (cancha == '2'){
        precio = 800;
        precioFinal = 800 - parseInt(montoSenia);
    }
    else if (cancha == '3'){
        precio = 700;
        precioFinal = 700 - parseInt(montoSenia);
    }


    horario = document.getElementById("selecHora").value;
    cancha = seleccion.value;
    
    document.getElementById("displayPrecio").innerHTML = "$" + precio;
    document.getElementById("displaySenia").innerHTML = "$" + montoSenia;
    document.getElementById("displayPrecioFinal").innerHTML = "$" + precioFinal;
    

    let miDatosReserva = new DatosReserva(nroReserva, cancha, precioFinal, horario)
    const miDatosReservaJSON = JSON.stringify(miDatosReserva);
    sessionStorage.setItem("miDatosReservaJSON", miDatosReservaJSON);

    document.getElementById("btnReservar").setAttribute("style", " ");
}

function MontoSenia(){
    let senia = 0;
    senia = parseInt(prompt("Si desea señar el turno ingrese el monto de la misma (ingrese 0 para indicar que no entrega seña): "))
    return senia;
}

function confirmarUser(){
    $("#datosReserva").fadeIn(1000, function (){    $("#btnReset").fadeIn(1500);} )

    $("#btnConfirmar").fadeOut(1000);

    let uNombre = document.getElementById("nombreUserIn");
    let uApellido = document.getElementById("apellidoUserIn");
    let uDomicilio = document.getElementById("domicilioUserIn");
    let btnReset = document.getElementById("btnReset");

    let miUser = new User(uNombre.value, uApellido.value, uDomicilio.value);

    const miUserJSON = JSON.stringify(miUser);
    // Guardo los datos en un session storeage para consultarlos despues
    // en el main
    sessionStorage.setItem("miUserJSON", miUserJSON);
    


    console.log("Usuario ingresado!");
    $("#nombreUser").text(uNombre.value + " " + uApellido.value);
    uNombre.setAttribute("disabled", " ");
    uApellido.setAttribute("disabled", " ");
    uDomicilio.setAttribute("disabled", " ");

    document.getElementById("selecCancha").removeAttribute("disabled", "");
    document.getElementById("selecHora").removeAttribute("disabled", "");
    document.getElementById("montoSenia").removeAttribute("disabled", "");

}

// En esta funcion se valida la entrada de datos, estableciento un limite inferior y uno superior (Ambos incluidos)


function accionesReset(){
    $("#btnConfirmar").fadeiN(1000);
    let btnReset = document.getElementById("btnReset");
    btnReset.setAttribute("style", "display: none");

    document.getElementById("nombreUserIn").value = " ";
    document.getElementById("apellidoUserIn").value = " ";
    document.getElementById("domicilioUserIn").value = " ";

    document.getElementById("nombreUserIn").removeAttribute("disabled", " ");
    document.getElementById("apellidoUserIn").removeAttribute("disabled", " ");
    document.getElementById("domicilioUserIn").removeAttribute("disabled", " ");

    $("#selecCancha").attr("disabled", "");
    $("#selecHora").attr("disabled", "");
    $("#montoSenia").attr("disabled", "");

    document.getElementById("selecCancha").value = " ";
    document.getElementById("selecHora").value = " ";
    document.getElementById("montoSenia").value = " ";

    $("#datosReserva").fadeOut(1000);
    $("#reservas").fadeOut(1000);
    $("div").remove(".reservaCreada");




}



function agregarReserva(){
    
    let reservasJSON = sessionStorage.getItem("reservasJSON");
    let arrReservas = JSON.parse(reservasJSON);
    let miUser = sessionStorage.getItem("miUserJSON");
    console.log(miUser)



    $("#reservas").slideDown(500)

    let miDatosReserva = JSON.parse(sessionStorage.getItem("miDatosReservaJSON"));
    
    if (miDatosReserva.cancha == '1'){
        cancha = "Futbol";
    }
    else if (miDatosReserva.cancha == '2'){
        cancha = "Tenis";
    }
    else if (miDatosReserva.cancha == '3'){
        cancha = "Paddle";
    }
    
    // Se agrega la reserva a la lista
    $("#reservas").append(`<div class="reservaCreada">
                            <p>Numero de Reserva: ${miDatosReserva.nroReserva} </p> 
                            <p>Cancha: ${cancha} </p> 
                            <p>Hora: ${miDatosReserva.horario}</p>
                            <p>$ ${miDatosReserva.precio}</p>
                            <hr/>
                            </div>`);

    // Agregar reserva al arreglo JSON para luego levantarla en la tabla de reservas creadas
    let nuevaReserva = new Reserva(miDatosReserva, miUser)
    arrReservas.push(nuevaReserva);
    reservasJSON = JSON.stringify(arrReservas);
    sessionStorage.setItem("reservasJSON", reservasJSON);

    console.log(nuevaReserva);

    
    
    
    btnReservar.setAttribute("style", "display: none");

}


function listarHorarios(){
    let seleccion = $("#selecCancha").val();
    const URLJSON = "canchas.json";
    let horariosReservadosF = new Array();
    let horariosReservadosT = new Array();
    let horariosReservadosP = new Array();
    // Traigo el array de reservas para comparar contra los horarios ya reservados
    let reservasJSON = sessionStorage.getItem("reservasJSON");
    let arrReservas = JSON.parse(reservasJSON);
    let n = arrReservas.length;
 
    // Aplico este metodo para borrar los options cargados en otra ocasion 
    $("#selecHora").empty();

    
    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
            let misDatos = respuesta;

            let horariosDisp = misDatos[seleccion - 1].horarios
            
            
            if (seleccion == '1'){
                for(let i = 0; i < n; i++){
                    let datos = arrReservas[i].datosReserva;
                    if(datos.cancha == '1'){
                        horariosReservadosF.push(datos.horario)
                    }
                }

                // Listar solo los horarios que no fueron reservados
                for (const horario in horariosDisp){ 
                    if(horariosReservadosF.indexOf(horariosDisp[horario].toString()) == -1){
                        $("#selecHora").append(`<option>${horariosDisp[horario]}</option>`);
                    }
                    else{
                        $("#selecHora").append(`<option disabled>${horariosDisp[horario]}</option>`)  
                    }
                    
                }
            }
            if (seleccion == '2'){

                for(let i = 0; i < n; i++){
                    let datos = arrReservas[i].datosReserva;
                    if(datos.cancha == '2'){
                        horariosReservadosT.push(datos.horario)
                    }
                }
                
                // Listar solo los horarios que no fueron reservados
                for (const horario in horariosDisp){ 
                    if(horariosReservadosT.indexOf(horariosDisp[horario].toString()) == -1){
                        $("#selecHora").append(`<option>${horariosDisp[horario]}</option>`);
                    }
                    else{
                        $("#selecHora").append(`<option disabled>${horariosDisp[horario]}</option>`)  
                    }
                    
                }
                
            }
            if (seleccion == '3'){

                for(let i = 0; i < n; i++){
                    let datos = arrReservas[i].datosReserva;
                    if(datos.cancha == '3'){
                        horariosReservadosP.push(datos.horario)
                    }
                }
                // Listar solo los horarios que no fueron reservados
                for (const horario in horariosDisp){ 
                    if(horariosReservadosP.indexOf(horariosDisp[horario].toString()) == -1){
                        $("#selecHora").append(`<option>${horariosDisp[horario]}</option>`);
                    }
                    else{
                        $("#selecHora").append(`<option disabled>${horariosDisp[horario]}</option>`)  
                    }
                    
                }
                
            }
        };
    });

};


function test(){
    // Solo genera un nuevoa rreglo si estuviera vacio el local
    if(sessionStorage.length == 0){
        var arrReservas = new Array();
        reservasJSON = JSON.stringify(arrReservas);
        sessionStorage.setItem("reservasJSON", reservasJSON);
    }

    $("#datosUser").fadeIn(1000);

    // se esconde el boton de reset hasta que se ingresen los datos

    $('#btnReservar').attr("style", "display: none");
    $('#btnReset').attr("style", "display: none");
    // EVENTOS DE BOTONES
    $("#btnConfirmar").on("click", confirmarUser);
    $('#btnReservar').on("click", agregarReserva);
    $('#btnReset').on("click", accionesReset);
    $('#btnCalcular').on("click", calcularReserva);
    $('#selecCancha').change( listarHorarios);


}


//Llamada a la funcion test
test();