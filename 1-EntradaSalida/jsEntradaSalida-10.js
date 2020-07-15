/*
Debemos o
mostrar el ilograr tomar el importe por ID.
Transformarlo a entero (parseInt), luegmporte con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	resultado = importe * 0.75;
	txtIdResultado.value = resultado;



//100 - 25 = 75 
}
