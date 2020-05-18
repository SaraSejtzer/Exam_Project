// JavaScript Document
var i = 0; //i is the position of the letters, specialcharacters and spaces in this case, and starts at index 0. 
var txt = 'For artists by artists'; /* The text */
var txt1 = 'Get started!';
var speed = 40; /* The speed/duration of the effect in milliseconds */ 

function loopingText(){
		setTimeout(typeWriter, 0); //calls typeWriter function with 0 millisecond delay. 
		setTimeout(typeDelete, 2000); //calls typeDelete function with 2 seconds delay. 
		setTimeout(typeWriter1, 2000);//calls typeWriter1 function with 2 seconds delay.
		setTimeout(loopingIt, 5000); //calls loopingIt function with 5 seconds delay, creating a loop.
	} 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i); //inserts the character at i'th position. 
    i++; //increments i. 
    setTimeout(typeWriter, speed); //calls typeWriter function with the given speed 40. 
  } 
}

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  } 
}

function typeDelete() { //"sletter" teksten igen
document.getElementById("demo").innerHTML = ""; //Sets the h1 header with the id demo to an empty string. 
	i=0; // sets i to 0. 
  }
	
function loopingIt(){
	document.getElementById("demo").innerHTML = "";
	i=0;
	loopingText(); //Calls the function loopingText which creates the loop. 
}

	








function switchStyle() {
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}