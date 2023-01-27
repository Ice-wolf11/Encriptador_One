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
    cadena = cadena.replaceAll("e","enter");
    cadena = cadena.replaceAll("i","imes");
    cadena = cadena.replaceAll("a","ai");
    cadena = cadena.replaceAll("o","ober");
    cadena = cadena.replaceAll("u","ufat");
    imprimir(cadena);
  
  }

  function desifrar() {
    ocultar_mostrar();
    var cadena = obtener();
    cadena = cadena.replaceAll("enter","e");
    cadena = cadena.replaceAll("imes","i");
    cadena = cadena.replaceAll("ai","a");
    cadena = cadena.replaceAll("ober","o");
    cadena = cadena.replaceAll("ufat","u");
    imprimir(cadena);
  }