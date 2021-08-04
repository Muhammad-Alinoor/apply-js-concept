// count from the given number to 1
console.log("factorial using loop from the given number to 1");
let n = 7;
for (let i = n - 1; i >= 1; i--) {
    n = n * i;

}
console.log(n);
// count from 1 to given number 
console.log("factorial using loop from 1 to given number");
n = 1;
for (let i = 1; i <= 7; i++) {
    n = n * i;

}
console.log(n);
// factorial using function
console.log("Factorial using functon");
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let num = 10;
const firstFactorial = getFactorial(num);
console.log("Factorial of ", num, "is ", firstFactorial);
// using motu version of for loop in function
console.log("\nUsing motu version of for loop in a function\n");
function getFactorialUsingWhile(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const givenNumber = 6;
const gotFactorial = getFactorialUsingWhile(givenNumber);
console.log("Factorial of ", givenNumber, "is ", gotFactorial);