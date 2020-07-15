/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("Usted se llama " + nombre + " Y tiene " + edad + " Años.")
}
// Concatenamos la variable con el valor literal, ponemos espacio en las comillas
// Operadores aritmeticos: + - * / %
