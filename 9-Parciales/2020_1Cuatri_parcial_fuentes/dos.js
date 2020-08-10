 /**Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro */
 
function mostrar()
{
  var respuesta = true;
  var tipoProducto;
  var cantidadBolsas;
  var precioBolsa;
  var porcentaje;
  var precioBrutoTotal = 0;
  var precioBrutoProducto;
  var descuento;
  var precioConDescuento;
  var acumuladorCantidadArena = 0;
  var acumuladorCantidadCal = 0;
  var acumuladorCantidadCemento = 0;
  var bandera = true;
  var precioMasCaro;
  var tipoMasCaro;


  while(respuesta){

    do{
      tipoProducto = prompt("Ingrese producto");
    }while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento");

    do{
      cantidadBolsas = prompt("Ingrese cantidad de bolsas");
      cantidadBolsas = parseInt(cantidadBolsas);
    }while(isNaN(cantidadBolsas));

    do{
      precioBolsa = prompt("Ingrese precio por bolsa");
      precioBolsa = parseInt(precioBolsa);
    }while(precio < 1 || isNaN(precioBolsa));

     /*Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar. */

    if(cantidadBolsas > 30){
      porcentaje = 25;
    }else if(cantidadBolsas > 10){
      porcentaje = 15;
    }else{
      porcentaje = 0;
    }

    //a) El importe total a pagar , bruto sin descuento

    precioBrutoProducto = precio * cantidadBolsas;
    precioBrutoTotal+= precioBrutoProducto;

    //c) Informar el tipo con mas cantidad de bolsas.

    switch(tipoProducto){
      case "arena":
        acumuladorCantidadArena+= cantidadBolsas;
        break;
      case "cal":
        acumuladorCantidadCal+= cantidadBolsas;
        break;
      case "cemento":
        acumuladorCantidadCemento+= cantidadBolsas;
        break;
    }

    //d) El tipo mas caro

    if(bandera == true){
      precioMasCaro = precio;
      tipoMasCaro = tipoProducto;
      bandera = false;
    }else if(precio > precioMasCaro){
      precioBolsa = precio;
      tipoMasCaro = tipoProducto;
    }


    respuesta = confirm("Desea continuar?");
  }

  //a
  console.log("El precio bruto total sin descuento es " + precioBrutoTotal);

  //b) el importe total a pagar con descuento(solo si corresponde)

  if(porcentaje != 0){
    descuento = (precioBrutoTotal * porcentaje) / 100;
    precioConDescuento = precioBrutoTotal - descuento;

    console.log("El precio final con descuento es " + precioConDescuento);
  }

  //c
  if(acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena > acumuladorCantidadCemento){
    console.log("El producot con mas cantidad de bolsas es arena");
  }else if(acumuladorCantidadCal > acumuladorCantidadArena && acumuladorCantidadCal > acumuladorCantidadCemento){
    console.log("El producot con mas cantidad de bolsas es cal");
  }else if(acumuladorCantidadCemento > acumuladorCantidadCal && acumuladorCantidadCemento > acumuladorCantidadArena){
    console.log("El producot con mas cantidad de bolsas es cemento");
  }

 //d
  console.log("El tipo mas caro es " + tipoMasCaro);

}//fin funcion
