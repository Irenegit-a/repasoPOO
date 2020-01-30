
//3. Realizar una función que imprima los números impares existentes hasta el número
//indicado como parámetro de entrada.


function impares(numero: number){

    for(let i: number = 1; i <=numero; i+=2){
        console.log(i);
    }
}

impares(18);




console.log("\n");
//4. Realizar una función que dado un numero te devuelva la suma de todos los
//enteros que existen desde el 0 hasta ese numero. 

function summa(numerito: number): number{

    let result: number;
    result = 0;

    for(let i:number = 0; i <= numerito; i++){
        result = result + i;
    }return result;
}

console.log(summa(8));




console.log("\n");
//5. Realizar la función factorial de un numero, que dado un numero te devuelva su
//factorial.
//NOMESALE

function multip(numerito: number): number{

    let result: number;
    result = 0;

    for(let i:number = 1; i <= numerito; i++){
        result = numerito * i;
    }return result;
}

console.log(multip(8));   //debería dar 288




console.log("\n");
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

function invert(arr: number[]){
    return arr.reverse();
}
console.log(invert([1,2,3,4,5,6,7]));

///

function inverti(arr: string[]){
    return arr.reverse();
}
console.log(inverti(["hola", "qué", "tal"]));


///esto no es lo que se pide, utiliza unas cosas que aún no hemos dado, y que le da la vuelta, caracter por caracter
//pero no a un array sino a un string o un number

function vuelta1(str: string){
    return str.split('').reverse().join('');
}
console.log(vuelta1("Hola qué tal"));
//a un string

function vuelta2(str: number[]){
    return str.reverse().join('');
}
console.log(vuelta2([1,2,3,4]));
//a un array de números

function vuelta4(str: string[]){
    return str.reverse().join('');
}
console.log(vuelta4(["Hola", "qué", "tal"]));
//a un array de strings (pero nos los junta, sin espacios)





console.log("\n");
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





console.log("\n");
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




console.log("\n");
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


