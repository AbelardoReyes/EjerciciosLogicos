//Crea una funcion que calcule el factorial de un numero
function NumeroFactorial(num){
    let result=0;
    for(let i = num-1; i >= 1; i--) {
        result = num * (i);
        num = result;
    }
    console.log('El factorial del valor ingresado es: '+result)
}

NumeroFactorial(6)