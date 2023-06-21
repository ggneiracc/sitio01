function fnValidar02()
{
	var xTexto = document.getElementById("txtTexto").value;
	if(xTexto=="" || /^\s+$/.test(xTexto))
	{
		alert("Escriba TEXTO...");
		return false;
	}

	var elementoGenero = document.getElementsByName("rdTurno");
	var seleccionado = false; 
	for(var i=0; i < elementoGenero.length; i++)
	{
		if(elementoGenero[i].checked)
		{
			seleccionado = true;
		}
	}

	if(!seleccionado){
		alert("Elija TURNO");
		return false;
	}

	var elementoPreferencias = document.getElementsByName("chkPref[]");
	var contadorPreferencias = 0; 
	for(var i=0; i < elementoPreferencias.length; i++)
	{
		if(elementoPreferencias[i].checked)
		{
			contadorPreferencias++;
		}
	}

	if(contadorPreferencias != 3 ){
		alert("Elija TRES PREFERENCIAS... ha elegido "+contadorPreferencias);
		return false;
	}

	/// Caso contrario ///
	return true;
}