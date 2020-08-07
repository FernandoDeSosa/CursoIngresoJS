function mostrar()
{
	var contador;
	var acumulador;
	var promedio;
	var numero;
	

	contador=0;
	acumulador=0;
	
	while (contador < 5) 
	{
		contador = contador +1;

		numero = prompt("Ingrese 5 numeros");

		numero = parseInt(contador);

		acumulador = acumulador + contador;
	}
	
	promedio = acumulador / contador;
	
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}//FIN DE LA FUNCIÓN