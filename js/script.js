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


//Apply
function validate(){
  var applicant=5; // The variabel is sat to 5, therefore you can only withdraw 5
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var instagram = document.getElementById("instagram").value;
  var who = document.getElementById("messagecontact1").value;
  var team = document.getElementById("messagecontact2").value;
  var error_message = document.getElementById("error_message");

  var text;
  if(name.length < 1){ // This if-statement checks if the name is shorther than 1
    text = "Insert your name"; // The text that shows up if filled incorectly
    error_message.innerHTML = text; // Inserts the text in HTML
	error_message.className = 'alert-join mb-1'; // The error-message gets an alert background, we have styled more on it in css
	applicant--; // If not filed correctly it will withdraw 1 from applicant
	return false; 
	}
	
  if(email.indexOf("@") == -1 || email.length < 6){//This if-statement checks if the name is shorther than 6 and includes a @
	text = "Insert your email";
    error_message.innerHTML = text;
	error_message.className = 'alert-join mb-1';
	applicant--;
	return false;
	}
	
	if(instagram.length < 1){ 
    text = "Insert your instagram name"; 
    error_message.innerHTML = text; 
	error_message.className = 'alert-join mb-1'; 
	applicant--; 
	return false; 
	}

	if(who.length < 1){ 
    text = "Insert some details about yourself"; 
    error_message.innerHTML = text; 
	error_message.className = 'alert-join mb-1'; 
	applicant--; 
	return false; 
	}
	
	if(team.length < 1){ 
    text = "Tell us why you want to join"; 
    error_message.innerHTML = text; 
	error_message.className = 'alert-join mb-1';
	applicant--; 
	return false; 
	}

	if (applicant==5) { // If all fields are filled in it runs an alert.
		error_message.innerHTML = ""; // Makes the error message dissapear when all is filled
		alert("Your application has been sent");
	}
}


//Contact
function validatecontact(){
  var con=3; // The variabel is sat to 3, therefore you can only withdraw 3
  var name = document.getElementById("contactname").value;
  var email = document.getElementById("contactemail").value;
  var msg = document.getElementById("messagecontact").value;
  var error_message1 = document.getElementById("error_message1");

  var text;
  if(name.length < 1){ // This if-statement checks if the name is shorther than 1
    text = "Insert your name"; // The text that shows up if filled incorectly
    error_message1.innerHTML = text; // Inserts the text in HTML
	error_message1.className = 'alert-contact mb-1'; // The error-message gets an alert background, we have styled more on it in css
	con--; // If not filed correctly it will withdraw 1 from applicant
	return false; 
	}
	
  if(email.indexOf("@") == -1 || email.length < 6){//This if-statement checks if the name is shorther than 6 and includes a @
	text = "Insert your email";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-contact mb-1';
	con--;
	return false;
	}

	if(msg.length < 1){ 
    text = "Insert the reason you are contacting us"; 
    error_message1.innerHTML = text; 
	error_message1.className = 'alert-contact mb-1'; 
	con--;
	return false; 
	}
	
	if (con==3) { 
		error_message1.innerHTML = ""; // Makes the error message dissapear when all is filled
		alert("Your message has been sent");
	}
}


