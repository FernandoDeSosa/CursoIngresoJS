function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

	if (edad >= 18)
	{
		alert("Es mayor de edad");

	} 
	else
	{
		if(edad >= 13) //no poner && <= 17 porque ya sabemos que +18 es false
		{
			alert("Es adolecente");
		}
		else
		{
			alert("Es un niño");
		}
	}
		
	


}//FIN DE LA FUNCIÓN