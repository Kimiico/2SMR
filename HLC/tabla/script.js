"use strict";

////////////////////////////
//Primero pedir numero que se quiere calcular 
/////////////

let num = Number(prompt ("Pon un numero para la tabla de multiplicar" , 1));

////////////////////////////
//Declaracion de variables
////////////


let resultado1 = num * 1;
let resultado2 = num * 2;
let resultado3 = num * 3;
let resultado4 = num * 4;
let resultado5 = num * 5;
let resultado6 = num * 6;
let resultado7 = num * 7;
let resultado8 = num * 8;
let resultado9 = num * 9;
let resultado10 = num * 10;


 ///////////////////////////////
//Recuperamos la variable tablaMultiplicar 
///////////


let divTablaMultiplicar = document.querySelector("#tablaMultiplicar");

///////////////////////////////
//Y ahora ponemos por pantalla la tabal de multiplicar
///////////

divTablaMultiplicar.innerHTML="<p>" + num + " * 1 = " + resultado1 +  "</p>" +
  
  "<p>" + num + " * 2 = " + resultado2 +  "</p>" +
  
  "<p>" + num + " * 3 = " + resultado3 +  "</p>" +
  
  "<p>" + num + " * 4 = " + resultado4 +  "</p>" +
  
  "<p>" + num + " * 5 = " + resultado5 +  "</p>" +
  
  "<p>" + num + " * 6 = " + resultado6 +  "</p>" +
  
  "<p>" + num + " * 7 = " + resultado7 +  "</p>" +
  
  "<p>" + num + " * 8 = " + resultado8 +  "</p>" +
  
  "<p>" + num + " * 9 = " + resultado9 +  "</p>" +
  
  "<p>" + num + " * 10 = " + resultado10 +  "</p>";




