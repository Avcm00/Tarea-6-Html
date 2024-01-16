var num1, num2, respuesta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//genera la suma - Numeros aleatorios entre 0 1 9
	num1 = Math.round(Math.random()*9);
	num2 = Math.round(Math.random()*9);
	respuesta = num1 + num2;
	//asignamos lo números para que se muestren
	suma.innerHTML = num1 + " + " + num2 + " = ";

	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
}

function controlarRespuesta(opcionElegida){	

	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "EXCELENTE!!";
		txt_msj.style.color="green";
		setTimeout(comenzar, 2000);
	}else{
		txt_msj.innerHTML = "INTENTA DE NUEVO!!";
		txt_msj.style.color="red";
		setTimeout(limpiar, 2000);

	}
}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();

// class Quiz {
// 		this.multiplicacion = document.getElementById("multiplicacion");

//         this.num1;
//         this.num2;
//         this.respuesta;
       
//         this.op1 = document.getElementById("op01");
//         this.op2 = document.getElementById("op02");
//         this.op3 = document.getElementById("op03");
//         this.txt_msj = document.getElementById("msj1");
//         this.txt_resultado = document.getElementById("res");
    

//     comenzar() {
//         this.txt_resultado.innerHTML = "?";
//         this.txt_msj.innerHTML = "";

//         // Genera la multiplicación - Números aleatorios entre 0 y 9
//         this.num1 = Math.round(Math.random() * 9);
//         this.num2 = Math.round(Math.random() * 9);
//         this.respuesta = this.num1 * this.num2;

//         // Asignamos los números para que se muestren
// 		this.multiplicacion.innerHTML = this.num1 + " x " + this.num2 + " = ";


//         // Genero un número entre 0 y 2 para colocar la opción correcta
//         const indiceOpCorrecta = Math.round(Math.random() * 2);

//         // Configurar las opciones
//         if (indiceOpCorrecta === 0) {
//             this.op1.innerHTML = this.respuesta;
//             this.op2.innerHTML = this.respuesta + 1;
//             this.op3.innerHTML = this.respuesta - 1;
//         } else if (indiceOpCorrecta === 1) {
//             this.op1.innerHTML = this.respuesta - 1;
//             this.op2.innerHTML = this.respuesta;
//             this.op3.innerHTML = this.respuesta - 2;
//         } else {
//             this.op1.innerHTML = this.respuesta + 2;
//             this.op2.innerHTML = this.respuesta + 3;
//             this.op3.innerHTML = this.respuesta;
//         }
//     }

//     controlarRespuesta(opcionElegida) {
//         this.txt_resultado.innerHTML = opcionElegida.innerHTML;
//         if (this.respuesta == opcionElegida.innerHTML) {
//             this.txt_msj.innerHTML = "EXCELENTE!!";
//             this.txt_msj.style.color = "green";
//             setTimeout(() => this.comenzar(), 2000);
//         } else {
//             this.txt_msj.innerHTML = "INTENTA DE NUEVO!!";
//             this.txt_msj.style.color = "red";
//             setTimeout(() => this.limpiar(), 2000);
//         }
//     }

//     limpiar() {
//         this.txt_resultado.innerHTML = "?";
//         this.txt_msj.innerHTML = "";
//     }
// }










