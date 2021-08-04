// // check the number is even or odd using normal way
// console.log("odd/even check in normal way");
// let number = 46;
// if ((number % 2) == 0) {
//     console.log(number, " is an Even Number");
// }
// else {
//     console.log(number, " is an Odd Number");
// }
// console.log("Using function find the number is odd or even");
// function oddEvenCheck(number) {
//     let remainder = number % 2;
//     if (remainder == 0) {
//         console.log("Even");
//     }
//     else {
//         console.log("Odd");
//     }
// }
// oddEvenCheck(56);
// // do the same function using boolean logic
// // is even
// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// let myNumber = 234235243;
// let isMyNumberEven = isEven(myNumber);
// console.log("Is my number even ", isMyNumberEven);

// is odd
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
let myNumber = 9855;
let isMyNumberOdd = isOdd(myNumber);
console.log("Is my number oddd ", isMyNumberOdd);
