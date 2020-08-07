function mostrar()
{
	var destinoIngresado;
	
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado) 
	{
		case "Bariloche":

			alert("Hace frio");
			
			break;

		case "Mar del plata":

			alert("Hace calor");

			break;

		case "Cataratas":

			alert("Hace calor");

			break;

		case "Cordoba":

			alert("Hace frio");

			break;

		default:
			break;
	}
}//FIN DE LA FUNCIÓN