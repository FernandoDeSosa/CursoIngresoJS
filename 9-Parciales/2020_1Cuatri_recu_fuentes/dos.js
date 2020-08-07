



function mostrar()
{
 var respuesta;
 var tipo;
 var precio;
 var cantidad;
 var acumuladorPrecioBruto = 0;
 var acumuladorCantidadBolsas=0;
 var descuento;
 var precioConDescuento;
 var bolsasMaximas;
 var topoBolsasMaximas; 
 var precioMaximo=0;
 var tipoPrecioMax; 

 do{
   do{

     tipo = prompt("Ingrese tipo");
   
    }while(tipo != "arena " && tipo !="cal" && tipo!= "cemento")
   do{

    precio = prompt("Ingrese precio");
    precio = parseInt(precio);

   }while(isNaN(precio) || precio < 0)

   respuesta = confirm("Desea continuar?")

 }while(respuesta)
}do{

  cantidad = prompt("Ingrese cantidad");
  cantidad = parseInt(cantidad);

}while(isNaN(cantidad) || cantidad < 0);

acumuladorPrecioBruto+= precio * cantidad;

acumuladorCantidadBolsas+= cantidad;

//A 
console.log("el importe bruto sin descuento es " + acumuladorPrecioBruto);

if(acumuladorCantidadBolsas > 10 && acumuladorCantidadBolsas < 30){

  descuento=0.15;


}else if (acumuladorCantidadBolsas> 30){
  descuento=0.25;
}
//D
if(cantidad>bolsasMaximas){
  bolsasMaximas = cantidad;
  topoBolsasMaximas = tipo;
}
// E
if(precio > precioMaximo){
  precioMaximo = precio;
  tipoPrecioMax = tipo;
}
//B
if(descuento){

}
console.log("El precio con descuento es" + precioConDescuento);
console.log(precioMaximo);
