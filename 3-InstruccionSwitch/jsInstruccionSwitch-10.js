function mostrar()
{
	var estacionIngresado;
	var destinoIngresado;

	estacionIngresado = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch (estacionIngresado) 
	{
		case "Invierno":

			switch (destinoIngresado) 
			{
				case "Bariloche":

					alert("Se viaja");	

				break;
			
				default:

					alert("No se viaja");

				break;
			}
			
			break;
		
		case "Verano":

			switch (destinoIngresado) 
			{
				case "Mar del plata":
				case "Cataratas":

					alert("Se viaja");
					
					break;
			
				default:

				alert("No se viaja");
			
					break;
			}

			break;

		case "Otoño":

			switch (destinoIngresado) 
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":

					alert("Se viaja");
					
					break;
			
				default:
					break;
			}

			break;
		
		case "Primavera":

			switch (destinoIngresado) 
			{
				case "Bariloche":

					alert("Se viaja");
					
					break;
			
				default:

					alert("No se viaja");	

					break;
			}
	
		default:
			break;
	}

}//FIN DE LA FUNCIÓN