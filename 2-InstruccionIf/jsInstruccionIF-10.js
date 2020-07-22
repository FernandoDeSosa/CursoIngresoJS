function mostrar()
{
	var numeroUno;
	var numeroDos;
	var max;
	var min;

	max = 52;
	min = 1;
	
	max = parseInt(max);
	min = parseInt(min);

	numeroUno = Math.floor(Math.random() * (max - min)) + min;
	numeroDos = Math.floor(Math.random() * (max - min)) + min;

	if(numeroUno % 2 == 0 && numeroDos % 2 == 0)
	{
		alert(numeroUno * numeroDos);
	}
	else
	{
		if(!(numeroUno % 2 == 0 && numeroDos % 2 == 0))
		{
			alert(numeroUno - numeroDos);
		}
		
	}	
	if(numeroDos % 5 == 0)
	{
		alert(Math.pow(numeroDos,3));
	}
	else
	{
	    if(numeroUno % 5 == 0)
	{
		alert(Math.pow(numeroUno,3));
	}
	}
//a- si lo dos son pares multiplicarlos
//b-si los dos son iumpares restarlos
//c-si alguno es divisible por 5 elevarlo al cubo
//d-si no ocurrio nada poner no paso nada
//e-mostrar el resultado en un solo alert
	
		
	





































	/*
	var nota;
	var min;
	var max;

	min = 0;
	max = 11;

	nota = Math.floor(Math.random() * (max - min)) + min;

	if(nota >= 9)
	{
		alert(nota +" Excelente");
	}
	else
	{
		if( nota > 4)
		{
			alert(nota + " Aprobo");
		}
		else 
		{
			alert(nota + " La proxima se puede");
		}
	}*/

}//FIN DE LA FUNCIÓN