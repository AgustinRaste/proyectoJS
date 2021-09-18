function listarReservas(){
    $(".cuerpoTabla").empty();

    let n = 0;
    // let arrReservas = localStorage.getItem("reservasJSON");
    // console.log(localStorage.getItem("reservasJSON"));

    // let user = sessionStorage.getItem("miUserJSON");
    // console.log(user)
    let reservasJSON = sessionStorage.getItem("reservasJSON");
    console.log(reservasJSON);
    let miUserJSON = sessionStorage.getItem("miUserJASON");
    let arrReservas = JSON.parse(reservasJSON);
    console.log("reservas: ");
    console.log(arrReservas);
    let miUser = JSON.parse(miUserJSON);
    n = arrReservas.length;
    // let cancha = "";
    console.log(n);
    console.log(arrReservas.length);
    for( let i = 0; i < arrReservas.length; i++){
        console.log("Entra al for")
        let datos = arrReservas[i].datosReserva;
        let usuario = JSON.parse(arrReservas[i].usuario);
        let = dispUser = usuario.nombre + " " + usuario.apellido;
        console.log(usuario.nombre);
        console.log(datos);
        if (datos.cancha == '1'){
            cancha = "Futbol";
        }
        else if (datos.cancha == '2'){
            cancha = "Tenis";
        }
        else if (datos.cancha == '3'){
            cancha = "Paddle";
        }

        $(".cuerpoTabla").append(`  <tr>
                                        <th scope="row">${datos.nroReserva}</th>
                                        <td>${dispUser}</td>
                                        <td>${cancha}</td>
                                        <td>${datos.horario}</td>
                                        <td>${datos.precio}</td>
                                    </tr>`);


    }
    
}

function eliminarReserva(){
    let reservasJSON = sessionStorage.getItem("reservasJSON");
    let arrReservas = JSON.parse(reservasJSON);
    
    console.log(arrReservas);
    
    let eliminar = parseInt(prompt("Que elemento desea eliminar? "));

    for(let i = 0; i < arrReservas.length; i++){
        datos = arrReservas[i].datosReserva;
        if (eliminar == datos.nroReserva){
            console.log("----INDICE DEL NUMERO BUSCADO___")
            console.log(i)
            arrReservas.splice(i, 1);
            break
        }
    }
    reservasJSON = JSON.stringify(arrReservas);
    sessionStorage.setItem("reservasJSON", reservasJSON);
    listarReservas()
}


// inicio del programa
function test(){

    listarReservas();
    $("#btnEliminar").on("click", eliminarReserva);
}


test();






// Ver la funcionlistar reservas, se tiene que tomar el array JSOn que esta en el session storage y 
// usarlo para listar las reservas en la tabla
// Ahora me tira un bardo con el tema de la conversion a JSOn