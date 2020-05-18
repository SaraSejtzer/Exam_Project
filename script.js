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






/*bestil*/
function validate(){
  var order=8; // Der kan max fratrækkes 8, derfor er denne værdi sat til 8
  var petname = document.getElementById("petname").value;
  var pet = document.getElementById("pet").value;
  var race = document.getElementById("race").value;
  var name = document.getElementById("name").value;
  var adresse = document.getElementById("adresse").value;
  var postnumber = document.getElementById("postnumber").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  // var message = document.getElementById("messagecontact").value;
  var error_message = document.getElementById("error_message");
  var error_message1 = document.getElementById("error_message1");

  var text;
  if(petname.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Intast dit kæledyrs navn"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	order--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}
	
  if(pet.length < 3){
    text = "Intast kæledyr";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
	order--;
	return false;
  }

	if(race.length < 4){
    text = "Intast dit kæledyrs race";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(name.length < 6){
    text = "Intast dit dit fulde navn";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(adresse.length < 6){
    text = "Intast din adresse";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(postnumber.length != 4 || isNaN(postnumber)){
    text = "Intast dit postnummer";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(email.indexOf("@") == -1 || email.length < 6){
    text = "Indtast email";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(isNaN(phone) || phone.length != 8){
    text = "intast mobilnummer";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	/*if(message.length <= 0 || message.length == null){
	error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
		order--;
		return false;
	}*/

	if (order==8) { // Hvis alle felter er udfyldt, altså der ikke er fratrukket fra order, eksekveres dette if-statement.
		alert("Bestilling gennemført.");
	}
}