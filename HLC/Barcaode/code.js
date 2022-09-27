"use strict"
/***************************
	FUNCTIONS
***************************/
function getNumero(){
	let url = new URL( window.location.href ); //"http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"
	return url.searchParams.get("numero");
}


/***************************
	MAIN
***************************/

let numero = getNumero();
let divBarcode = document.querySelector("#barcode");




let caracteres = ["0","1","2","3","4","5","6","7","8","9",
                  "A","B","C","D","E","F","G","H","I","J",
                  "K","L","M","N","O","P","Q","R","S","T",
                  "U","V","W","X","Y","Z",
                  "-","."," ","$","/","+","%","*" ];

let suma=0;
let contenedor = [0];

//recorremos uno a uno el valor numero 
for(let i=0;i<numero.length;i++){
contenedor[i] = numero[i];
}




// este for para lo que sirve es para sumar todos los valores de contenedor

for(let i=0;i<contenedor.length;i++){
let numero=Number(contenedor[i]);
suma+=numero;
}


// caracterElegido lo que hace es dividir la de antes para saber la posicion del caracter que se necesita
let caracterElegido = suma % 43;  


// contenedorCaracteres lo que hace es elegir el caracter correcto
let contenedorCaracteres= caracteres[caracterElegido]



// esto es para contatenar los numero que aparece abajo del codigo de barras
numero="*" + numero + contenedorCaracteres + "*";




if ( numero != null ){
	divBarcode.innerHTML=numero;
}
//imprimimos por pantalla numero para comprobar que efectivamente el numero mostrado en el barcode es el numero correcto
console.log(numero);