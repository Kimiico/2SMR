"use strict"

let num=1;

function adelante(){
  num++;
  if(num>3) {
    num=1;
  
  let foto = document.getElemenById("foto");
  foto.src="foto" +num+ ".jpg";
  }
  
} 


function atras(){
  num--;
  if(num<1){
    num=3;
  
  let foto = document.getElemenById("foto");
  foto.src="foto" +num+ ".jpg";
  }
  
} 


