function mostrar()
{

	var cantidadRepeticiones;
	var contadorPrimos;

	contadorPrimos = 0;
	do{
		cantidadRepeticiones = prompt("Ingrese cantidad de repeticiones");
		cantidadRepeticiones = parseInt(cantidadRepeticiones);

	}while(cantidadRepeticiones < 1 || isNaN(cantidadRepeticiones));

	for(var i = 2; i < cantidadRepeticiones; i++)
	{	
		
		if(i / 2 ==! i)
		{
			
			console.log(i++)
			contadorPrimos++;
		}

	}
	console.log("Cantidad de numeros primos" + contadorPrimos);


}//FIN DE LA FUNCIÓN