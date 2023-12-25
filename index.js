//Variables 
let nombreVariable = "Valor Variable let corresponde a variables que pueden cambiar su valor"
const otraVariable = "Valor de Variables constante, poco cambio"

// Las variables pueden ser: 
// Number -> Valor numerico, entero o decimal
// String -> Cadena de texto en comillas " " o ' '
// Simbolo "=" asigna valores

//EJEMPLO

let textoA ='CODER';
let textoB ='HOUSE';
const BLANCO = " ";

let resultadoC = textoA+BLANCO+textoB;

//PROMPT-CONSOLA-ALERT  


// // let nombreIngresado = prompt("Ingrese su nombre");
// //     console.log("Hola mundo");
// //     console.log( nombreIngresado );

// // alert("Hola mundo 2");

// // let respuestaIf = prompt("Ingrese Si o No para probar la funcion if");
// // let booleano = respuestaIf.toLocaleLowerCase();
// // if( booleano == "si" ){
// //     //COdigo a ejecutar
// //     console.log("Estanmos en el if y dijiste que Si");
// // }else if( booleano == "no"){
// //     console.log("Estanmos en el segundo if y dijiste que No" );
// // }else{
// //     console.log("Estanmos en el else 1 y dijiste :"+ respuestaIf );
// // }


// // let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // for( let i=0; i<10 ;i++){

// //     let resultado = ingresarNumero*i;

// //     if ( resultado> 50){
// //         break; //continue;
// //     }
    
// //     alert( ingresarNumero + "X" + i + "="+ resultado);


// // }


// // let entrada= prompt("Ingresar un dato");

// // while(entrada != "ESC"){

// //     alert("El usuario ingreso "+ entrada);
// //     entrada= prompt("Ingresar otro dato");
// // }

let numero = 0;
do{
    numero = prompt("Ingresar Numero");
    console.log(parseInt(numero));
}while(parseInt(numero));
