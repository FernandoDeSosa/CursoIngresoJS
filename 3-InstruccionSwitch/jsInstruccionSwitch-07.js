function mostrar()
{
	var destinoIngresado;
	
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado) 
	{
		case "Bariloche":

			alert("Usted se encuentra en el Oeste");
			
			break;

		case "Mar del plata":

			alert("Usted se encuentra en el Este");

			break;

		case "Cataratas":

			alert("Usted se encuentra en el Norte");

			break;

		case "Cordoba":

			alert("Usted se encuentra en el Sur");

			break;

		default:
			break;
	}
	

}//FIN DE LA FUNCIÓN