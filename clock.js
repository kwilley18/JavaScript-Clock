
function clockUpdate(){
	
var time = new Date(); 
var min = time.getMinutes();
var hour = time.getHours(); 
var sec = time.getSeconds(); 
var AMorPM; 
var timeString; 

min = ( min < 10 ? "0" : "") + min;
sec = ( sec < 10 ? "0" : "" ) + sec; 
AMorPM = ( hour < 12 ? "AM" : "PM"); 
hour = ( hour > 12 ? (hour - 12) : hour)
//hour = ( hour < 12 ? "0" : "" ) + hour; 

hour = (hour == 0 ? 12 : hour)

timeString = hour + ":" + min + ":" + sec + " " + AMorPM
document.getElementById("clock").firstChild.nodeValue = timeString; 
	
}