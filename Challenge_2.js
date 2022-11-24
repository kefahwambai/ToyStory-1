function carSpeed(speed) {
    if (speed < 70) {
        return 'OK'
    } else {
        let n = (speed - 70)/5;
        if (n>12) {
            return 'License suspended';
        } else {
            return `Demerit points ${n}`;
        }
    
    }
}

