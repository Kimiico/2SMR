

////////////////////////////
//Primero pedir numero que se quiere calcular 
/////////////

let numeroDeUsuario = prompt ("Pon un numero para calcular" , "Escriba aqui un numero");

////////////////////////////
//Calculamos el coseno
////////////

 let x = numeroDeUsuario;
 let coseno = (x) = 1 - (x*x)/2 + (x*x*x*x)/24 - (x*x*x*x*x*x)/720 + (x*x*x*x*x*x*x*x)/40320;

////////////////////////////
//Calculamos el seno
/////////////

 let y = numeroDeUsuario;
 let seno = (y) = y - (y*y*y)/6 + (y*y*y*y*y)/120 - (y*y*y*y*y*y*y)/5040 + (y*y*y*y*y*y*y*y*y)/362880;

////////////////////////////
//Damos por pantalla el resultado del seno y coseno
/////////////

alert ("El seno es el siguiente: " + seno ) ;
alert ("El coseno es el siguiente: " + coseno ) ;






