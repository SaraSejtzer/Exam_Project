// JavaScript Document


 /* var typing = new Typed('#typing', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  }); */

 
var i = 0;
var txt = 'For artists by artists'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */ 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
	
function typeDelete() {
	i=0;
  if (i < document.getElementById("demo").innerHTML.length) {
    document.getElementById("demo").innerHTML = "";
  }
	


	
	
}