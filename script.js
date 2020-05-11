// JavaScript Document
var i = 0;
var txt = 'For artists by artists'; /* The text */
var txt1 = 'Get started!';
var speed = 50; /* The speed/duration of the effect in milliseconds */ 
var switching = 0;

function loopingText(){
		//typeWriter();
		setTimeout(typeWriter, 0);
		setTimeout(typeDelete, 2000);
		setTimeout(typeWriter1, 2000);
		setTimeout(loopingIt, 5000);
	} 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 
}

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  } 
}

function typeDelete() {
document.getElementById("demo").innerHTML = "";
	i=0;
  }
	
function loopingIt(){
	document.getElementById("demo").innerHTML = "";
	i=0;
	loopingText();
}

	
	