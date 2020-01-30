
//10. Realizar una función que te devuelva la sumaa del numero de caracteres de las palabras
//almacenadas en un array.


function lasuma(frase: string[]): number{
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


parimpar(lasuma(["Casa", "Coche", "Ciudad", "Cesta"]));

//lasuma(["Casa", "Coche", "Ciudad", "Cesta"]);
