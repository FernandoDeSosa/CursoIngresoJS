/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numero;
	var sumaNegativos;
	var sumaPositivos;
	var contadorNegativo;
	var contadorPositivo
	var contadorCeros;
	var contadorPares;
	var promedioNegativo;
	var promedioPositivo;
	var diferencia;

	contadorCeros = 0;
	respuesta = true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivo = 0;
	contadorNegativo = 0;
	contadorPares=0; 

	while (respuesta) 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		
		while (isNaN(numero)) 		
		{
			numero = parseInt(prompt("Ingrese un numero valido"));
		}
		
		if (numero < 0) 
		{
			sumaNegativos+= numero;
			contadorNegativo++;
		}
		else if(numero > 0)
		{
			sumaPositivos+= numero;
			contadorPositivo++;
		}
		else
		{
			contadorCeros++;
		}
		if (numero % 2 == 0)
		{
			contadorPares++;
		}
		respuesta = confirm("Desea ingresar otro?");
	}
if(contadorNegativo > 0)
{
	promedioNegativo = sumaNegativos / contadorNegativo;
}
if(contadorPositivo > 0)
{
	promedioPositivo = sumaPositivos / contadorPositivo;
}

diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es :"+sumaNegativos); //nos muestra todo en una pagina blanca
	document.write("<br>la suma de positivos es :"+sumaPositivos);
	document.write("<br>cantidad de positivos es :"+contadorPositivo);
	document.write("<br>cantidad de negativos es :"+contadorNegativo);
	document.write("<br>cantidad de ceros es :"+contadorCeros);
	document.write("<br>cantidad de numeros pares es :"+contadorPares);
	document.write("<br>promedio de positivos es :"+promedioPositivo);
	document.write("<br>promedio de negativos es :"+promedioNegativo);
	document.write("<br>diferencia entre positivos y negativos :"+diferencia);

//<br> salto de linea

}
/*  do while es para que al menos se ejecute una vez*/