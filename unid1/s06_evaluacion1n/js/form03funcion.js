function fnGenerarTabla(res,num,nomApe,tur,gen)
{ 
	document.write(
	`
	<table border='0'>
		<tr>
			<td id='tdIzq'>Nombres y Apellidos: </td><td id='tdDer'> ${nomApe} </td>
			<td rowspan='3'><img src='img/f${num}.jpg'></td>
		</tr>
		<tr>
			<td id='tdIzq'>Turno: </td><td id='tdDer'> ${tur} </td>
		</tr>
		<tr>
			<td id='tdIzq'>Género: </td><td id='tdDer'> ${gen} </td>
		</tr>
		<tr>
			<th colspan='3' class='titulo'>Datos personales ${res} </th>
		</tr>
	</table><br>
	`
	);
}

function fnTurno(turno)
{
	switch(turno)
	{
		case 'M': return "Día"; break;
		case 'N': return "Noche"; break;
		default: return "???"; break;
	}
}

function fnGenero(genero)
{
	switch(genero)
	{
		case 'M': return "Masculino"; break;
		case 'F': return "Femenino"; break;
		default: return "???"; break;
	}
}