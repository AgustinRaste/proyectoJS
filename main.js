
class DatosReserva{
    constructor(pCancha, pPrecio, pHorario){
        this.cancha = pCancha;
        this.precio = pPrecio;
        this.horario = pHorario;
    }
}



class Reserva{
    constructor(pDatosReserva, pUsuario){
        this.cancha = pDatosReserva.cancha;
        this.horario = pDatosReserva.horario;
        this.precio = pDatosReserva.precio;
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






function calcularReserva(){
    let seleccion = document.getElementById("selecCancha") 
    let montoSenia = document.getElementById("montoSenia").value;
    cancha = seleccion.value;

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
    

    let miDatosReserva = new DatosReserva(cancha, precioFinal, horario)
    const miDatosReservaJSON = JSON.stringify(miDatosReserva);
    console.log(miDatosReservaJSON);
    sessionStorage.setItem("miDatosReservaJSON", miDatosReservaJSON);

    document.getElementById("btnReservar").setAttribute("style", " ");
    console.log(miDatosReserva);
    // agregarReserva(miDatosReserva)
}

function MontoSenia(){
    let senia = 0;
    senia = parseInt(prompt("Si desea señar el turno ingrese el monto de la misma (ingrese 0 para indicar que no entrega seña): "))
    return senia;
}

function confirmarUser(){
    $("#datosReserva").fadeIn(1000, $("#btnReset").fadeIn(1500)) 

    let uNombre = document.getElementById("nombreUserIn");
    let uApellido = document.getElementById("apellidoUserIn");
    let uDomicilio = document.getElementById("domicilioUserIn");
    let btnReset = document.getElementById("btnReset");

    let miUser = new User(uNombre.value, uApellido.value, uDomicilio.value);

    const miUserJSON = JSON.stringify(miUser);
    // Guardo los datos en un session storeage para consultarlos despues
    // en el main
    sessionStorage.setItem("miUserJASON", miUserJSON);
    


    console.log("Usuario ingresado!");
    $("#nombreUser").text(uNombre.value + " " + uApellido.value);
    // document.getElementById("nombreUser").innerHTML = uNombre.value + " " + uApellido.value;
    uNombre.setAttribute("disabled", " ");
    uApellido.setAttribute("disabled", " ");
    uDomicilio.setAttribute("disabled", " ");
    btnReset.setAttribute("style", " ");
    document.getElementById("selecCancha").removeAttribute("disabled", "");
    document.getElementById("selecHora").removeAttribute("disabled", "");
    document.getElementById("montoSenia").removeAttribute("disabled", "");
    console.log(miUser);


}

// En esta funcion se valida la entrada de datos, estableciento un limite inferior y uno superior (Ambos incluidos)


function accionesReset(){
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

}



function agregarReserva(){
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
    $("#reservas").append(`<p>Cancha: ${cancha} </p> 
                <p>Hora: ${miDatosReserva.horario}</p>
                <p>$ ${miDatosReserva.precio}</p>
                <hr/>`)
    
    
    btnReservar.setAttribute("style", "display: none");


    let horario = document.getElementById(miDatosReserva.horario);
    // $("#selecHora").remove(`<option id="22" value="22">22:00</option>`)
    console.log(horario)
    console.log(miDatosReserva.horario)
}



function agregarUser(user){
    $("#nombreUser").append("HOLA")
    // document.getElementById("nombreUser").innerHTML = user.nombre + " " + user.apellido;
}

// function listarHorarios(cancha){
//     let miDatosReserva = JSON.parse(sessionStorage.getItem("miDatosReservaJSON"));
    
//     if (miDatosReserva.cancha == '1'){
//         cancha = "Futbol";
//     }
//     else if (miDatosReserva.cancha == '2'){
//         cancha = "Tenis";
//     }
//     else if (miDatosReserva.cancha == '3'){
//         cancha = "Paddle";
//     }
// }


function test(){

    $("#datosUser").fadeIn(1000)
    // $("#datosReserva").slideDown(2000)


    // var horariosFutbol = new Array(20,25,26,27,28,29)
    // var horariosTenis = new Array(17,18,19)
    // var horariosPaddle = new Array(10,11,12,13,14)

    // Seteo y entrada de datos
   


    // se esconde el boton de reset hasta que se ingresen los datos

    $('#btnReservar').attr("style", "display: none");
    $('#btnReset').attr("style", "display: none");
    // EVENTOS DE BOTONES
    // btnConfirmar.addEventListener("click", confirmarUser);
    $("#btnConfirmar").on("click", confirmarUser);
    $('#btnReservar').on("click", agregarReserva);
    $('#btnReset').on("click", accionesReset);
    $('#btnCalcular').on("click", calcularReserva);
    
    let miDatosReserva = JSON.parse(sessionStorage.getItem("miDatosReservaJSON"));
    
    let precio = document.getElementById("displayPrecio");
    precio.innerHTML = document.getElementById("selecCancha").value;

}


//Llamada a la funcion test
test()