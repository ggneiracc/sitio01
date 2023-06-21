function fnGenerarTabla(res,num,nom,ape,tur,gen)
{ 
	document.write(
	`
	<table border='1'>
		<tr>
			<th colspan='3' class='titulo'>Datos personales ${res} </th>
		</tr>
		<tr>
			<td class="subTitulo">Nombres</td>
			<td rowspan='4'><img src='img/f${num}.jpg'></td>
			<td class="subTitulo"> Turno: </td>
		</tr>
		<tr>
			<td id='tdDer'> ${nom}: </td>
			<td id='tdDer'> ${tur}: </td>
		</tr>
		<tr>
			<td class="subTitulo"> Apellidos: </td>
			<td class="subTitulo"> Género </td>
		</tr>
		<tr>
			<td id='tdDer'> ${ape} </td>
			<td id='tdDer'> ${gen} </td>
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