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
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioMasBaratoAlcohol;
	var cantidadUnidadesPrecioMasBaratoAlcohol;
	var fabricantePrecioMasBaratoAlcohol;
	var bandera = true;
	var acumuladorJabon = 0;
	var acumuladorAlcohol = 0;
	var acumuladorBarbijo = 0;
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var contadorAlcohol = 0;
	var promedio;



	while(contador < 5)
	{
		do{
			tipoProducto = prompt("Ingrese producto");
		}while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do{
			precio = prompt("Ingrese precio");
			precio = parseInt(precio);
		}while(precio < 100 || precio > 300 || isNaN(precio));

		do{
			cantidadUnidades = prompt("Ingrese cantidad de unidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		}while(cantidadUnidades < 1 || cantidadUnidades > 1000 || isNaN(cantidadUnidades));

		do{
			marca = prompt("Ingrese marca");
		}while( marca == false);

		do{
			fabricante = prompt("Ingrese fabricante");
		}while(fabricante == false);

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

		if(tipoProducto == "alcohol" && bandera == true){
			precioMasBaratoAlcohol = precio;
			cantidadUnidadesPrecioMasBaratoAlcohol = cantidadUnidades;
			fabricantePrecioMasBaratoAlcohol = fabricante;
			bandera = false;
		}else if(tipoProducto == "alcohol" && precio < precioMasBaratoAlcohol){
			precioMasBaratoAlcohol = precio;
			cantidadUnidadesPrecioMasBaratoAlcohol = cantidadUnidades;
			fabricantePrecioMasBaratoAlcohol = fabricante;
		}

		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoProducto){
			case "alcohol":
				acumuladorAlcohol+= cantidadUnidades;
				contadorAlcohol++;
				break;
			case "barbijo":
				acumuladorBarbijo+= cantidadUnidades;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabon+= cantidadUnidades;
				contadorJabon++;
				break;
		}



		contador++;
	}
	
	//a
	console.log("la cantidad de unidades del alcohol mas barato es " + cantidadUnidadesPrecioMasBaratoAlcohol + " y el fabricante es " + fabricantePrecioMasBaratoAlcohol);

	//b
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
		promedio = acumuladorAlcohol / contadorAlcohol;
		console.log("El promedio por compra de alcohol es " + promedio);
	}else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol){
		promedio = acumuladorJabon / contadorJabon;
		console.log("El promedio por compra de jabon es " + promedio);
	}else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
		promedio = acumuladorBarbijo / contadorBarbijo;
		console.log("El promedio por compra de barbijo es " + promedio);
		
	}

	//c) Cuántas unidades de jabones hay en total
	console.log("las unidades de jabones en total son " + acumuladorJabon);
}