let eventAppointment = new Date("Augest 1, 2021 6:2:2").getTime(); // eventAppointment variable point to Scheduled event date
  
setInterval(function() {
  
let recentTime = new Date().getTime(); // recentTime is a variable point to Now time.

let time = eventAppointment - recentTime; 

let days = Math.floor(time / (1000 * 60 * 60 * 24)); // calculate to days
if (days<10) { days= "0" + days;}

let hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));  //calculate hours
if (hours<10) { hours= "0" + hours;}

let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));     //calculate minutes
if (minutes<10) { minutes= "0" + minutes;}

let seconds = Math.floor((time % (1000 * 60)) / 1000);                // calculate seconds
if (seconds<10) { seconds= "0" + seconds;}

document.getElementById("day").innerHTML =days;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds;

if (time ==0){
        alert("event is now");}
        
}, 1000);

