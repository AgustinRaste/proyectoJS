
class Cancha{
    constructor(pCancha){
        this.cancha = pCancha;
        if (pCancha == "Futbol"){
            this.id = "1";
        }
        if (pCancha == "Tenis"){
            this.id = "2";
        }
        if (pCancha == "Paddle"){
            this.id = "3";
        }
    }

    horarios = new Array(17,18,19,20,21,22,23);

    horariosDisponibles(){
        console.log(horarios)
    }
}

function mostrarCancha(){
    let cancha = sessionStorage.getItem("canchaFutbolJSON");
    console.log(cancha);
}

function borrarHorario(){
    let cancha = JSON.parse(sessionStorage.getItem("canchaFutbolJSON"));
    let id = document.getElementById("selecHora").value;

    cancha.horarios[0] = " "

}


 function listarHorarios(){
    let seleccion = $("#selecCancha").val();
    const URLJSON = "canchas.json";

    // Aplico este metodo para borrar los options cargados en otra ocasion 
    $("#selecHora").empty();

    
    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success"){
            let misDatos = respuesta;

            let horariosDisp = misDatos[seleccion - 1].horarios
            
            
            if (seleccion == '1'){
                
                for (const horario in horariosDisp){
                    $("#selecHora").append(`<option>${horariosDisp[horario]}</option>`)
                    
                }
            }
            if (seleccion == '2'){
                
                for (const horario in horariosDisp){
                    $("#selecHora").append(`<option>${horariosDisp[horario]}</option>`)
                    console.log(horariosDisp[horario])
                }
                
            }
            if (seleccion == '3'){
                
                for (const horario in horariosDisp){
                    $("#selecHora").append(`<option>${horariosDisp[horario]}</option>`)
                    console.log(horariosDisp[horario])
                }
                
            }
        };
    });

};


function eliminarUnElemento(){
    let horariosJSON = sessionStorage.getItem("horariosJSON");
    let horarios = JSON.parse(horariosJSON);
    console.log(horarios);
    let eliminar = parseInt(prompt("Que elemento desea eliminar? "));
    horarios.splice(eliminar, 1);
    console.log(horarios);
    horariosJSON = JSON.stringify(horarios);
    sessionStorage.setItem("horariosJSON", horariosJSON)
}
function test(){
        

        let miId = "1";
        let miNombre = "Cancha de prueba";
        let miHorarios = new Array("156", "154", "874");

        //Declaramos la url del archivo JSON local
        const URLJSON = "canchas.json";
        let horariosJSON = JSON.stringify(miHorarios)
        sessionStorage.setItem("horariosJSON", horariosJSON)

        //Agregamos un botón con jQuery
        $("body").prepend('<button id="btn1">JSON</button>');


        $("#btn1").on("click", eliminarUnElemento);
        // $("#btn1").click(() => { 
        //     $.getJSON(URLJSON, function (respuesta, estado) {
        //         if(estado === "success"){
        //           let misDatos = respuesta;
        //           console.log(misDatos)
        //           for (let i = 0; i < 4; i++) {
        //             $("body").prepend(`<div>
        //             ${misDatos[0]}
        //                                     <h3>${misDatos[0].id}</h3>
        //                                     <p> ${misDatos[0].nombre}</p>
        //                                     <p> ${misDatos[0].horarios[10]}</p>
        //                                 </div>`)
        //           }  
        //         }
        //         });
        //     });

        $('#selecCancha').change( listarHorarios);
        
    
        // let canchaTenis = new Cancha("Tenis");
        // let canchaFutbol = new Cancha("Futbol");
        // let canchaPaddle = new Cancha("Paddle");

        // let canchaFutbolJSON = JSON.stringify(canchaFutbol);
        // sessionStorage.setItem("canchaFutbolJSON", canchaFutbolJSON);
        // let canchaTenisJSON = JSON.stringify(canchaTenis);
        // sessionStorage.setItem("canchaTenisJSON", canchaTenisJSON);
        // let canchaPaddleJSON = JSON.stringify(canchaPaddle);
        // sessionStorage.setItem("canchaPaddleJSON", canchaPaddleJSON);

        // // let btnConfirmar = document.getElementById("btnConfirmar");
        // // btnConfirmar.addEventListener("click", agragar);
        // $("#btnConfirmar").on("click", () => {console.log("click en confirma")});
        // let btnConfirmarDOS = document.getElementById("2btnConfirmar");
        // btnConfirmarDOS.addEventListener("click", agragar);

        // let listadoCancha = document.getElementById("selecCancha");
        // listadoCancha.addEventListener("change", agragar);

}
// function respuestaClick(){
//     console.log("Respuesta evento");
//   }


// let boton = document.getElementById("btnConfirmar")
//       boton.addEventListener("click", respuestaClick)

test();