/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	var numero;
	var respuesta;
	var acumulador;
	var contador;
	

	acumulador = 0;
	contador = 0;
	respuesta = true;

	while (respuesta) 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)) 			//Si lo ingresado no es un numero entonces lo vuelve a pedir
		{
			numero = parseInt(prompt("Ingrese un numero"));
		}

		acumulador = acumulador + numero;
		contador++;

		respuesta = confirm("Desea continuar?");
	
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/contador;
	
}//FIN DE LA FUNCIÓN
	/*
	tenemos que crear una alerta que nos pregunte si queremos seguir, si ponemos s entonces se vuelve a ejecutar
	si se ejecuta entonces no pide el numero
	damos la oportunudad de que el while sea false en seguir = desea ingresar otro? si ponemos s vuelve a ejecutarse

	el acumulador acumula el numero y lo va sumando

	el promedio saca el primerio de toda la suma y lo muestra
	
	*/

//FIN DE LA FUNCIÓN