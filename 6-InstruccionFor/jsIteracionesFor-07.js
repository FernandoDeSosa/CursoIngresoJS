function mostrar()
{

	var cantidadRepeticiones;
	var contadorDivisores;

	contadorDivisores = 0;
	do{
		cantidadRepeticiones = prompt("Ingrese cantidad de repeticiones");
		cantidadRepeticiones = parseInt(cantidadRepeticiones);

	}while(cantidadRepeticiones < 0 || isNaN(cantidadRepeticiones));

	for(var i = 1; i < cantidadRepeticiones; i++)
	{	
		
		if(cantidadRepeticiones % i == 0)
		{	
			console.log(i++)
			contadorDivisores++;
		}

	}
	console.log("Cantidad de numeros divisibles " + contadorDivisores);


}//FIN DE LA FUNCIÓN