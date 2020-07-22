function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;

	edad = parseInt(edad);

	if(edad < 18 && estadoCivilIngresado != "Soltero") //El valor de estc value es en string
	{
		alert("Es muy pequeño para no ser soltero");
	}


}//FIN DE LA FUNCIÓN