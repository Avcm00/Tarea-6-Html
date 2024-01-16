let paises = [];

paises = ["PERRO", "GATO", "VACA", "TORO", "CABALLO", "CONEJO",  "PATO", "POLLO", "JIRAFA","LEON"];

let paisesDesordenados=[];

let posJuegoActual = 0;

let cantidadAcertados = 0;


function desordenarPaises(){
    for(var i=0;i<paises.length;i++){
       
        let pais = paises[i];
        pais = pais.split('');
    
        let paisDesordenado;
    
        
        paisDesordenado = pais.sort(function(){return Math.random() - 0.5});
    
        
        paisDesordenado = paisDesordenado.toString();
        paisDesordenado = paisDesordenado.replace(/,/g,"");
    
       
        paisesDesordenados.push(paisDesordenado);
    }
}

function mostrarNuevoPais(){

   
    if(posJuegoActual >= paises.length){
        mostrarPantallaFinal();
    }
    let contenedorPais = document.getElementById("pais");
    
    contenedorPais.innerHTML="";

    let pais = paisesDesordenados[posJuegoActual];
    pais = pais.split('');

    x=0;
    clearInterval(idInterval);
    move();
    for(i=0;i<pais.length;i++){
        var div = document.createElement("div");
        div.className = "letra";
        div.innerHTML = pais[i];
        contenedorPais.appendChild(div);
    }

}

function mostrarPantallaFinal(){
    clearInterval(idInterval);
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "flex";
    document.getElementById("acertadas").innerHTML = cantidadAcertados;
}




//Funcion que compara el pais ingresado con el pais correcto
function comparar(){
    var paisOrdanedo = paises[posJuegoActual];
    var paisIngresado = document.getElementById("paisIngresado").value;
    paisIngresado = paisIngresado.toUpperCase();

    if(paisOrdanedo == paisIngresado){
        posJuegoActual++;
        cantidadAcertados++;
        document.getElementById("contador").innerHTML = cantidadAcertados;
        paisIngresado = document.getElementById("paisIngresado").value="";
        mostrarNuevoPais();
    }
}



let x = 0;
let idInterval;
function move() {
  if (x == 0) {
    x= 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    idInterval = setInterval(frame, 60);
    function frame() {
      if (width >= 100) {
        clearInterval(idInterval);
        x = 0;
        posJuegoActual++;
        paisIngresado = document.getElementById("paisIngresado").value="";
        mostrarNuevoPais();
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function comenzarJuego(){
    paisesDesordenados=[];
    posJuegoActual = 0;
    cantidadAcertados = 0;
    desordenarPaises();
    document.getElementById("pantalla-inicio").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    document.getElementById("pantalla-final").style.display = "none";
    mostrarNuevoPais();
    document.getElementById("contador").innerHTML = 0;
    document.getElementById("paisIngresado").focus();
}

