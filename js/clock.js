// setDate() sets the day of the month to the date object.
const setDate = () => {
// new Date() uses browser's time zone and display a date as a full text string:
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = minutes;
    document.querySelector("#second").innerHTML = seconds;
    // adjust background and greeting based on the time of day
    const buildClock = () =>  {
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
            document.querySelector("#title-header").innerHTML = "The clock needs new batteries";
        }
        // change from a 24 hour clock to a 12 hour clock
        const civTime = () => {
            if (hours > 12) {
                document.querySelector("#hour").innerHTML = `0${hours - 12}`;
            } 
        }

        // add zeroes to minutes and/or seconds if the value is below 10
        const addZeros = () => {
            if (seconds < 10){
                document.querySelector("#second").innerHTML = "0" + seconds;
            } 
            if (minutes < 10) {
                document.querySelector("#minute").innerHTML = "0" + minutes;
            } 
        }

        // call clock functions
        civTime();
        addZeros();
    }
    buildClock();    
}
// setInterval() calls a function or evaluates an expression at specified intervals (in milliseconds).
setInterval(setDate(), 1000);