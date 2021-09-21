// Autor: AgustinRaste

function listarReservas(){
    $(".cuerpoTabla").empty();

    let n = 0;
    let reservasJSON = sessionStorage.getItem("reservasJSON");
    let miUserJSON = sessionStorage.getItem("miUserJASON");
    let arrReservas = JSON.parse(reservasJSON);
    let miUser = JSON.parse(miUserJSON);
    n = arrReservas.length;
    // let cancha = "";
    for( let i = 0; i < arrReservas.length; i++){
        console.log("Entra al for")
        let datos = arrReservas[i].datosReserva;
        let usuario = JSON.parse(arrReservas[i].usuario);
        let = dispUser = usuario.nombre + " " + usuario.apellido;
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
    let eliminado = false;
    console.log(arrReservas);
    
    
    while(!eliminado){
        let eliminar = parseInt(prompt("ID de la reserva a eliminar: "));
        for(let i = 0; i < arrReservas.length; i++){
            datos = arrReservas[i].datosReserva;
            if (eliminar == datos.nroReserva){
                arrReservas.splice(i, 1);
                eliminado = true;
                break
            }
        }
        if(!eliminado){
        alert("LA RESERVA BUSCADA NO EXISTE!!");
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