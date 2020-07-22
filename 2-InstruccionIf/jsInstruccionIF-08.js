function mostrar()
{
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;

	edad = parseInt(edad);

	if(edad >= 18 && estadoCivilIngresado == "Soltero")
	{
		alert("Es soltero y no es menos");
	}

}//FIN DE LA FUNCIÓN