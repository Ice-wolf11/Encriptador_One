  function copiar(){
    //con estp estamos obteniendo el texto del text area, sleccionando el contenido y pasando este al portapapeles
    var output = document.getElementById("text_out");
    output.select();
    output=document.execCommand("copy");//para copiar texto al portapaples
    alert("Copiado al portapapeles")
  }
  
  function ocultar_mostrar(){
    document.getElementById("parrafos").style.display = "none";//para ocultar el texto
    document.getElementById("copiar").style.display = "initial";//para mostrar el texto
  }

  //funcion para obtener el texto del input
  function obtener(){
    var input = document.getElementById("text_in_1").value;
    return input;
  }

  //funcion para imprimir el texto obtenido del input en el output
  function imprimir(cadena){
    var output = document.getElementById("text_out").textContent = cadena;
  }

  function encubrir() {
    ocultar_mostrar();
    var cadena = obtener();
    for (var x =0;x<5;x++){
      if(x==0){
        cadena = cadena.replaceAll("e","enter")
      }else if(x==1){
        cadena = cadena.replaceAll("i","imes");
      }else if(x==2){
        cadena = cadena.replaceAll("a","ai");
      }else if(x==3){
        cadena = cadena.replaceAll("o","ober");
      }else if(x==4){
        cadena = cadena.replaceAll("u","ufat");
      } 
    }
    imprimir(cadena);
  
  }

  function desifrar() {
    ocultar_mostrar();
    var cadena = obtener();
    for (var x =0;x<5;x++){
      if(x==0){
        cadena = cadena.replaceAll("enter","e")
      }else if(x==1){
        cadena = cadena.replaceAll("imes","i");
      }else if(x==2){
        cadena = cadena.replaceAll("ai","a");
      }else if(x==3){
        cadena = cadena.replaceAll("ober","o");
      }else if(x==4){
        cadena = cadena.replaceAll("ufat","u");
      } 
    }
    imprimir(cadena);
  }