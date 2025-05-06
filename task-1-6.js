let a = parseFloat(prompt("Введите значеине a"));

let b = parseFloat(prompt("Введите значеине b"));

let c = parseFloat(prompt("Введите значение c"));

let d = b * b - 4 * a * c;

if (d < 0 ){
    
    console.log("Корней нет");
} else if (d === 0) {
let root = b/(2*a);
console.log("Корень равен:" + root);
} else {
    let root1 = (-b + Math.sqrt(d) )/(2*a);
    let root2 = (-b - Math.sqrt(d) )/(2*a);
    console.log(root1);
    console.log(root2);
}