function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;

	numeroUno = 1233;
	numeroDos = 222;
	numeroTres = 2222;

	//La forma correcta es unir el else con otro if

	if(numeroUno > numeroDos && numeroUno > numeroTres)
	{
		alert(numeroUno + " Es mayor");
	
	}
	else
	{
		if(numeroDos > numeroTres)
		{
			alert(numeroDos + " Es mayor");
		}

		else
		{
			alert(numeroTres + " Es mayor");
		}
		
		
	}
	
	/*var edad;

	edad = txtIdEdad.value;

	if (edad >= 13 && edad <= 17)
	{
		alert("Es adolecente");
	}*/
}