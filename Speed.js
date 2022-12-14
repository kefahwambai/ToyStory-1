// Write a program that takes the speed of a car as input e.g 80.
//  If the speed is less than 70, it should print “Ok”. 
//  Otherwise, for every 5 km/s above the speed limit (70),
//  it should give the driver one demerit point and print the total number of demerit points.
// > For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”.

function carSpeed(speed) {
    if (speed < 70) {
        return 'OK'
    } else {
        let n = (speed - 70)/5;
        if (n>12) {
            return 'License suspended';
        } else {
            return `Points: ${n}`;
        }
    
    }
}
function handleClick(event) {
    let speed= document.getElementById("input").value
    document.getElementById("answer").textContent=carSpeed(speed)
}
