function mostrar()
{
	var numeroRandom;
	var min;
	var max;

	
	min = 1;
	max = 11;

	min = parseInt(min);
	max = parseInt(max);

	numeroRandom = Math.floor(Math.random() * (max - min)) + min;

	
	alert(numeroRandom);
	

}