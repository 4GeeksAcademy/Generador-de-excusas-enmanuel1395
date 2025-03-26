import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let quien = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let accion = ['ate', 'peed', 'crushed', 'broke'];
  let que = ['my homework', 'my phone', 'the car'];
  let cuando = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // segunda parte 


  let quienRandom = Math.floor(Math.random() * quien.length);
  let accionRandom = Math.floor(Math.random() * accion.length);
  let queRandom = Math.floor(Math.random() * que.length);
  let cuandoRandom = Math.floor(Math.random() * cuando.length);

  document.getElementById("excuse").innerHTML = `${ quien[quienRandom] } ${ accion[accionRandom] } ${ que[queRandom] } ${ cuando[cuandoRandom] }`
}