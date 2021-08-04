// if a year is divided by 4, it is leap year
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

// function call 
let myYear = 4354;
let isMyYearLeapY = isLeapYear(myYear);
console.log("Is my Year is Leap Year? \n", isMyYearLeapY);
console.log("After correction of the above function is written like below...\n");
// leap year is divisible by 4 and 400 but leap year is not divisible by 100
function checkLeapyear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}
let myNewYear = 2100;
let ifLeapY = checkLeapyear(myNewYear);
console.log(myNewYear, " is  leap year. Is it true or false ? \nAns: ", ifLeapY);
