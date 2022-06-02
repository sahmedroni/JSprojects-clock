// Beginning clock function.
function myClock() //function declared
{
    const date = new Date();  // generate date value with time zone
    let hh = date.getHours();   //get only hour from date() fumction.
    let mm = date.getMinutes(); //get only minute from date() fumction.
    let ss = date.getSeconds(); //get only secons from date() fumction.
    let session = "AM"; //variable to hold the AM PM

// condition to convert 24 hours to 12 hours clock.
if (hh == 0) {
    hh = 12;
}

// it will calculate 24 hours time to 12 hours time mode.
if (hh > 12) {
    hh = hh-12;
    session = "PM";
}

// to add a 0 before single digits.
hh = (hh < 10) ? "0" + hh : hh;
mm = (mm < 10) ? "0" + mm : mm;
ss = (ss < 10) ? "0" + ss : ss;



let time = hh + "  " + mm + "  " + ss; //forming the time and holding in a variable
document.getElementById("clock").innerHTML = time;  // display the final time to the html tag
document.getElementById('sess').innerHTML = session;
setTimeout(myClock,1000);

//alarm section
let alarmHour 
if (hh == document.getElementById("sethour").value && 
mm == document.getElementById("setminute").value) {
    document.getElementById("alarm").innerHTML = "Wakeup";
    document.getElementById("alarm").style.backgroundColor = "Red";
}
else document.getElementById("alarm").innerHTML = "Alarm";

}
myClock();


//starting Date function
function myDate() {
    const date = new Date();
    let dd = date.getDate();
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let mm = months[date.getMonth()];
    let yy = date.getFullYear();

    let fullDate = dd + " " + mm + " " + yy;

document.getElementById('date').innerHTML = fullDate;
}
myDate();
