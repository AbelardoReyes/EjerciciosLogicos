//Calcula la media de un listado de numeros
List1 = [73, 18, 83, 68, 16, 48, 75, 69, 67, 74]
List2 =[49, 52, 33, 17, 42, 13, 68, 85, 81, 49]

function calculatarMedia(list){
    let sum = 0;
    for (let i = 0; i < list.length -1; i++){
        sum = suma(sum, list[i]);
    }
    let result = division(sum, list.length)
    console.log(result)
}

function suma(a,b){
    return a+b;
}

function division(a,b){
    return a/b;
}

console.log('media de la lista1:' );
calculatarMedia(List1)
console.log('media de la lista2:' );
calculatarMedia(List2)