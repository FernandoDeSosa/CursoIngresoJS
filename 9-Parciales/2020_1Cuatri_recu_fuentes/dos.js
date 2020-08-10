/**Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
d) El tipo mas caro */



function mostrar()
{

 var respuesta = true;
 var producto;
 var cantidadBolsas;
 var precio;
 var porcentaje;
 var precioBrutoTotal = 0;
 var productoPrecioBruto;
 var descuento;
 var descuentoTotal;
 var acumuladorCemento = 0;
 var acumuladorCal = 0;
 var acumuladorArena = 0;
 var banderaMasCaro = true;
 var productoMasCaro;
 var precioMasCaro;


while(respuesta){

  do{
    producto = prompt("Ingrese un producto");
  }while(producto != "arena" && producto !="cal" && producto != "cemento");

  do{
    cantidadBolsas = prompt("Ingrese cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);
  }while(cantidadBolsas < 0 || isNaN(cantidadBolsas));

  do{
    precio = prompt("Ingrese precio por bolsa");
    precio = parseInt(precio);
  }while(precio < 1 || isNaN(precio));

  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
 //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

if(cantidadBolsas > 30){
  porcentaje = 25;
}else if(cantidadBolsas > 10){
  porcentaje = 15;
}else{
  porcentaje = 0;
}


//a) El importe total a pagar , bruto sin descuento

productoPrecioBruto = precio * cantidadBolsas; // Para calcular el precio del producto se multiplica el precio por cada bolsa que compra
precioBrutoTotal+= productoPrecioBruto; // Aca acumulamos el total

//c)Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.

switch(producto){
  case "arena":
    acumuladorArena+= cantidadBolsas;
    break;
  case "cal":
    acumuladorCal+= cantidadBolsas;
    break;
  case "cemento":
    acumuladorCemento+= cantidadBolsas;
    break;
}

//d) El tipo mas caro 

if(banderaMasCaro){
  banderaMasCaro == false;
  
  productoMasCaro = producto;
  precioMasCaro = precio;
  
}else if(precio > precioMasCaro){
  productoMasCaro = producto;
  precioMasCaro = precio;
  
}





  respuesta = confirm("Desea continuar?");
}
//a
console.log("El precio bruto total a pagar es " + precioBrutoTotal);

//b) el importe total a pagar con descuento(solo si corresponde)
if(porcentaje != 0){ //si el descuento no es 0 entonces
  descuento = precioBrutoTotal * porcentaje / 100; //calculamos el descuento precio bruto por porcentaje de desc div 100
  descuentoTotal = precioBrutoTotal - descuento; //restamos el descuento al precio total

  console.log("El importe a pagar con descuento es " + descuentoTotal);
}

//C
if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
  console.log("El tipo con mas cantidad de bolsas en total es arena con " + acumuladorArena);
}else if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento){
  console.log("El tipo con mas cantidad de bolsas en total es cal con " + acumuladorCal);
}else if(acumuladorCemento > acumuladorCal && acumuladorCemento > acumuladorArena){
  console.log("El tipo con mas cantidad de bolsas en total es cemento con " + acumuladorCemento);
}

//D
console.log("El producto mas caro es " + productoMasCaro);





}
