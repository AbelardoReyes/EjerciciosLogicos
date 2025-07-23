function Fibonacci(){
let x = 0;
let y = 1;
let z = 0;
console.log(x);
console.log(y);
for(let i = 0; i <= 50; i ++){
    z = x + y;
    x = y;
    y = z;
    console.log(z);
}

}

Fibonacci();