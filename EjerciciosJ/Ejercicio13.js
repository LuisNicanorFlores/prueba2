function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('O_'+id);

    if(elemento.style.display == "" || elemento.style.display == "block") {
             elemento.style.display = "none";

      enlace.value = 'Mostrar contenidos';
    }
    else {
      elemento.style.display = "block";
      enlace.value = 'Ocultar contenidos';
    }
  }