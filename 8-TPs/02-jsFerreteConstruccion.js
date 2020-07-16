/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadAlambre;
    var perimetro;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;

    cantidadAlambre = perimetro * 3;

    alert("Cantidad de alambre a comprar: " + cantidadAlambre);


}
function Circulo () 
{
    var radio;
    var perimetro;
    var totalAlambre;

    radio = txtIdRadio.value;

    radio = parseFloat(radio);

    totalAlambre = (radio * 2 * Math.PI) * 3;



    alert ("Cantidad de alambre a comprar: " + totalAlambre);
}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsasCemento;
    var bolsasCal;
    var area;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area = largo * ancho;

    bolsasCemento = 2 * area;
    bolsasCal = 3 * area;

    alert ("Se necesitan " + bolsasCemento + " bolsas de cemento " + "Y " + bolsasCal + " Bolsas de cal" );
}