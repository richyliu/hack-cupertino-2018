function calcHappy(sleep, homeWork) {
    var i;
    var happy = 100.0;

    //We're assuming at least 8 hours for sleeping
    for (i = 0; i < sleep.length; i ++) {
        if (sleep[i] < 8) {
            happy -= 1.0 * (8 - sleep); 
        }
    }

    for (i = 0; i < homeWork.length; i ++) {
        if (homeWork[i].late) {
            happy -= (22.0 / 7.0);
        }

        if (homeWork[i].urgent) {
            happy -= (22.0 / 7.0);
        }
    }

    return (happy);
}
