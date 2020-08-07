function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	

	switch (mesDelAño) {
		case "Enero":
		case "Abril":
		case "Julio":
		case "Agosto":
		case "Ocutubre":
		case "Diciembre":

			alert("Este mes tiene 31 dias");
				break;
	
		case "Febrero":
			
			alert("Este mes tiene 28 dias");
				break;


		
	
		default:

			alert("Este mes tiene 30 dias");
			break;
	}
	



}//FIN DE LA FUNCIÓN