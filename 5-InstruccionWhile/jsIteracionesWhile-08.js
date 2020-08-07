/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	var numero;
	var respuesta;
	var suma;
	var contador;
	var multiplicar;
	

	suma = 0;
	contador = 0;
	respuesta = true;
	multiplicar = 1;

	while (respuesta) 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) 			//Si lo ingresado no es un numero entonces lo vuelve a pedir
		{
			numero = parseInt(prompt("Ingrese un numero"));
		}

		if (numero > 0) 
		{	
			suma+= numero;

			txtIdSuma.value = suma;

			
		}

		else
		{

			multiplicar = multiplicar * numero;

			txtIdProducto.value = multiplicar;

			
		}
	
		contador++;


		respuesta = confirm("Desea continuar?");
		
	}

	//txtIdSuma.value = suma;
	//txtIdProducto.value = multiplicar;
	
}//FIN DE LA FUNCIÓNa