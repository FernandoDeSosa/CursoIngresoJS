function mostrar()
{
	var cantidadRepeticiones;
	var pares;

	pares = 0;
	do{
		cantidadRepeticiones = prompt("Ingrese cantidad de repeticiones");
		cantidadRepeticiones = parseInt(cantidadRepeticiones);

	}while(cantidadRepeticiones < 1 || isNaN(cantidadRepeticiones));

	for(var i = 1; i < cantidadRepeticiones; i++)
	{	
		
		if(i % 2 == 0)
		{
			
			console.log(i++)
			pares++;
		}

	}
	console.log("Cantidad de pares " + pares);
/**
 * for(var i=2;i<=cantidadDeREpeticiones;i+=2){
 * contadorDePares++
 * console.log(i)
 * 2 y le suma el 2 siempre va a ser par
 * }
 * 
 */
}//FIN DE LA FUNCIÓN