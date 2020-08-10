/**En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
	var respuesta = true;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;

	while(respuesta){

		do{
			nombre = prompt("Ingrese su nombre");
		}while(!(isNaN(nombre)));

		do{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
		}while(isNaN(edad));

		do{
			sexo = prompt("Ingrese su sexo");
		}while(sexo != "f" && sexo != "m");

		do{
			estadoCivil = prompt("Ingrese su estado civil");
		}while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do{
			temperatura = prompt("Ingrese su temperatura");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura));

				//a) El nombre de la persona con mas temperatura.

				if(banderaTemperaturaMayor)
				{
					nombreTemperaturaMayor = nombre;
					temperaturaMayor = temperatura;
					banderaTemperaturaMayor = false;
				}else if(temperatura > temperaturaMayor)
				{
					temperaturaMayor = temperatura;
					nombreTemperaturaMayor = nombre;
				}
		
				//b) Cuantos mayores de edad estan viudos
		
				if(edad > 17 && estadoCivil == "viudo")
				{
					contadorMayoresViudos++;
				}
		
				//c) La cantidad de hombres que hay solteros o viudos.
		
				if(sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo")
				{
					contadorHombresSolterosViudos++;
				}
		
				//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		
				if(edad > 60 && temperatura > 38)
				{
					contadorTerceraEdadConFiebre++;
				}
				
				//e) El promedio de edad entre los hombres solteros
		
				if(sexo == "m" && estadoCivil == "soltero")
				{
					acumuladorHombresSolteros+= edad;
					contadorHombresSolteros++;
				}
		
				promedio = acumuladorHombresSolteros / contadorHombresSolteros;

		respuesta = confirm("Desea continuar?");
	}

	//a
	console.log("el nombre de la persona con mas temperatura es " + nombreTemperaturaMayor);
	//b
	console.log("Los mayores viudos son " + contadorMayoresViudos);
	//c
	console.log("Los hombres viudos o solteros son " + contadorHombresSolterosViudos);
	//d
	console.log("Las personas de la tercera edad con fiebre son " + contadorTerceraEdadConFiebre);
	//e
	console.log("el promedio de edad entre hombres solteros es " + promedio);


}