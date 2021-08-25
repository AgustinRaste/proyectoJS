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
    document.getElementById("nombreUser").innerHTML = uNombre.value + " " + uApellido.value;
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

    document.getElementById("selecCancha").setAttribute("disabled", "");
    document.getElementById("selecHora").setAttribute("disabled", "");
    document.getElementById("montoSenia").setAttribute("disabled", "");

    
}



function agregarReserva(){


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
    
    datos = "<p>Cancha: " + cancha + "</p>" + "<p>Hora: " + miDatosReserva.horario + "</p>" + "<p>$" + miDatosReserva.precio + "</p>" + "<hr/>"
    var elementoReservas = document.createElement("div");
    elementoReservas.innerHTML = datos;
    document.getElementById("reservas").appendChild(elementoReservas);
    btnReservar.setAttribute("style", "display: none");


    let horario = document.getElementById(miDatosReserva.horario);
    horario.setAttribute("disabled", " ");

}



function agregarUser(user){
    document.getElementById("nombreUser").innerHTML = user.nombre + " " + user.apellido;
}


function test(){
    // Seteo y entrada de datos
    let btnConfirmar = document.getElementById("btnConfirmar");
    let btnReservar = document.getElementById("btnReservar");
    let btnReset = document.getElementById("btnReset");
    let btnCalcular = document.getElementById("btnCalcular");
    
    document.getElementById("selecCancha").setAttribute("disabled", "")
    document.getElementById("selecHora").setAttribute("disabled", "")
    document.getElementById("montoSenia").setAttribute("disabled", "");

    // se esconde el boton de reset hasta que se ingresen los datos
    btnReset.setAttribute("style", "display: none");
    btnReservar.setAttribute("style", "display: none");


    // EVENTOS DE BOTONES
    btnConfirmar.addEventListener("click", confirmarUser);
    btnReservar.addEventListener("click", agregarReserva);
    btnReset.addEventListener("click", accionesReset);
    btnCalcular.addEventListener("click", calcularReserva);

    let miDatosReserva = JSON.parse(sessionStorage.getItem("miDatosReservaJSON"));

    let precio = document.getElementById("displayPrecio");
    precio.innerHTML = document.getElementById("selecCancha").value;









//     do{
//         do{
//             let op = document.getElementById("selecCancha").getAttribute("value");
//             let datosReserva = CalcularReserva(op);
//             var miReserva = new Reserva(datosReserva, miUser);
//             // Esta parte va a ir en una funcion en la proxima version
//             // senia = MontoSenia();
            
//             // if (senia != 0){
//             //     miReserva.precio -= senia;
//             //     alert("Ingresó $" + senia + " de seña, el total a pagar es: $" + miReserva.precio);
//             // }
//             // else{
//             //     alert("El monto a pagar es $" + miReserva.precio);    
//             // }
//             // hasta aca! Para crear una funcion especifica que calcule la seña
            
//             console.log(miReserva);
//             ctrl = prompt("Confirma los datos de la reserva? s/n: ");
//         }while(ctrl == 'n');
//         console.log("Hasta aca llega");
//         arrayReservas.push(miReserva);
//         agregarReserva(miReserva);
//         ctrl = prompt("Desea agregar otra reserva? s/n: ");
//     }while(ctrl == 's');
//     // Al tener una asignacion necesaria antes de evaluar las condiciones,
//     // esto me permite reutilziar la variable ctrl para hacer el control de
//     // flujo.
//     console.log("Lsita de reservas creadas: ");
//     console.log(arrayReservas);
//     ctrl = prompt("Desea ordenar las reservas seguin el horario? s/n: ");
//     if (ctrl == 's'){
//         console.log("Array Ordenado: ");
//         arrayReservas.sort((a, b) => a.horario - b.horario);
//         console.log(arrayReservas);
//     }else{
//         console.log(arrayReservas);
//     }
//     console.log("El programa termina")
}


//Llamada a la funcion test
test()