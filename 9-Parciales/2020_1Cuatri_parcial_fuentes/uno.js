/*
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

	var contador = 0;
	var tipoProducto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var alcoholPrecioMasBarato;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var banderaAlcohol = true;
	var acumuladorAlcohol = 0;
	var acumuladorBarbijo = 0;
	var acumuladorJabon = 0;
	var contadorAlcohol = 0;
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var promedio;



	while(contador < 5)
	{
		do{
			tipoProducto = prompt("Ingrese un producto");
		}while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do{
			precio = prompt("Ingrese precio");
			precio = parseInt(precio);
		}while(precio < 100 || precio > 300 || isNaN(precio));

		do{
			unidades = prompt("Ingrese cantidad de unidades");
			unidades = parseInt(unidades);
		}while(unidades < 0 || unidades > 1000 || isNaN(unidades));

		do{
			marca = prompt("Ingrese marca");
		}while(marca == false);

		do{
			fabricante = prompt("Ingrese fabricante");
		}while(fabricante == false);

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		if(tipoProducto == "alcohol" && banderaAlcohol == true)
		{
			alcoholPrecioMasBarato = precio;
			alcoholMasBaratoUnidades = unidades;
			alcoholMasBaratoFabricante = fabricante
			banderaAlcohol = false;

		} else if(precio < alcoholPrecioMasBarato)
		{
			alcoholPrecioMasBarato = precio;
			alcoholMasBaratoUnidades = unidades;
			alcoholMasBaratoFabricante = fabricante;
		}

		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoProducto)
			{
				case "alcohol":
					acumuladorAlcohol+= unidades;
					contadorAlcohol++;
					break;

				case "barbijo":
					acumuladorBarbijo+= unidades;
					contadorBarbijo++;
					break;

				case "jabon":
					acumuladorJabon+= unidades;
					contadorJabon++;
					break;
			}
		





		contador++;
	}

	//a
	
		if(tipoProducto == "alcohol"){
		console.log("La cantidad de unidades del alcohol mas barato es " + alcoholMasBaratoUnidades + " y el fabricante es " + alcoholMasBaratoFabricante);
		}
	//b

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		promedio = acumuladorAlcohol / contadorAlcohol;
		console.log("El promedio es " + promedio)
	}else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
	{
		promedio = acumuladorBarbijo / contadorBarbijo;
		console.log("El promedio es " + promedio)
	}else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
	{
		promedio = acumuladorJabon / contadorJabon;
		console.log("El promedio es " + promedio)
	}

	//c) Cuántas unidades de jabones hay en total*/ 

	console.log("la cantidad de unidades de jabones son " + acumuladorJabon);

}
