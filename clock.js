// setInterval() calls a function or evaluates an expression at specified intervals (in milliseconds).
setInterval(setDate, 1000);

// setDate() sets the day of the month to the date object.
function setDate() {
// new Date() uses browser's time zone and display a date as a full text string:
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;

// adjust background and greeting based on the time of day
    function setGreeting() {
        if (hours === 0 || hours < 12) {
            document.querySelector("#day-night").innerHTML = "AM";
            document.querySelector("#title-header").innerHTML = "Good Morning!";
            document.querySelector("body").classList.add("morning");
        } else if (hours >= 12 && hours < 18) {
            document.querySelector("#day-night").innerHTML = "PM";
            document.querySelector("#title-header").innerHTML = "Good Afternoon!";
            document.querySelector("body").classList.add("afternoon");
        } else if (hours >= 18 && hours <= 23) {
            document.querySelector("#day-night").innerHTML = "PM";
            document.querySelector("#title-header").innerHTML = "Good Evening!";
            document.querySelector("body").classList.add("evening");
        } else {
            document.querySelector("#title-header").innerHTML = "JS clock needs new batteries";
        }
    }

    function civTime() {
        if (hours > 12) {
            document.querySelector("#hour").innerHTML = hours - 12;
        } 
    }

    // add zeroes to minutes and/or seconds if the value is below 10
    function addZeroToSec() {
        if (seconds < 10){
            document.querySelector("#second").innerHTML = "0" + seconds;
        } 
    }

    function addZeroToMin() {
        if (minutes < 10) {
            document.querySelector("#minute").innerHTML = "0" + minutes;
        } 
    }
    

    function addZeroToHour() {
        if (hours < 10) {
            document.querySelector("#hour").innerHTML = "0" + hours;
        }
    }

// change from a 24 hour clock to a 12 hour clock
civTime();
setGreeting();
addZeroToSec();
addZeroToMin();
addZeroToHour();   
    
}
