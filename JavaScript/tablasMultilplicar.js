//imprime las tablas de multiplicar con un rango de numeros

function TablasMultiplicar (start, end) {
    for (let i = start; i <= end; i++) {
        console.log('Tabla de multiplicar del: '+ (i))
        for(let j = start; j <= end; j++){
            let result = multiplicacion(i,j);
            console.log(i + ' x '+ j + ' = '+ result)
        }

    }
}
function multiplicacion(a,b){
    return a*b;
}

let resultado = TablasMultiplicar(1,10);