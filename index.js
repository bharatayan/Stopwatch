
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

var timer = false;


function Start() {
    timer = true;
    stopwatch();
}
function Stop() {
    timer = false;

}
function Reset() {
    timer = false;
 hr = 0;
 min = 0;
 sec = 0;
 count = 0;
 document.getElementById("min").innerHTML = "00";
 document.getElementById("hr").innerHTML = "00";
 document.getElementById("sec").innerHTML = "00";
 document.getElementById("count").innerHTML = "00";
}


function stopwatch() {
    if (timer == true) {

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            sec = 0;
            min = 0;
        }

        document.getElementById("min").innerHTML = min;
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        count = count + 1;

        setTimeout("stopwatch()", 10);
    }
}
