//The timer for the loop, updates every 1 second
var update = setInterval(function(){updateClock() }, 1000);

//The loop, creates redefines the strings for Hour, Minute, and AMPM
function updateClock() { 
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    var ampm = ( h < 12 ) ? "am" : "pm";

    //Takes the 24hour time data and appends a 0 to the front if it is beore 10am
    if (Clock == "24h"){
	   timeOfDay = "";
	   h = ( h < 10 ? "0" : "" ) + h;
	   dString = h + ":" + m;
    }
    //Takes the 24hour data and converts it to 12hour data, and appends a 0 to the front if it is before 10am or between 1-9pm
    if (Clock == "12h"){
       h = ( h > 12 ) ? h - 12 : h;
	   h = ( h == 0 ) ? 12 : h;
       h = ( h < 10 ? "0" : "" ) + h;
	   dString = h + ":" + m;
}

//Injects the filtered time data into the respective HTML elements
document.getElementById("hour").innerHTML = h;
document.getElementById("minute").innerHTML = m;
document.getElementById("ampm").innerHTML = ampm.toUpperCase();
}

