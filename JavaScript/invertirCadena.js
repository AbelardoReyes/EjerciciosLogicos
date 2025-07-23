//Crea una funcion que invierta una cadena de texto

function InvertirCadena(cadena){
    let nuevaCadena = '';
    for(let i = cadena.length -1; i > -1; i--){
        console.log(cadena[i]);
        nuevaCadena += cadena[i];
    }
    console.log('La cadena invertida es: ' + nuevaCadena);
}

InvertirCadena('HolaMundo')