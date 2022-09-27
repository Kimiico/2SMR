"use strict"


///////////////////////
// FUNCTIONS
/////////////////

/**
* añadirNombre
* Añade un nuevo nombre al array de nombres
*/
function añadirNombre(){
  //1.- Recupera el texto que ha escrito el usuario en el textbox txtNombre
  
  //2.- Si el usuario no escribió nada, se borrará el contenido de la 
  //    división resultado, mostrará un mensaje de 
  //    error en la división resultado y terminará
  
  //3.- Si el usuario escribió un nombre, lo añadirá al array de nombres
  

nombres.push(txtNombre.value);


}


/*
* generarPersonajes
* genera nombres de personajes uniendo nombres con motes
*/
function generarPersonajes(){
  //1.- Borra el contenido de la división resultado
  divResultado.innerHTML="";
  //2.- Añade a la división resultado un <h2>Personajes generados</h2>
  divResultado.innerHTML+="<h2> Personajes generados</h2>"
  //3.- Recorre el array de nombres
  
  //4.- En cada vuelta del bucle genera un número aleatorio entre
  //    0 y el tamaño del array de motes-1
  
  //5.- A cada nombre asígnale un mote y muéstralo en la división 
  //    resultado en un párrafo cada uno.
  //    El mote será elegido al azar.
  //    Por ejemplo: Si el nombre es "Antonio" y el mote es "el de los lobitos"
  //    el resultado será: <p>Antonio el de los lobitos</p>
  for(let i=0;i<nombres.length;i++){

    let NumeroAleatorio=Math.floor(Math.random() * (motes.length - 0) + 0);
    
    divResultado.innerHTML+=nombres[i]+" "+motes[NumeroAleatorio]+"<br>";
  }

}


///////////////////////
// MAIN
/////////////////

//1.- Creamos el array de motes y el array de nombres con algunos motes y nombres
let nombres=["Antonio", "Juan", "Pedro", "Pablo", "José Carlos", "David", "Emilio"];
let motes=["el cabeza", "el mirlo", "el tiñoso", "el rubio", "el de la Laurencia", "el barbas", "el de la jacaranda", "el de los lobitos", "el de la cuesta", "el gordo", "el de la Bernarda", "bigotón", "el lecherito", "el culbra", "el oreja", "el cabra", "el recesivo", "el pasivo", "el nervioso", "el tranquilo", "el chungo", "el salaíto", "el carajaula", "el patilargo", "el pelusa", "el calientasillas", "el boquerón", "el chinche", "el choricero", "el torti", "el matagatos", "el bizcotela tela de vizco", "el pompa", "el rata", "el guapo", "el noble", "el mudo", "el caco","el enganche", "el espabilao", "el espabi", "el gallo", "el canijo", "el cuerpilargo", "el paticorto", "el cuellilargo", "el cenizo", "el tormentos", "el alegría", "el monaguillo", "el mendigo", "el naúgrafo", "el ladilla", "el lagarto", "el horrendo", "el longanizo", "el pirata", "el prenda"  ]


//2.- Se recuperan las etiquetas HTML
let txtNombre = document.querySelector("#txtNombre");
let divResultado = document.querySelector("#resultado");

let btnAñadirNombre = document.querySelector("#btnAñadirNombre");
let btnGenerar = document.querySelector("#btnGenerar");

//3.- Se asignan los eventListeners
btnAñadirNombre.addEventListener("click", añadirNombre);
btnGenerar.addEventListener("click", generarPersonajes);


