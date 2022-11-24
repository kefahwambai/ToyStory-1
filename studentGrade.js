// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

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

