  function resaltar(){
    document.getElementById("alerta").style.textShadow = "0 0 5px red, 0 0 15px red, 0 0 30px red,0 0 50px red";
    document.getElementById("alerta").style.opacity="200%";
    document.getElementById("alerta2").style.boxShadow = "0 0 5px red, 0 0 15px red, 0 0 30px red,0 0 50px red";
    document.getElementById("text_in_1").style.boxShadow="0 0 5px red, 0 0 15px red, 0 0 20px red";
    document.getElementById("text_in_1").style.borderColor="white";
    document.getElementById("text_in_1").style.border="solid 1.6px";
  }
  function quitarresaltar(){
    document.getElementById("alerta").style.textShadow = "none";
    document.getElementById("alerta").style.opacity="80%";
    document.getElementById("alerta2").style.boxShadow = "none";
    document.getElementById("text_in_1").style.boxShadow="none";
    document.getElementById("text_in_1").style.border="none";
  }
  
  function reaparecer(){
        //con esto borramos el contenido del output
    document.getElementById("text_in_1").value = ""; //esto solo afecta al input
    document.getElementById("text_out").textContent = "";
    document.getElementById("parrafos").style.display = "initial";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("text_out").style.display = "none";
  }

  function ocultar_mostrar(){
    document.getElementById("parrafos").style.display = "none";//para ocultar el texto
    document.getElementById("copiar").style.display = "initial";//para mostrar el texto
    document.getElementById("text_out").style.display = "initial";//para mostrar el texto
  }


  //funciones de logica
  //valores constantes para encriptar y desencriptar
  const cambio = ["enter","imes","ai","ober","ufat"];
  const actual = ["e","i","a","o","u"];

  function Detectarcontenido(){
    if (obtener() == ""){
      return true;
    }else{
      return false;
    }
  }

  function copiar(){
    //con estp estamos obteniendo el texto del text area, sleccionando el contenido y pasando este al portapapeles
    var output = document.getElementById("text_out");
    output.select();
    output=document.execCommand("copy");//para copiar texto al portapaples
    reaparecer();
  }

  //funcion para obtener el texto del input
  function obtener(){
    var input = document.getElementById("text_in_1").value;
    //input = input.toLowerCase();
    return input;
  }

  //funcion para imprimir el texto obtenido del input en el output
  function imprimir(cadena){
    document.getElementById("text_out").textContent = cadena;
  }

  //funcion para detectar mayusculas
  function Detectarmayus(cadena){
    var respuesta = false;
    const mayus = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","??","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for (var x =0;x<cadena.length;x++){
      for (var y = 0;y<mayus.length;y++){
        if (cadena[x]== mayus[y]){
          respuesta = true;
        }
      }
    }
    return respuesta;
  }
  
  //funcion para detectar mayusculas con menos codigo :v
  /*function Detectarmayus(cadena){
    var respuesta = false;
    cadena = obtener();
    for (var x = 0;x<cadena.length;x++){
      
    }
    return respuesta;
  }*/

  //funcion para detectar acentos
  function Detectaracento(cadena){
    var respuesta = false;
    const mayus=["??","??","??","??","??","??","??","??","??","??"];
    for (var x =0;x<cadena.length;x++){
      var letra = cadena[x];
      for (var y =0;y<10;y++){
        if (letra == mayus[y]){
          //console.log(letra);
          respuesta = true;
        }
      }
    }
    return respuesta;
  }


  //funcion para encriptar
  function encubrir() {
    var cadena = obtener();
    //Detectaracento(cadena);
    if ( Detectaracento(cadena) || Detectarmayus(cadena) || Detectarcontenido()){
      resaltar(); 
    }else{
      quitarresaltar();
      ocultar_mostrar();
      for(var x = 0;x<cambio.length;x++){
        cadena = cadena.replaceAll(actual[x],cambio[x]); 
      }
      imprimir(cadena);
    }
  }

//funcion para desencriptar
  function desifrar() {
    var cadena = obtener();
    //Detectaracento(cadena);
    if ( Detectaracento(cadena) || Detectarmayus(cadena)|| Detectarcontenido()){
      resaltar();
    }else{
      quitarresaltar()
      ocultar_mostrar();
      for(var x = 0;x<cambio.length;x++){
        cadena = cadena.replaceAll(cambio[x],actual[x]); 
      }
      imprimir(cadena);
    }
  }



