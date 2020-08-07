function mostrar()
{	
	var cantidadDeRepeticiones;

	do {cantidadDeRepeticiones = prompt("Ingrese cantidad de repeticiones");
	cantidadDeRepeticiones = parseInt(cantidadDeRepeticiones); //convertimos el prompt string a numero

	}while(cantidadDeRepeticiones < 1 || isNaN(cantidadDeRepeticiones))//Si no es un numero o menor a 1 vuelve a preguntar
	{

	}

	for (var i = 0;i < cantidadDeRepeticiones;i++) //i siempre va a valer menor que las repeticiones, se forma un bucle
	{
		console.log("HOLA UTN FRA");
	}
}//FIN DE LA FUNCIÓN

