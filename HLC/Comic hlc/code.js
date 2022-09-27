"use strict";

/***************************
  FUNCTIONS
***************************/

/**
 * leerComic
 * @param {string} contenidoFichero - El contenido del fichero seleccionado
 */
function leerComic(contenidoFichero) {
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

  arrayPáginas = [];
  //--------------- Completar

  //lo primero que haremos sera usar un split para separar con el delimitador de " : "
  arrayPáginas = contenidoFichero.split(":", 3);

  //e creado otra variable ya que anteriormente se quedaba en la posicion 2 del array contenido que nos indicaba
  // la ruta de las imagenes ,
  //separamos ese contenido de arrayPáginas pero esta vez con el delimitador ./

  let arrayTemporal = arrayPáginas[2].split("./");
  //el .split que hemos hecho antes nos quita el ./ que necesitaremos para leer el fichero asin que creamos un bucle y
  //se lo volvemos a añadir
  for (
    let k = 1;
    k < arrayTemporal.length;
    k++ //empezamos la k en 1 ya que la 1 posicion del array es el comentario
  ) {
    arrayTemporal[k] = "./" + arrayTemporal[k];
  }

  //ya que siempre la posicion 0 del array sera el nombre de la obra y la 1 posicion la del autor , cambiaremos
  //y sustituiremos con el arrayTemporal creado
  //apartir de la posicion 2

  for (let i = 0; i < arrayTemporal.length; i++) {
    arrayPáginas[2 + i] = arrayTemporal[i];
  }

  //--------------- Completar

  //2.- Ahora el primer elemento del array contendrá una cadena de caracteres con el nombre del cómic, el nombre
  //del autor y unos comentarios separados por :
  // Dublinés:Alfonso Zapico:Premio nacionadl 2012. Una novela gráfica sobre James Joyce.
  // Sacaremos esa información del array usando un shift. A continuación insertaremos el nombre del cómic yl del autor
  // en el párrafo con id="autor"

  autor = "";
  cómic = "";
  comentarios = "";

  //--------------- Completar

  //como siempre vamos a quitar del array la informacion cuando la asignemos a la variable
  //siempre vamos a asignar el espacio 0 del array ya que estan en orden
  autor = arrayPáginas[0];
  arrayPáginas.shift();
  cómic = arrayPáginas[0];
  arrayPáginas.shift();
  comentarios = arrayPáginas[0];
  arrayPáginas.shift();

  //--------------- Completar

  //3.- Ahora en el array de páginas sólo hay páginas.
  //Haremos que el número de página actual sea 0 para empezar a leer la primera página.
  númeroDePáginaActual = 0;

  //3.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en el
  //primer elemento del array

  //--------------- Completar
  //Usaremos la el atributo getElementById().src para sustituir el src del html , usamos este atributo
  //para facilitar el cambio del src en el html , ademas usaremos otro getElement para mostrar la imagen que
  //hemos ocultado antes ahora que ya esta cargada

  document.getElementById("pagina").style.visibility = "visible";
  document.getElementById("pagina").src = `${arrayPáginas[0]}`;

  pAutor.innerHTML =
    "<h2>Information</h2> <br> <b>Comic:</b> " +
    cómic +
    " <b>- Author:</b> " +
    autor +
    " <b>- Page:</b> " +
    (númeroDePáginaActual + 1) +
    " of " +
    arrayPáginas.length;

  //--------------- Completar
}

/**
 * anteriorPágina
 * Mostrará en la web la páginaa anterior en el array
 */
function anteriorPágina() {
  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  if (arrayPáginas == 0) {
    return;
  }

  //--------------- Completar

  //2.- Decrementamos la variable númeroDePáginaActual
  //--------------- Completar
  númeroDePáginaActual--;
  //--------------- Completar

  //3.- Si el número de página actual es menor que 0
  //haremos que el número de página actual sea la primera (0)
  //--------------- Completar
  if (númeroDePáginaActual < 0) {
    númeroDePáginaActual++;
  }
  //--------------- Completar

  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en la
  //posición del array a la que apunta númeroDePáginaActual
  //--------------- Completar
  document.getElementById(
    "pagina"
  ).src = `${arrayPáginas[númeroDePáginaActual]}`;

  //--------------- Completar

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML =
    "<b>Comic:</b> " +
    cómic +
    " <b>- Author:</b> " +
    autor +
    " <b>- Page:</b> " +
    (númeroDePáginaActual + 1) +
    " of " +
    arrayPáginas.length;
}

/**
 * siguientePágina
 * Mostrará en la web la siguiente página en el array
 */
function siguientePágina() {
  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar

  if (arrayPáginas == 0) {
    return;
  }

  //--------------- Completar

  //2.- Incrementamos la variable númeroDePáginaActual
  //--------------- Completar
  númeroDePáginaActual++;
  //--------------- Completar

  //3.- Si el número de página actual es mayor o igual que el número de páginas en el array
  //haremos que el número de página actual sea la última página disponible (arrayPáginas.length - 1)
  //--------------- Completar
  if (númeroDePáginaActual >= arrayPáginas.length) {
    númeroDePáginaActual--;
  }
  //--------------- Completar

  //4.- Modificamos el atributo src de la etiqueta imgPágina para que sea el contenido en la
  //posición del array a la que apunta númeroDePáginaActual
  //--------------- Completar
  document.getElementById(
    "pagina"
  ).src = `${arrayPáginas[númeroDePáginaActual]}`;
  //--------------- Completar

  //5.- Modificamos el contenido del párrafo con id="autor" para que se añada a la información mostrada
  //el número de página actual y cuántas páginas en total tiene el cómic
  pAutor.innerHTML =
    "<b>Comic:</b> " +
    cómic +
    " <b>- Author:</b> " +
    autor +
    " <b>- Page:</b> " +
    (númeroDePáginaActual + 1) +
    " of " +
    arrayPáginas.length;
}

/**
 * mostrarInformación
 * Muestra los comentarios que se encuentran en el fichero.
 */
function mostrarInformación() {
  //1.- Si el número de páginas en el array es 0, salimos de la función
  //--------------- Completar
  if (arrayPáginas == 0) {
    return;
  }
  //--------------- Completar

  //2.- Mostraremos los comentarios en un alert de la siguiente manera:
  // Cada oración la mostraremos en una línea diferente.
  // Nota: reemplazaremos cada . por un \n
  // Más información en: https://www.w3schools.com/jsref/jsref_replace.asp
  let s = "";
  //--------------- Completar
  s = comentarios.replace(".", "/n");
  //--------------- Completar
  alert(s);
}

function teclaPulsada(e) {
  if (e.key == "ArrowRight") {
    siguientePágina();
  } else if (e.key == "ArrowLeft") {
    anteriorPágina();
  } else if (e.key == "Enter") {
    mostrarInformación();
  }
  //Si la tecla pulsada es ESC, haremos que se oculte la división con id="controles"
  //si estaba visible o que se muestre si estaba oculta
  //--------------- Completar

  //si visible esta a 0 , esconderemos la division "controles" con getElement , al esconderla iniciaremos visible a 1 
  //y saldremos de la funcion
  if (e.key == "Escape") {
    if (visible == 0) {
      document.getElementById("controles").style.visibility = "hidden";
      visible = 1;
      exit;
    }

    //si visible esta a 1 , volveremos a mostrar la division "controles" con getElement , al mostrarla volveremos
    //a iniciar la variable visible a 0 y saldremos de la funcion
    
    if (visible == 1) {
      document.getElementById("controles").style.visibility = "visible";
      visible = 0;
      exit;
    }

    //--------------- Completar
  }
}

/***************************
  MAIN
***************************/

//1.- Creamos una variable que contendrá el número de preguntas del cuestionario
let númeroDePáginaActual = 0;
let arrayPáginas = [];
let autor = "";
let cómic = "";
let comentarios = "";

//definimos una variable visible para indicar cuando se debe esconder y cuando se debe mostrar la imagen
let visible = 0;

//2.- Recuperamos las etiquetas necesarias

let pAutor = document.querySelector("#autor");

//3.- Asignamos las funciones a los botones
document.querySelector("#btnCargar").addEventListener("click", () => {
  leerFichero(leerComic);
});
document
  .querySelector("#btnAvanzar")
  .addEventListener("click", siguientePágina);

document
  .querySelector("#btnRetroceder")
  .addEventListener("click", anteriorPágina);

//con este document.getElementById lo que haremos sera ocultar la imagen hasta que la carguemos
//si no hacemos esto el navegador intentara cargar una imagen que no existe y mostrara
//un error como si se estuviera cargando una imagen que aun no a cargado
document.getElementById("pagina").style.visibility = "hidden";

document.addEventListener("keydown", teclaPulsada);
