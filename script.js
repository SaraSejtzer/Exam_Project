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







/*bestil*/
function validate(){
  var applicant=5; // Der kan max fratrækkes 8, derfor er denne værdi sat til 8
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var instagram = document.getElementById("instagram").value;
  var who = document.getElementById("messagecontact1").value;
  var team = document.getElementById("messagecontact2").value;
  var error_message = document.getElementById("error_message");

  var text;
  if(name.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Insert your name"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	applicant--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}
	
  if(email.indexOf("@") == -1 || email.length < 6){
	text = "Insert your email";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
	applicant--;
	return false;
	}
	
	if(instagram.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Insert your instagram name"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	applicant--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}

	if(who.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Insert some details about yourself"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	applicant--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}
	
	if(team.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Tell us why you want to join"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	applicant--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}

	if (applicant==5) { // Hvis alle felter er udfyldt, altså der ikke er fratrukket fra order, eksekveres dette if-statement.
		alert("Your application has been sent");
	}
}

/*bestil*/
function validatecontact(){
  var applicant=3; // Der kan max fratrækkes 8, derfor er denne værdi sat til 8
  var name = document.getElementById("contactname").value;
  var email = document.getElementById("contactemail").value;
  var msg = document.getElementById("messagecontact").value;
  var error_message = document.getElementById("error_message");

  var text;
  if(name.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Insert your name"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	applicant--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}
	
  if(email.indexOf("@") == -1 || email.length < 6){
	text = "Insert your email";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
	applicant--;
	return false;
	}

	if(msg.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Insert the reason you are contacting us"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	applicant--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}
	
	if (applicant==3) { // Hvis alle felter er udfyldt, altså der ikke er fratrukket fra order, eksekveres dette if-statement.
		alert("Your message has been sent");
	}
}



// Dropdown in tutorials
function dropFunction() {
  var x = document.getElementById("myDIV");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

//    Filter in tutorials

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//      modal

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}