

//1. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal

function zodiac(mes: string, dia: number): string{
    let horos: string;
    if(((mes == "diciembre") && (dia>=22 && dia<=31)) || ((mes == "enero") && (dia<=20))){
        horos = "Capricornio";
    }else if(((mes == "enero") && (dia>=21 && dia<=31)) || ((mes == "febrero") && (dia<=19))){
        horos = "Acuario";
    }else if(((mes == "febrero") && (dia>=20 && dia<=31)) || ((mes == "marzo") && (dia<=20))){
        horos = "Piscis";
    }else if(((mes == "marzo") && (dia>=21 && dia<=31)) || ((mes == "abril") && (dia<=20))){
        horos = "Aries";
    }else if(((mes == "abril") && (dia>=21 && dia<=31)) || ((mes == "mayo") && (dia<=21))){
        horos = "Tauro";
    }else if(((mes == "mayo") && (dia>=22 && dia<=31)) || ((mes == "junio") && (dia<=21))){
        horos = "Géminis";
    }else if(((mes == "junio") && (dia>=22 && dia<=31)) || ((mes == "julio") && (dia<=23))){
        horos = "Cáncer";
    }else if(((mes == "julio") && (dia>=24 && dia<=31)) || ((mes == "agosto") && (dia<=23))){
        horos = "Leo";
    }else if(((mes == "agosto") && (dia>=24 && dia<=31)) || ((mes == "septiembre") && (dia<=23))){
        horos = "Virgo";
    }else if(((mes == "septiembre") && (dia>=24 && dia<=31)) || ((mes == "octubre") && (dia<=23))){
        horos = "Libra";
    }else if(((mes == "octubre") && (dia>=24 && dia<=31)) || ((mes == "noviembre") && (dia<=22))){
        horos = "Escorpio";
    }else if(((mes == "noviembre") && (dia>=23 && dia<=31)) || ((mes == "diciembre") && (dia<=21))){
        horos = "Sagitario";
    }else{
        console.log("fecha introducida erróneos");
    }return horos;
}

console.log(zodiac("febrero", 6));



//2. Realizar un procedimiento que dado un país te imprima en que continente estás.
//(Max 5 países por continente)

function eresde(pais: string): string{
    let conti: string;
    if(pais == "España" || pais == "Francia" || pais == "Alemania" || pais == "Italia" || pais == "Portugal"){
        conti = "Europa";
    }else if(pais == "Marruecos" || pais == "Camerún" || pais == "Mozambique" || pais == "Guinea" || pais == "Túnez"){
        conti = "África";
    }else if(pais == "Chile" || pais == "Nicaragua" || pais == "Haití" || pais == "Estados Unidos" || pais == "Canadá"){
        conti = "América Norte/Sur";
    }else if (pais == "Camboya" || pais == "Irán" || pais == "Jordania" || pais == "Singapur" || pais == "Tailandia"){
        conti = "Asia";
    }else if (pais == "Nueva Zelanda" || pais == "Fiji" || pais == "Australia" || pais == "Kiribati" || pais == "Papúa"){
        conti = "Oceanía";
    }return conti;
}

console.log(eresde("Haití"));



//3. Realizar una función que imprima los números impares existentes hasta el número
//indicado como parámetro de entrada.

/*
function impares(numero: number){
    let resultado: string;
    for(let i = 1; i <=numero; i+=2){
        resultado += [i] + ", ";
    }return resultado;
}
console.log(impares(19));
*/


function impares(numero: number){

    for(let i: number = 1; i <=numero; i+=2){
        console.log(i);
    }
}

impares(18);



//4. Realizar una función que dado un numero te devuelva la suma de todos los
//enteros que existen desde el 0 hasta ese numero. 

function suma(numerito: number): number{

    let result: number;
    result = 0;

    for(let i:number = 0; i <= numerito; i++){
        result = result + i;
    }return result;
}

console.log(suma(8));



//5. Realizar la función factorial de un numero, que dado un numero te devuelva su
//factorial.
NOMESALE
AYUDA
SE ME HABÍA OLVIDADO AVISARLO

function multip(numerito: number): number{

    let result: number;
    result = 0;

    for(let i:number = 1; i <= numerito; i++){
        result = numerito * i;
    }return result;
}

console.log(multip(8));   //debería dar 288



//6. Realizar una función que como parámetro de entrada reciba un array y como salida
//devuelva el array revertido.

function vueltilla(elemento: string): string{
    var resultado: string = "";
    for (var i = 0; i < elemento.length; i++) {
        resultado = elemento[i] + resultado;
    }
    return resultado;
}

console.log(vueltilla("hola"))


///

function invertir(arr: number[]): number[]{
    return arr.reverse();
}
console.log(invertir([1,2,3,4,5,6,7]));

///

function inverti(arr: string[]): string[]{
    return arr.reverse();
}
console.log(inverti(["hola", "qué", "tal"]));


/*
function vuelta(str: string){
    return str.split('').reverse().join('');
  }
  
  console.log(vuelta("Hola qué tal"));
*/



//7. Realizar una función que reciba como parámetro un array de strings que contenga
//colores y te imprima en cada caso si el color está en el arcoíris o no.

function arcoiris(colores){
    for(let i: number = 0; i < colores.length; i++){
        if(colores[i] == "rojo" || colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "azul" || colores[i] == "morado"){
            console.log("El " + colores[i] + " sí está en el arcoíris");
        }else{
            console.log("El " + colores[i] + " no se encuentra entre los colores del arcoíris");
        }
    }
}

console.log(arcoiris(["amarillo", "rosa", "verde", "negro"]));


//8. Realizar una función que te devuelva si existe un numero par en el array de números
//que introduces como parámetro de entrada.

//sin return
function pares(nums: number[]){
    for(let i: number = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            console.log(nums[i]);
        }
    }
}

pares([1,2,3,4,8,9,10,22,35,12]);

//con while
function pares2(nums: number[]){
    let i: number = 0;
    while(i < nums.length){
        if(nums[i] % 2 === 0){
        console.log(nums[i]);
        }i++;
    }
}

pares2([1,2,3,4,5,6,7,8]);

///con return
function pares3(nums): number{
    var todos;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            todos += nums[i] + ", ";
        }
    }return todos;
}

console.log(pares3([1,2,3,4,8,9,10,22,35,12]));





//9. Realizar un procedimiento que reciba un array de nombres y te devuelva verdadero si
//y solo si todos los nombres empiezan por M. 

function conEme(nombres): boolean{
    var respu: boolean;
    respu = true;
    let i: number = 0;
    while(i < nombres.length && respu == true){ //(normalmente no se pone la igualación a 0, porque respu ya vale true, que lo pusimos arriba, y es la concidión de que el bucle se siga repitiendo mientras que en la vuelta alterior no se le haya cambiado el valor de respu a false). Si la vuelta anterior hubiera sido false (osea, que el nombre no empezase por M), en esta vuelta respu sería false y por tanto no se cumpliría la condición del while, así que no se repetiría el bucle. Se saldría de él, y fuera de él habría un return que devolvería respu. Si todos los nombres del Array empezasen por M, todas las vueltas del bucle hubieran sido true y por tanto al salir del bucle, return respu sería true porque respu la habíamos inicializado en true. Si durante el bucle encuentra un false, el valor de respu lo igualamos a false, así que al salir del bucle, el return respu daría false. CREO QUE ESTÁ BIEN EXPLICADO.
        if(nombres[i][0] !== "M"){
    		respu = false;
        }i++;
    }return respu;
}

console.log(conEme(["Marcos", "Mariano", "Hercedes", "Merylover"]));    

console.log(conEme(["Marcos", "Mucía", "Mario"]));





//10. Realizar una función que te devuelva la sumaa del numero de caracteres de las palabras
//almacenadas en un array.


function lasuma(frase: string[]){
    var sum: number = 0;
	for(let i:number = 0; i < frase.length; i++){
    	sum += frase[i].length;
	}return sum;
}

console.log(lasuma(["Esto", "es", "un", "Array", "de", "palabras"]));



//11. Realizar una función que te imprima el siguiente mensaje: “El numero es par”, si el
//numero introducido como parámetro de entrada es par, y “El numero es impar” si el numero
//introducido como parámetro de entrada es impar.

function parimpar(n: number){
    if(n % 2 === 0){
        console.log("El número es par");
    }else{
        console.log("El número es impar")
    }
}

parimpar(24);
parimpar(97);



//12. Utilizando las dos funciones anteriores indicar si es par o impar la suma de los
//caracteres de cada uno de los siguientes arrays: [“Casa”, “Coche”, “Ciudad”, “Cesta”],
//[“Barco”, “Baca”, “Bicicleta”, “Balon”, “Bisiento”, “Brasil”] y [“Venezuela”, “Veneno”, “Voltaje”]. 


["Casa", "Coche", "Ciudad", "Cesta"];
["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
["Venezuela", "Veneno", "Voltaje"];




//13. Clasificar las funciones según el tipo y guardarlas en ficheros distintos
//RepasoIf.ts
//RepasoFor.ts
//RepasoWhile.ts




//14. Crear un proyecto nuevo en Git que se llame RepasoPOO y guardar los otros ficheros allí.



































/*ejercicio 12

var conjunto: string[];
var conjunto1: string[];
var conjunto2: string[];
var conjunto3: string[];

conjunto = [];
conjunto1 = ["Casa, Coche, Ciudad, Cesta"];
conjunto2 = ["Barco, Baca, Bicicleta, Balon, Bisiesto, Brasil"];
conjunto3 = ["Venezuela, Veneno, Voltaje"];

function complejus(conjunto){
    if(conjunto.length % 2 === 0){
        console.log("El número es par");
    }else{
        console.log("El número es impar");
    }
}

complejus(conjunto);


*/






/*1
var dia = Number();
var mes = String();
var rta = String();

function zodiaco(mes: String, dia: Number){
    switch(){
        case mes == "enero": if(dia>=21 && dia>=19){rta=};
        break;
        case mes == "febrero": if(dia>=21 && dia>=19){};
        break;
        case mes == "marzo": if(dia>=21 && dia>=19){};
        break;
        case mes == "abril": if(dia>=21 && dia>=19){};
        break;
        case mes == "mayo": if(dia>=21 && dia>=19){};
        break;
        case mes == "junio": if(dia>=21 && dia>=19){};
        break;
        case mes == "julio": if(dia>=21 && dia>=19){};
        break;
        case mes == "agosto": if(dia>=21 && dia>=19){};
        break;
        case mes == "septiembre": if(dia>=21 && dia>=19){};
        break;
        case mes == "octubre": if(dia>=21 && dia>=19){};
        break;
        case mes == "noviembre": if(dia>=21 && dia>=19){};
        break;
        case mes == "diciembre": if(dia>=21 && dia>=19){};
        break;
    }
}

*/