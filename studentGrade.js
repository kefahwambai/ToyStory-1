
function promptstudentGrade(Marks){
    
    Marks = prompt('How many marks scored');
    if ( Marks > 79){
        return "Grade A";
    } else if (Marks < 79 && Marks > 60) {
        return "Grade B";
    } else if (Marks < 60 && Marks >= 49) {
        return "Grade C";
    } else if (Marks < 50 &&  Marks > 40) {
        return "Grade D";
    } else {
    return "Grade E";
}
}

