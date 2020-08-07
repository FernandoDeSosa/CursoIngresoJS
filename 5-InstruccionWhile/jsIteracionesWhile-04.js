/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (!(numeroIngresado >=0 && numeroIngresado <=9) )
	{
		numeroIngresado = prompt("Numero incorrecto");
		numeroIngresado = parseInt(numeroIngresado);
	}

	txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN