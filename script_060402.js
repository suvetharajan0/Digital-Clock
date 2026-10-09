function runClock(){
  
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

var text = "AM";

if(hours>12){
     hrs = hours - 12
    text = "PM";
}
else if (hours = 0) {
     hrs = "PM";
}

hrs = hrs <= 9 ? "0" + hrs : hrs;
minutes = minutes <= 9 ? "0" + minutes : minutes;
seconds = seconds <= 9 ? "0" + seconds :seconds;

const clock = document.getElementById('clock')
clock.innerHTML = `${hrs} : ${minutes} : ${seconds}`
}
runClock()
setInterval(runClock, 1000)
