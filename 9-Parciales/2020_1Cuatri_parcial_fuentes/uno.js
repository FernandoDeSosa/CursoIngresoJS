/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/ 
function mostrar()
{

	//maximos y minimos calcular
	/**
	 * -infinito------------0----------+infinito
	 * 
	 * var maximo
	 * var minimo 
	 * crear bandera
	 * saber cuando es la primera interaccion, el unico numero va a ser el maximo
	 * por ser el unico, lo mimo con el minimo, distingfuit cuando es la primera
	 * interaccion
	 * declarar un flag(bandera)
	 * 
	 * var primeraAlteracion = true
	 * 
	 * if(primeraIteracion){
	 * primeraIteracion = false;
	 * maximo = cantidad;
	 * }else if(cantidad > maximo)
	 * {
	 * 	maximo = cantidad
	 * }
	 * otra manera con un rango y valor
	 * 
	 * var edad
	 * var edadMaxima
	 * 
	 * if(edad > edadMaxima){
	 * edadMaxima = edad
	 * }
	 * 
	 * 
	 */
	var contador;
	var tipoProducto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var contadorDeAlcohol;
	var precioMinimoAlcohol;
	var acumuladorFabricanteAlcohol = 0;
	var acumuladorCantidadesAlcohol = 0;
	var acumuladorCantidadesBarbijo = 0;
	var acumuladorCantidadesJabon = 0;
	var bandera = true;
	var banderafabricante = true;
	


	contadorDeAlcohol = 0;
	contador = 0;

	while(contador <5)
	{
		contador++;
	
		do{
		tipoProducto = prompt("Ingrese un producto");
		}while(tipoProducto != "barbijo" 
		&& tipoProducto != "jabon" 
		&& tipoProducto != "alcohol")

		do{
		precio = prompt("Ingrese precio");
		precio = parseInt(precio);
		}while(precio < 100 || precio >300 || isNaN(precio))
	
		do{
			unidades = prompt("Ingrese cantidad de unidades");
			unidades = parseInt(unidades);
		}while(unidades < 1 || unidades >1000 || isNaN(unidades))
		
		do{
			marca = prompt("Ingrese marca");
		}while(marca == false)

		do{
			fabricante = prompt("Ingrese fabricante");
		}while(fabricante == false)

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		if(tipoProducto == "alcohol" && bandera)
		{
			precioMinimoAlcohol = precio;
			bandera = false;
		}else if(tipoProducto == "alcohol" && precio < precioMinimoAlcohol)
		{
			precioMinimoAlcohol = precio;
		}
		if(tipoProducto == "alcohol")
		{
			acumuladorFabricanteAlcohol+= fabricante;
			
		}

		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoProducto)
		{
			case("alcohol"):
			acumuladorCantidadesAlcohol+= unidades;
			
			break;

			case("barbijo"):
			acumuladorCantidadesBarbijo+= unidades;
			
			break;

			case("jabon"):
			acumuladorCantidadesJabon+= unidades;
			
			break;
		}	

	
	
	
	
	}//end while

	console.log("precio minimo alcohol " + precioMinimoAlcohol);
	console.log("cantidad de alcohol " + acumuladorCantidadesAlcohol);
	console.log("Los fabricantes del alcohol son " + acumuladorFabricanteAlcohol);

	if(acumuladorCantidadesAlcohol > acumuladorCantidadesBarbijo && acumuladorCantidadesAlcohol > acumuladorCantidadesJabon)
	{
		console.log("alcohol tiene mas unidades " + acumuladorCantidadesAlcohol);
	}else if(acumuladorCantidadesBarbijo > acumuladorCantidadesAlcohol && acumuladorCantidadesBarbijo > acumuladorCantidadesJabon)
	{
		console.log("barbijo tiene mas unidades " + acumuladorCantidadesBarbijo)
	}else if(acumuladorCantidadesJabon > acumuladorCantidadesAlcohol && acumuladorCantidadesJabon > acumuladorCantidadesBarbijo)
	{
		console.log("jabon tiene mas unidades " + acumuladorCantidadesBarbijo);
	}else
	{
		console.log("Tienen la misma cantidad o es 0");//acumulador y contador de cantidades de veces que comporo, despues dividirslo
	}

	//c) Cuántas unidades de jabones hay en total

	console.log("Las unidades de jabones son " + acumuladorCantidadesJabon);


	
}
