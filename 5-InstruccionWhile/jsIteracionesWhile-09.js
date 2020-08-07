/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{      
	//declaro las variables

	var numero;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var primerNumero;

	respuesta = true;
	primerNumero = 0;

//le pido al usuario que ingrese un numero

	while (respuesta) 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		
		while (isNaN(numero)) 		
		{
			numero = parseInt(prompt("Ingrese un numero valido"));
		}

//inicializo el num max y min con el primer num que ingresa el usuario

		if (primerNumero == 0) 
		{
			numeroMaximo = numero;
			numeroMinimo = numero;
			
			primerNumero = 1;
		}

		//si el nuevo nuevo ingresado es mayor lo reemplazo en num max

		if (numero > numeroMaximo) 
		{
			numeroMaximo = numero;	
		}

		//lo mismo con el min

		else if (numero < numeroMinimo)
		{
			numeroMinimo = numero;
		}

	//le pregunto si quiere ingresar otro num

		respuesta = confirm("Desea ingresar otro?")

		
	}

	//muestro los valores

	txtIdMaximo.value  = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

	//var banderaDelPrimero;
	/*var numero;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta; 

	

	banderaDelPrimero = "es el primero";
	respuesta = true;
	contador = 0;


	while (respuesta) 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) 			//Si lo ingresado no es un numero entonces lo vuelve a pedir
		{
			numero = parseInt(prompt("Ingrese un numero"));
		}

		contador++;

		respuesta = confirm("Desea continuar?");

		numeroMinimo = Math.min(numero);
		numeroMaximo = Math.max(numero)
	}



	txtIdMaximo.value  = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;*/
}//FIN DE LA FUNCIÓN