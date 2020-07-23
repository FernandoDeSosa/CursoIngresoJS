/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidadLamparas;
    var precio;
    var marca;
    var precioConDescuento;
    var iibb;



    cantidadLamparas = txtIdCantidad.value;
    precio = 35;
    marca = Marca.value;

    if (cantidadLamparas >= 6) {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.5;
    }
    else if (cantidadLamparas == 5 && marca == "ArgentinaLuz") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.4;
    }
    else if (cantidadLamparas == 5 && !marca == "ArgentinaLuz") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.3;
    }
    else if (cantidadLamparas == 4 && marca == "ArgentinaLuz" && marca == "FelipeLamparas") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.25;
    }
    else if (cantidadLamparas == 4 && !marca == "ArgentinaLuz" && !marca == "FelipeLamparas") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.20;
    }
    else if (cantidadLamparas == 3 && marca == "ArgentinaLuz") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.15;
    }
    else if (cantidadLamparas == 3 && marca == "FelipeLamparas") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.10;
    }
    else if (cantidadLamparas == 3 && !marca == "FelipeLamparas" && !marca == "ArgentinaLuz") {
        txtIdprecioDescuento.value = (precio * cantidadLamparas) * 0.5;
    }





}
