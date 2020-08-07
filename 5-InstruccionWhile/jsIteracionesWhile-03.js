/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var contador;

	contador = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") 
	{
		contador++;

		if(contador == 3)
		{
			alert("Ya no tiene mas intentos");
		}
		claveIngresada = prompt("ingrese el número clave.");

	//while(calveIngresada !="utn750" && contador <3)
	}
	
}//FIN DE LA FUNCIÓN
