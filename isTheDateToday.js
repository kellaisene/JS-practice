// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

const isToday(date) {
    if(date.toDateString() === new Date().toDateString()){
        return true;
    }
    return false;
}