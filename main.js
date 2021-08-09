class DatosReserva{
    constructor(pCancha, pPrecio, pHorario){
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

let op = 0;
let senia = 0;

function test(){
    let uNombre = prompt("Ingrese su nombre: ");
    let uApellido = prompt("Ingrese su apellido: ");
    let uDomicilio = prompt("Ingrese su domicilio: ");
    op = parseInt(MostrarOpciones());

    let miUser = new User(uNombre, uApellido, uDomicilio);
    let miReserva = new Reserva(CalcularReserva(op), miUser);
        console.log("Seleccionó la opcion: ", op);
    senia = MontoSenia();

    miReserva.mostrarReserva();

    if (senia != 0){
        miReserva.datosReserva.precio -= senia;
        alert("Ingresó $" + senia + " de seña, el total a pagar es: $" + miReserva.datosReserva.precio);
    }
    else{
        alert("El monto a pagar es $" + pr);    
    }
}


//Llamada a la funcion test
test()
