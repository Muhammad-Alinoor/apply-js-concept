
// calculate total marks
function total(Mark) {
    let totalMarks = 0;
    for (i = 0; i < Mark.length; i++) {
        totalMarks += Mark[i];
    }
    return totalMarks;
}

function grade(got) {
    if (got > 80) {
        return " A+ ";
    }
    else if (got > 70 && got < 80) {
        return "A";
    }
    else if (got > 60 && got < 70) {
        return " A- "
    }
    else if (got > 50 && got < 60) {
        return "B";
    }
    else if (got > 40 && got < 50) {
        return " C "
    }
    else if (got > 33 && got < 40) {
        return " D "
    }
    else {
        return " F "
    }
}
// Obtaining mark in all subjects
let MarkObtained = [45, 64, 75, 34, 57, 35, 77];
let passObtainedMark = total(MarkObtained);
let avgMarks = passObtainedMark / MarkObtained.length;
let gotGrade = grade(avgMarks);
console.log(gotGrade);