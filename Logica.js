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

  //funcion para detectar mayusculas
  function Detectarmayus(cadena){
    var cadena=obtener();
    for (var x =0;x<cadena.length;x++){
      var letra = cadena[x];
        if (letra===letra.toUpperCase()){
          return true;
        }else{
          return false;
        }
    }
  }
  
  //funcion para detectar acentos
  function Detectaracento(cadena){
    var respuesta = false;
    const mayus=["á","Á","é","É","í","Í","ó","Ó","ú","Ú"];
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
    if ( Detectaracento(cadena)||Detectarmayus(cadena)){
      alert("Solo minusculas y sin acentos")
    }else{
      ocultar_mostrar();
      cadena = cadena.replaceAll("e","enter");
      cadena = cadena.replaceAll("i","imes");
      cadena = cadena.replaceAll("a","ai");
      cadena = cadena.replaceAll("o","ober");
      cadena = cadena.replaceAll("u","ufat");
      imprimir(cadena);
    }
  }
//funcion para desencriptar
  function desifrar() {
    var cadena = obtener();
    //Detectaracento(cadena);
    if ( Detectaracento(cadena)||Detectarmayus(cadena)){
      alert("Solo minusculas y sin acentos")
    }else{
      ocultar_mostrar();
      cadena = cadena.replaceAll("enter","e");
      cadena = cadena.replaceAll("imes","i");
      cadena = cadena.replaceAll("ai","a");
      cadena = cadena.replaceAll("ober","o");
      cadena = cadena.replaceAll("ufat","u");
      imprimir(cadena);
    }
  }