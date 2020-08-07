function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifa;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	tarifa = 15000;

	tarifa = parseInt(tarifa);
 
	switch (estacionIngresada)
	
	{
		case "Invierno":

			switch (destinoIngresado) 
			{
				case "Bariloche":
				
					alert("Su tarifa final es de " + (120* tarifa) / 100);

				break;

				case "Cataratas":
				case "Cordoba":

					alert("Su tarifa final es de " + (90 * tarifa) / 100);
				
				break;

				case "Mar del plata":

					alert("Su tarifa final es de " + (80 * tarifa) / 100);

				default:
				break;

			}

			break;
		
		case "Verano":

			switch (destinoIngresado) 
			{
				case "Bariloche":

					alert("Su tarifa final es de " + (80 * tarifa) / 100);
					
					break;

				case "Cordoba":
				case "Cataratas":

					alert("Su tarifa final es de " + (110 * tarifa) / 100);
						
					break;
					
				case "Mar del plata":

					alert("Su tarifa final es de " + (120 * tarifa) / 100);
					
					break;
			
				default:
					break;
			}

			break;
	

		case "Otoño" || "Primavera":
			
			switch (destinoIngresado) 
			{
				case "Cordoba":

					alert(tarifa);
					
					break;
			
				default:

					alert("Su tarifa final es de " + (110 * tarifa) / 100);
					break;
			}

			break;
		
		default:

			alert("Su tarifa final es de " + (110 * tarifa) / 100);


			break;

	}

}//FIN DE LA FUNCIÓN