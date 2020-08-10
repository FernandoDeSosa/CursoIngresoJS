//Enunciado a) ”bandera a full” de una cantidad de espectadores indeterminada debemos tomar lo datos sexo altura edad nombre se debe informar siguiente: 
//1-el nombre de la más alta de las mujeres 
//2-el nombre del más viejo de los hombres 
//3- el nombre del primer adolescente ingresado, (solo mostrar si y solo si hay algún adolescente) NOTA: pedir datos por "prompt ()" y mostrar por console.log ()

var espectadores = true;
var sexo;
var altura;
var edad;
var nombre;
var nombreMujerMasAlta;
var alturaMax;
var bandera = true;
var nombreEdadMax;
var edadMax;
var nombrePrimerAdolecente;
var adolecenteMin;

while(espectadores){

    do{
        sexo = prompt("Ingrese su sexo");
    }while(sexo != "m" && sexo != "f");

    do{
        altura = prompt("Ingrese su altura");
        altura = parseInt(altura);
    }while(isNaN(altura));

    do{
        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
    }while(edad < 0 || isNaN(edad));

    do{
        nombre = prompt("Ingrese su nombre");
    }while(nombre == false);
//a
    if(nombre == "f" && bandera){
        alturaMax = altura;
        nombreMujerMasAlta = nombre;
        bandera == false;
    }else if(altura > alturaMax){
        alturaMax = altura;
        nombreMujerMasAlta = nombre;
    }
//b
    if(sexo == "m" && bandera){
        edadMax = edad;
        nombreEdadMax = nombre;
        bandera == false;
    }else if(edad > edadMax){
        edadMax = edad;
        nombreEdadMax = nombre;
    }
//c
   if(edad > 13 && edad < 18 && bandera){
       adolecenteMin = edad;
       nombrePrimerAdolecente = nombre;
       bandera = false;
   } else if(edad < adolecenteMin){
       adolecenteMin = edad;
       nombrePrimerAdolecente = nombre;
   }

    espectadores = confirm("Desea ingresar otro?");
}

console.log("El nombre de la mujer mas alta es " + nombreMujerMasAlta);
console.log("El nombre del mas viejo de los hombres es " + nombreEdadMax);
console.log("El Nombre del primer adolecente " + nombrePrimerAdolecente);