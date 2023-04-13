function agregaLinea(){
    var oTbl = document.getElementById("tblUno");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);
    var oCelda3 = oLin.insertCell(2);


    oCelda1.innerHTML = "Celda";
    oCelda2.innerHTML = 'Texto y campo ' +'<input type="text" name="campo"/>';
oCelda3.innerHTML ="mmmmm"
}

function eliminaLinea(){
    var oTbl = document.getElementById("tblUno");
    oTbl.deleteRow(-1);
}
function modifica(tipo) {
    lista = document.getElementById("lista");
    switch(tipo){
    case 'D':    //Agrega elemento mediante DOM
                var elemento = document.createElement("li");
                var texto = document.createTextNode("Nuevo DOM");
                elemento.appendChild(texto);
                lista.appendChild(elemento);
                break;
    case 'H': //Agrega elemento mediante HTML
                 var nuevoElemento = "<li>Nuevo HTML</li>";
                lista.innerHTML = lista.innerHTML + nuevoElemento;
                break;
    default:  //Elimina elemento
                alert("Elimina");
                elemento_li = document.getElementsByTagName("li");
                lista.removeChild(elemento_li[ elemento_li.length-1]);
      }
    }