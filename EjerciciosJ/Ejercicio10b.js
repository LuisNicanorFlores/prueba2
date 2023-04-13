function valida(campo){
    var bRet = false;
    if (campo.value == "")
        alert("Faltan datos");
    else 	if (!campo.value.match(/^[A-Z]{3,4}[0-9]{6}[A-Z]{3}[0-9]{2}$/))
            alert("No tiene formato de RFC");
        else
            bRet = true;
    return bRet;
}