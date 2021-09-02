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
    let opcion = document.createElement("option");
    let seleccion = document.getElementById("selecCancha").value;
    let listaHora = document.getElementById("selecHora");
    
    
    let opciones = new Array();

    let horarios = JSON.parse(sessionStorage.getItem("canchaFutbolJSON"));

    console.log(horarios);


    if (seleccion == "1"){
        for ( let i = 0 ; i < 5; i++){
            let horarios = JSON.parse(sessionStorage.getItem("canchaFutbolJSON"));
            let opcion = document.createElement("option");
            
            opciones.push(opcion);
            
            opciones[i].innerHTML = "<p>"+ horarios[i] +"</p>";
            
            listaHora.appendChild(opciones[i]);
        }
    }


    if (seleccion == "2"){
        for ( let i = 0 ; i < 5; i++){
            let horarios = JSON.parse(sessionStorage.getItem("canchaTenisJSON"));
            let opcion = document.createElement("option");
            
            opciones.push(opcion);
            
            opciones[i].innerHTML = "<p>"+ horarios[i] +"</p>";
            
            listaHora.appendChild(opciones[i]);
        } 
    }


    if (seleccion == "3"){
        for ( let i = 0 ; i < 5; i++){
            let horarios = JSON.parse(sessionStorage.getItem("canchaPaddleJSON"));
            let opcion = document.createElement("option");
            
            opciones.push(opcion);
            
            opciones[i].innerHTML = "<p>"+ horarios[i] +"</p>";
            
            listaHora.appendChild(opciones[i]);   
        }
        
    }
 
 }


    function agragar(){
        let cancha = JSON.parse(sessionStorage.getItem("canchaPaddleJSON"));
        let horarios = cancha.horarios;
        // const option = document.createElement('option');
        // const selec = document.getElementById("selecHora");
        // const valor = new Date().getTime();
        for ( let i = 0 ; i < 5; i++){
            $("#selecHora").append(`<option>${horarios[i]}</option>`)
            // option.value = horarios[i];
            // option.text = valor;
            // selec.appendChild(option);
            console.log("Agrega una opcion");
        }

      };



function test(){

        let canchaTenis = new Cancha("Tenis");
        let canchaFutbol = new Cancha("Futbol");
        let canchaPaddle = new Cancha("Paddle");

        let canchaFutbolJSON = JSON.stringify(canchaFutbol);
        sessionStorage.setItem("canchaFutbolJSON", canchaFutbolJSON);
        let canchaTenisJSON = JSON.stringify(canchaTenis);
        sessionStorage.setItem("canchaTenisJSON", canchaTenisJSON);
        let canchaPaddleJSON = JSON.stringify(canchaPaddle);
        sessionStorage.setItem("canchaPaddleJSON", canchaPaddleJSON);

        // let btnConfirmar = document.getElementById("btnConfirmar");
        // btnConfirmar.addEventListener("click", agragar);
        $("#btnConfirmar").on("click", () => {console.log("click en confirma")});
        let btnConfirmarDOS = document.getElementById("2btnConfirmar");
        btnConfirmarDOS.addEventListener("click", agragar);

        let listadoCancha = document.getElementById("selecCancha");
        listadoCancha.addEventListener("change", agragar);

}
// function respuestaClick(){
//     console.log("Respuesta evento");
//   }


// let boton = document.getElementById("btnConfirmar")
//       boton.addEventListener("click", respuestaClick)


test();