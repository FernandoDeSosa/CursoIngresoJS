
function mostrar()
{
/**
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */

var contador = 0;
var tipoProducto;
var precio;
var unidades;
var marca;
var fabricante;
var jabonMasCaro;
var unidadJabonMasCaro;
var fabricanteJabonMasCaro;
var banderaJabonMasCaro = true;
var acumuladorJabon = 0;
var acumuladorBarbijo = 0;
var acumuladorAlcohol = 0;
var contadorJabon = 0;
var contadorBarbijo = 0;
var contadorAlcohol = 0;
var promedio;

while(contador < 5){

	do{
		tipoProducto = prompt("Ingrese un producto");
	}while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

	do{
		precio = prompt("Ingrese precio");
		precio = parseInt(precio)
	}while(precio < 100 || precio >300);

	do{
		unidades = prompt("Ingrese cantidad de unidades");
		unidades = parseInt(unidades);
	}while(unidades <= 0 || unidades > 1000);

	do{
		marca = prompt("Ingrese marca");
	}while(marca == false);

	do{
		fabricante = prompt("Ingrese fabricante");
	}while(fabricante == false);

//a) Del más caro de los jabones, la cantidad de unidades y el fabricante

if(tipoProducto == "jabon" && banderaJabonMasCaro){
	jabonMasCaro = precio;
	unidadJabonMasCaro = unidades;
	fabricanteJabonMasCaro = fabricante;
	banderaJabonMasCaro = false;
}else if(tipoProducto == "jabon" && precio > jabonMasCaro){
	jabonMasCaro = precio;
	unidadJabonMasCaro = unidades;
	fabricanteJabonMasCaro = fabricante;
}
//a
if(tipoProducto == "jabon"){
	console.log("Del jabon mas caro, la cantidad de unidades es " + unidadJabonMasCaro + " y el fabricante es " + fabricanteJabonMasCaro);
}

//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra

switch(tipoProducto){
	case "jabon":
		acumuladorJabon+= unidades;
		contadorJabon++;
		break;
	case "barbijo":
		acumuladorBarbijo+= unidades;
		contadorBarbijo++;
		break;
	case "alcohol":
		acumuladorAlcohol+= unidades;
		contadorAlcohol++;
		break;
}

//c
if(tipoProducto == "barbijo"){
	console.log("Las unidades de barbijos en total que se compraron fueron " + acumuladorBarbijo);
}



	contador++;


}//fin del while

//b
if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo){
	promedio = acumuladorJabon / contadorJabon;
	console.log("El promedio por compra de jabon es " + promedio);
}else if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo){
	promedio = acumuladorAlcohol / contadorAlcohol;
	console.log("El promedio por compra de alcohol es " + promedio);
}else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
	promedio = acumuladorBarbijo / contadorBarbijo;
	console.log("El promedio por compra de barbijo es " + promedio);
}

//c) Cuántas unidades de Barbijos se compraron en total 








}
