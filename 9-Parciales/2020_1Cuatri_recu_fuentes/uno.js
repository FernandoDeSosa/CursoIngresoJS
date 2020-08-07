
function mostrar()
{
	/**compra de 5 producto- ejecutar 5 veces 
	 * 
	*/

	var contador;
	var tipoDeProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var precioMaximoJabon;
	var contadorDeJabones = 0;
	var cantidadDeUnidadesJabonMaximo;
	var fabricanteDeJabonesMaximos;
	var cantidadesMaximasTotales=0; // tiene que ser mayor a 0
	var acumuladorCantidadesBarbijos=0;
	var acumuladorCantidadesJabon=0;
	var acumuladorCantidadesAlcohol=0;
	var contadorPorCompraBarbijo=0;
	var contadorPorCompraAlcohol=0;
	var contadorPorCompraJabon=0;




	contador = 0;

	while(contador < 5)
	{
		contador++;

		do{
			tipoDeProducto = promp("Ingrese tipo de producto");//validadr barbijo jabon alcohol
		} while(tipoDeProducto !="barbijo" 
		&& tipoDeProducto !="jabon" 
		&& tipoDeProducto != "alcohol")

		do{
			precio = prompt("Ingrese un precio");
			precio = parseInt(precio);
		} while(precio < 100 || precio > 300 || isNaN(precio))//validar entre 100 y 300
	}	do{
		cantidadUnidades = prompt("Ingrese cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);
		
		}while(cantidadUnidades < 1 || cantidadUnidades > 999)
		do{
			marca = prompt("Ingrese marca");
		}while(marca ==false);
		do{
			fabricante = prompt("Ingrese fabricante");
		}while(fabricante == false)  //para confirmar validar se prueba con bluce if
		
		//A mas caro de los jabones/ sacar maximo de jabon. ver cuando se compro por primera vez y hacer como bandera
		
		if(tipoDeProducto =="jabon")
		{
			contadorDeJabones++; //ver si es maximo o minimo
			if(contadorDeJabones == 1)
			{
				precioMaximoJabon = precio;
				cantidadDeUnidadesJabonMaximo = cantidadUnidades;
				fabricanteDeJabonesMaximos = fabricante;
			}else
			{
				if(precio > precioMaximoJabon)
				{
					precioMaximoJabon = precio;
				}
			}
		}
		//punto b Del tipo de producto con más unidades en total de la compra, el promedio por compra
		
		//maximo, cantidad, saber que tipo de producto es el que mas cantidades tiene
		//promedio de la compra
		switch(tipoDeProducto){
			case "alcohol":
				acumuladorCantidadesAlcohol += cantidadUnidades;
				contadorPorCompraBarbijo++;
				break;
			case "barbijo":
				acumuladorCantidadesBarbijos+= cantidadUnidades;
				contadorPorCompraBarbijo++;
				break;
			case "jabon":
				acumuladorCantidadesJabon+=cantidadUnidades;
				contadorPorCompraJabon++;
				break;

		
		}
	
		//end while

		//descubrir cual de las tres es mayor

		//pubnto b
		if(acumuladorCantidadesAlcohol > acumuladorCantidadesBarbijos && acumuladorCantidadesAlcohol > acumuladorCantidadesJabon){
			//el mayor es alcohol
			promedioPorCompra =acumuladorCantidadesAlcohol;

		}else if(acumuladorCantidadesBarbijos > acumuladorCantidadesJabon){
			//el mayor es barbijo
			promedioPorCompra = acumuladorCantidadesBarbijos;
		}else{
			//jabon es mayor
			promedioPorCompra = acumuladorCantidadesJabon;
		}





































	/*var respuesta;
	var producto;
	var marcaJabon;
	var cantidadJabon;
	var cantidadBarbijo;
	
	respuesta = true;	
	marcaJabon = "Xlux";
	

	while(respuesta)
	{
		producto = prompt("Ingrese un producto");

		

		if(producto == "jabon")
		{
			cantidadJabon = prompt("Ingrese cantidad de jabones");
			cantidadJabon = parseInt(cantidadJabon);

			while(cantidadJabon < 1 || cantidadJabon > 999 || isNaN(cantidadJabon))
			{
				cantidadJabon = prompt("Ingrese cantidad valida");
			}

			console.log("Usted compro " + cantidadJabon + " De " + producto);
				
		}
		else if (producto == "barbijo")
		{
			cantidadBarbijo = prompt("Ingrese cantidad de barbijos");
			cantidadBarbijo = parseInt(cantidadBarbijo);

			while(cantidadBarbijo < 1 || cantidadBarbijo > 999 || isNaN(cantidadBarbijo))
			{
				cantidadJabon = prompt("Ingrese cantidad valida");
			}


			console.log("Ustede compro" + cantidadBarbijo + " De " + producto);
		}
		respuesta = confirm("Desea ingresar otro producto?");
	}*/

































	/*var producto1;
	var precio1;
	var cantidad1;
	
	var marcajabon;
	

	producto1 = prompt("Ingrese producto");
	precio1 = 100;
	cantidad1 = prompt("Ingrese cantidad de jabones");
	cantidad1 = parseInt(cantidad1);
	marcajabon = "Xlux"

	while(producto1!="jabon") 
	{
		producto1 = prompt("Ingrese producto valido");
	}

	while(cantidad1 < 1 || cantidad1 > 999 || isNaN(cantidad1))
	{
		cantidad1 = prompt("Ingrese cantidad valida");
	}
	
	
	

	console.log("Usted compro " + cantidad1 + " " + producto1 + " De marca " + marcajabon);*/





































	/*var producto1;
	var producto2;
	var producto3;
	var producto4;
	var producto5;

	var cantidadProducto1;
	var producto2;
	var producto3;
	var producto4;
	var producto5;
	var contadorProducto1;

	var precioProducto1;
	var precioTotal1;
	
	contadorProducto1 = 0;

	precioProducto1 = 100;
	
	
	producto1 = prompt("Ingrese producto");

	while(producto1!=("barbijo"))
	{
		producto1 = prompt("Ingrese un producto valido");
	}
	cantidadProducto1 = prompt("Ingrese cantidad de producto");
	cantidadProducto1 = parseInt(cantidadProducto1);

	while(cantidadProducto1 < 1 || cantidadProducto1 > 999 || isNaN(cantidadProducto1)){

		cantidadProducto1 = prompt("Ingrese una cantidad valida");
		contadorProducto1++;
	}
	precioTotal1 = precioProducto1 * contadorProducto1;
	console.log("Compra " + producto1 + cantidadProducto1 + precioTotal1);*/

}
