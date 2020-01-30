console.log("\n");

//1. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal

function zodiaco(mes: string, dia: number): string{
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

console.log(zodiaco("febrero", 6));
console.log(zodiaco("febrero", 27));





console.log("\n");
////////////////




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
console.log(eresde("Papúa"));




console.log("\n");
///////////////



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

console.log(arcoiris(["amarillo", "rosa", "verde", "rojo", "negro"]));

