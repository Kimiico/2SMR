"use strict"

/***************************
	FUNCTIONS
***************************/


/**
 * leerComic
 * @param {string} contenidoFichero - El contenido del fichero seleccionado
 */
function leerComic( contenidoFichero){
  
  //0.- Escribimos en la consola el contenido del fichero para comprobar que se ha leído correctamente
  console.log(contenidoFichero);

  //1.- La primera línea del fichero contiene el nombre del cómic, el autor y unos coemntarios se parados por :, por ejemplo:
  // Dublinés:Alfonso Zapico:Premio nacionadl 2012. Una novela gráfica sobre James Joyce.
  //
  // El resto de las líneas tendrá la secuencia de imágenes que componen el cómic. Por ejemplo:
  // ./comic/001.jpg
  // ./comic/003.jpg
  // etc
  //
  // El primer paso es convertir la cadena de caracteres leída del fichero en un array.
  // Nota: busca información sobre la orden split https://www.w3schools.com/jsref/jsref_split.asp
  
  arrayPáginas=[];
  //--------------- Completar

  //--------------- Completar

  //2.- Ahora el primer elemento del array contendrá una cadena de caracteres con el nombre del cómic, el nombre 
  //del autor y unos comentarios separados por :
  // Dublinés:Alfonso Zapico:Premio nacionadl 2012. Una novela gráfica sobre James Joyce.
  // Sacaremos esa información del array usando un shift. A continuación insertaremos el nombre del cómic yl del autor
  // en el párrafo con id="autor"
  
  autor="";
  cómic="";
  comentarios="";

  //--------------- Completar
 
  //--------------- Completar

  //3.- Ahora en el array de páginas sólo hay páginas. 
  //Haremos que el número de página actual sea 0 para empezar a leer la primera página.
  númeroDePáginaActual=0


  //3.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en el 
  //primer elemento del array
  //--------------- Completar

  //--------------- Completar

}





/**
 * anteriorPágina
 * Mostrará en la web la páginaa anterior en el array
 */
function anteriorPágina(){

  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  //--------------- Completar

  //2.- Decrementamos la variable númeroDePáginaActual
  //--------------- Completar

  //--------------- Completar

  //3.- Si el número de página actual es menor que 0
  //haremos que el número de página actual sea la primera (0)
  //--------------- Completar

  //--------------- Completar

  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en la
  //posición del array a la que apunta númeroDePáginaActual
  //--------------- Completar

  //--------------- Completar

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor+" <b>- Page:</b> "+ (númeroDePáginaActual+1) +" of "+arrayPáginas.length;
}





/**
 * siguientePágina
 * Mostrará en la web la siguiente página en el array
 */
function siguientePágina(){
  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  //--------------- Completar

  //2.- Incrementamos la variable númeroDePáginaActual
  //--------------- Completar

  //--------------- Completar

  //3.- Si el número de página actual es mayor o igual que el número de páginas en el array
  //haremos que el número de página actual sea la última página disponible (arrayPáginas.length - 1)
  //--------------- Completar

  //--------------- Completar

  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en la
  //posición del array a la que apunta númeroDePáginaActual
  //--------------- Completar

  //--------------- Completar

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML= "<b>Comic:</b> "+cómic+" <b>- Author:</b> "+autor+" <b>- Page:</b> "+ (númeroDePáginaActual+1) +" of "+arrayPáginas.length;
}



/**
 * mostrarInformación
 * Muestra los comentarios que se encuentran en el fichero.
 */
function mostrarInformación(){
  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  //--------------- Completar

  //2.- Mostraremos los comentarios en un alert de la siguiente manera:
  // Cada oración la mostraremos en una línea diferente.
  // Nota: reemplazaremos cada . por un \n
  // Más información en: https://www.w3schools.com/jsref/jsref_replace.asp
  let s="";
  //--------------- Completar

  //--------------- Completar
  alert(s);
}




function teclaPulsada(e){
  if(e.key =="ArrowRight"){
    siguientePágina();
  }
  else if (e.key=="ArrowLeft"){
    anteriorPágina();
  }
  else if(e.key=="Enter"){
    mostrarInformación();
  }
  //Si la tecla pulsada es ESC, haremos que se oculte la división con id="controles"
  //si estaba visible o que se muestre si estaba oculta
  //--------------- Completar
  
  //--------------- Completar
}


/***************************
	MAIN
***************************/

//1.- Creamos una variable que contendrá el número de preguntas del cuestionario
let númeroDePáginaActual=0;
let arrayPáginas=[];
let autor="";
let cómic="";
let comentarios="";

//2.- Recuperamos las etiquetas necesarias
let imgPágina  = document.querySelector("#pagina");
let pAutor  = document.querySelector("#autor");

//3.- Asignamos las funciones a los botones
document.querySelector("#btnCargar").addEventListener('click', ()=>{leerFichero(leerComic);});
document.querySelector("#btnAvanzar").addEventListener('click',siguientePágina);
document.querySelector("#btnRetroceder").addEventListener('click',anteriorPágina);


document.addEventListener("keydown", teclaPulsada);