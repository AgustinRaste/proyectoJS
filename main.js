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






function CalcularReserva(o){
    let precio;
    let hr;
    let horario;


    switch(o){
        case 1:
            alert("CANCAH DE FUTBOL \n $900/h");
            horario = prompt("Ingrese el horario que desea reservar: "); 
            hr = parseInt(prompt("Ingrese la cantidad de horas: "));
            precio = 900 * hr;
            cancha = 'Futbol'            
            alert("El precio total es: " + precio);
            break;
        case 2:
            alert("CANCHA DE TENIS \n $800/h");
            horario = prompt("Ingrese el horario que desea reservar: "); 
            hr = parseInt(prompt("Ingrese la cantidad de horas: "));
            precio = 800 * hr;
            cancha = 'Tenis'              
            alert("El precio total es: " + precio);
            break;
        case 3:
            alert("CANCHA DE PADDLE \n $700/h");
            horario = prompt("Ingrese el horario que desea reservar: "); 
            hr = parseInt(prompt("Ingrese la cantidad de horas: "));
            precio = 700 * hr;
            cancha = 'Paddle'              
            alert("El precio total es: " + precio);
            break;

    }

    let miDatosReserva = new DatosReserva(cancha, precio, horario)
    return miDatosReserva;
}

function MostrarOpciones(){
    let o;
    o = prompt("SELECCIONE UNA OPCION: \n \t 1- FUTBOL \n \t 2- TENIS \n \t 3- PADDLE")
    return o;
}

function MontoSenia(){
    let senia = 0;
    senia = parseInt(prompt("Si desea señar el turno ingrese el monto de la misma (ingrese 0 para indicar que no entrega seña): "))
    return senia;
}

function ingresarUser(){
    alert("INGRESAR DATOS DE USUARIO, PRESIONE ACEPTAR");
    let uNombre = prompt("Ingrese su nombre: ");
    let uApellido = prompt("Ingrese su apellido: ");
    let uDomicilio = prompt("Ingrese su domicilio: ");
    let miUser = new User(uNombre, uApellido, uDomicilio);

    return miUser;

}



function test(){
    // Seteo y entrada de datos
    let arrayReservas = new Array();
    let senia = 0;
    let ctrl = 's';
    let miUser = ingresarUser();


    do{
        do{
            let op = parseInt(MostrarOpciones());
            let datosReserva = CalcularReserva(op);
            var miReserva = new Reserva(datosReserva, miUser);
            // Esta parte va a ir en una funcion en la proxima version
            senia = MontoSenia();
            
            if (senia != 0){
                miReserva.precio -= senia;
                alert("Ingresó $" + senia + " de seña, el total a pagar es: $" + miReserva.precio);
            }
            else{
                alert("El monto a pagar es $" + miReserva.precio);    
            }
            // hasta aca! Para crear una funcion especifica que calcule la seña
            
            console.log(miReserva);
            ctrl = prompt("Confirma los datos de la reserva? s/n: ");
        }while(ctrl == 'n');
        console.log("Hasta aca llega");
        arrayReservas.push(miReserva);
        ctrl = prompt("Desea agregar otra reserva? s/n: ");
    }while(ctrl == 's');
    // Al tener una asignacion necesaria antes de evalucar las condiciones,
    // esto me permite reutilziar la variable ctrl para hacer el control de
    // flujo.
    console.log("Lsita de reservas creadas: ");
    console.log(arrayReservas);
    ctrl = prompt("Desea ordenar las reservas seguin el horario? s/n: ");
    if (ctrl == 's'){
        console.log("Array Ordenado: ");
        arrayReservas.sort((a, b) => a.horario - b.horario);
        console.log(arrayReservas);
    }else{
        console.log(arrayReservas);
    }
    console.log("El programa termina")
}


//Llamada a la funcion test
test()
