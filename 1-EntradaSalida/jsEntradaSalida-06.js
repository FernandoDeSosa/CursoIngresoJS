/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert("La suma es: " + suma);

	//creamos var, la cargamos con el id, le decimos que es un entero (number), carmaos var suma con la suma de los numeros, mostramos alert y la suma

	//suma = parseInt(numeroUno) + parseInt(numeroDos);

}	


