function mostrarmensaje(){
  let mensaje=document.getElementById("mensaje");
  mensaje.innerHTML= "cuida y protege a los animales";
  mensaje.style.display = "block";

  setTimeout( ()=> { 
    mensaje.style.opacity = "1";
  mensaje.style.transform ="translateY(0)";
  },50 );

}
function mostrarmensaje2(){
  let mensaje=document.getElementById("mensaje2");
  mensaje.innerHTML= "hola mi nombre e sluz";
  mensaje.style.display = "block";

  setTimeout( ()=> { 
    mensaje.style.opacity = "1";
  mensaje.style.transform ="translateY(0)";
  },50 );

}