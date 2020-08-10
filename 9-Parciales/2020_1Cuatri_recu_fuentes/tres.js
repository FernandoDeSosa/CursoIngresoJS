/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/


function mostrar()
{
    var respuesta = true;
    var nombre;
    var nacionalidad;
    var edad;
    var sexo;
    var estadoCivil;
    var temperatura;
    var nacionalidadTempMax;
    var temperaturaMax;
    var banderaTemperatura = true;
    var contadorMayoresSolteros = 0;
    var contadorMujeresSolterasViudas = 0;
    var contadorPersonasTerceraEdadConFiebre = 0;
    var acumuladorEdadMujeresCasadas = 0;
    var contadorEdadMujeresCasadas = 0;
    var promedio;


    while(respuesta){

        do{
            nombre = prompt("Ingrese su nombre");
        }while(nombre == false);

        do{
            nacionalidad = prompt("Ingrese su nacionalidad");
        }while(nacionalidad == false);

        do{
            edad = prompt("Ingrese su edad");
            edad = parseInt(edad);
        }while(isNaN(edad));

        do{
            sexo = prompt("Ingrese su sexo");
        }while(sexo != "f" && sexo != "m");

        do{
            estadoCivil = prompt("Ingrese su estado civil");
        }while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

        do{
            temperatura = prompt("Ingrese su temperatura");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura));

        //a) la Nacionalidad de la persona con mas temperatura.
        
        if(banderaTemperatura){
            temperaturaMax = temperatura;
            nacionalidadTempMax = nacionalidad;
            banderaTemperatura = false;
        }else if(temperatura > temperaturaMax){
            temperaturaMax = temperatura;
            nacionalidadTempMax = nacionalidad;
        }

        //b) Cuantos mayores de edad( más de 17) estan solteros

        if(edad > 17 && estadoCivil == "soltero"){
            contadorMayoresSolteros++;
        }

        //c) La cantidad de Mujeres que hay solteras o viudas.

        if(sexo == "f" && estadoCivil == "soltero" || estadoCivil == "viudo"){
            contadorMujeresSolterasViudas++;
        }

        //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

        if(edad > 60 && temperatura > 38){
            contadorPersonasTerceraEdadConFiebre++;
        }

        //e) El promedio de edad entre las mujeres casadas

        if(sexo == "f" && estadoCivil == "casado"){
            acumuladorEdadMujeresCasadas+= edad;
            contadorEdadMujeresCasadas++;
        }

        promedio = acumuladorEdadMujeresCasadas / contadorEdadMujeresCasadas;


        respuesta = confirm("Desea ingresar otro?");
    }
    //a
    console.log("La nacionalidad de la persona con mas temperatura es " + nacionalidadTempMax);

    //b 
    console.log("Los mayores de edad solteros son " + contadorMayoresSolteros);

    //c
    console.log("Las mujeres viudas o solteras son " + contadorMujeresSolterasViudas);

    //d
    console.log("Las personas de tercera edad con mas de 38 de temperatura son " + contadorPersonasTerceraEdadConFiebre);

    //e
    console.log("El promedio de edad entre las mujeres casadas es " + promedio);

}
