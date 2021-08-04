// convert inches to feet
var initialInches = 123;
var firstConvertedFeet = initialInches / 12;
console.log(firstConvertedFeet, "feet");
//update the inches to feet 
var updatedInches = 234;
var updatedConvertedFeet = updatedInches / 12;
console.log(updatedConvertedFeet, "feet");
console.log("How many times will you do this work? Rather you should use function to do it in easy mood");
function inchesToFeet(givenInches) {
    let convertedFeet = givenInches / 12;
    return convertedFeet;
}
var got = inchesToFeet(200);
console.log(got, "feet have found from the inchesToFeet()function");
// we can use variable as an actual parameter or argument
var newInch = 243;
var convert = inchesToFeet(newInch);
console.log(convert, "feet from the function call");


//  mile to kilometers
console.log(" ");
console.log(" ");
console.log("Mile to kilo meter");
// mile to kilometer robot
function mileConvertToKm(givenMiles) {
    // 1 mile = 1.609 km
    const oneMileKm = 1.609;
    let km = givenMiles * oneMileKm;
    return km;
}
let convertThisMile = 25;
let needKm = mileConvertToKm(convertThisMile);
console.log(needKm);
