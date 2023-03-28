function studentGrade(grade){
    let result = prompt("Enter student's marks between 0 and 100:");

    if (marks > 79) {
    gradeMarks = 'A'
    } else if (marks >= 60) {
        gradeMarks = 'B'
    } else if (marks >= 50) {
        gradeMarks = 'C'
    } else if (marks >= 40) {
        gradeMarks = 'D'
    } else (marks < 40) 
        gradeMarks = 'E'
    
}



function speedDetector(){
    let speed = prompt("Enter the speed of the car in km/s: ");
    let points = 0;
    
    if (speed <= 70) {
        console.log("Ok");
    } else {
        points = Math.floor((speed - 70) + 5);
        console.log("1");
    }
    
    if (points > 12) {
        console.log("License suspended");
    }
}
