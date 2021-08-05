function interest(principle, rateOfInterest, time) {
    let totalInterest = principle * rateOfInterest * time;
    return totalInterest;
}
let gotInterest = interest(5000, 5, 2);
console.log(gotInterest);