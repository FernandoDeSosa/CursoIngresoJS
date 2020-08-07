/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var contador;
	
	contador = 0;

	while (contador < 10) 
	{
		contador++;

		console.log(contador);
	}
}//FIN DE LA FUNCIÓN

/*Contador: Variable mas constante
  Contador = contador +1;
  Contador +=1; La variable suma la variable
  Contador++; Solo permite sumarle uno, primero muestra el valor y despues lo suma 012
  Contador--; Resta
  ++contador; primero suma y despues muetra ej: ++contador 0= 123
  Acumulador: variable mas otra variable
  acumulador = acumulador + otraVariable
  acumulador+=otraVariable
  ej 
  promedio
  var contador=0;
  var numero;         contaodres y acumuladores siempre en 0
  var acumulador=0   
  var promedio;

  while(contador <3)
  {
	  contador = contador+1;
	  ++contador;

	  numero = prompt("Ingrese un numero")
	  numero = parseInt(numero)
	  
	  acumulador = acumulador + numero;
	}

	promedio = cumulador/3;
	promedio = acumulador/contador;

	console.log("El promedio es" promedio);
--

while(contador < 100)
{
	contador++;
	cnsole.log(contador);

	if(contador ==50)
	{
		break;
	}
	o
	if(contador%3 == 0)
	{
		console.log("Numero Divisible" + contador);
		continue;
	}
	console.log(contador); el continue e brak salta esta linea.
	va a dar una alerta a los numeros divisibles

	continue=salta el codigo como el break pero vuelve a evaluar la condicion
}
*/

