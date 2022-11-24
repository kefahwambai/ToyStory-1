let studentGrade = '';

function promptstudentGrade(Marks){
    
    studentGrade = prompt("Please enter your Marks");
    if ( Marks > 79){
        return "A";
    } else if (Marks > 60 && Marks < 80) {
        return "B";
    } else if (Marks > 49 && Marks < 60) {
        return "C";
    } else if (Marks > 40 &&  Marks < 50) {
        return "D";
    } else {
    return "E";
}
}

promptstudentGrade()