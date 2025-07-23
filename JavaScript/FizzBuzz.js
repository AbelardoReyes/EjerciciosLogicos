/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function FizzBuzz(){
    let result;
    for(let i = 1; i <= 100; i++){
        multTres = ObtenerResiduo(i,3);
        multCinco = ObtenerResiduo(i,5);
        if(multTres === 0 && multCinco === 0){
            console.log(i+': '+'fizzbuzz');
        } else if (multTres === 0){
            console.log(i+': '+'fizz');
        } else{
            console.log(i+': '+'buzz');
        }
    }
}

function ObtenerResiduo(num,divisor){
    return num % divisor;
}

FizzBuzz();