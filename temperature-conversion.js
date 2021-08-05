// celsius to fahrenhite 
function celsiusToFahrenhite(celsius) {
    let fahrenhite = (9 / 5) * celsius + 32;
    return fahrenhite;
}
const givenCelsius = 100;
const gotFahrenhite = celsiusToFahrenhite(givenCelsius);
console.log(givenCelsius, "Degree = ", gotFahrenhite, " Fahrenhite");