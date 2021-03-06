

//Merchindise 
var merch_prices = new Array();
 merch_prices["3pack"]=3; //Variabels that represents the value of a pack of stickers 
 merch_prices["5pack"]=4;
 merch_prices["10pack"]=5;
 merch_prices["none"]=0;

//Sticker 1
function getmerchStickerPrice() {//This function finds the price of the choosen sticker pack
    var merchStickerPrice=0; // start of the value of 0 
    var theForm = document.forms["merchform"];
    var stickeramount = theForm.elements["stickeramount"];
    for(var i = 0; i < stickeramount.length; i++) //We loop through each radio buttons
    {
        if(stickeramount[i].checked) //if the radio button is checked
        {
            merchStickerPrice = merch_prices[stickeramount[i].value];
        }
    }
    return merchStickerPrice; //the price is retuned 
}

//Sticker 2 
function getmerchSticker2Price(){  
    var merchSticker2Price=0;
    var theForm = document.forms["merchform"];
    var sticker2amount = theForm.elements["sticker2amount"];
    for(var i = 0; i < sticker2amount.length; i++)
    {
        if(sticker2amount[i].checked)
        {
            merchSticker2Price = merch_prices[sticker2amount[i].value];
            
        }
    }
    return merchSticker2Price;
}

//Sticker 3 
function getmerchSticker3Price(){  
    var merchSticker3Price=0;
    var theForm = document.forms["merchform"];
    var sticker3amount = theForm.elements["sticker3amount"];
    for(var i = 0; i < sticker3amount.length; i++)
    {
        if(sticker3amount[i].checked)
        {
            merchSticker3Price = merch_prices[sticker3amount[i].value];
           
        }
    }
    return merchSticker3Price;
}

//Sticker 4 
function getmerchSticker4Price(){  
    var merchSticker4Price=0;
    var theForm = document.forms["merchform"];
    var sticker4amount = theForm.elements["sticker4amount"];
    for(var i = 0; i < sticker4amount.length; i++)
    {
        if(sticker4amount[i].checked)
        {
            merchSticker4Price = merch_prices[sticker4amount[i].value];
            
        }
    }
    return merchSticker4Price;
}

//Wrapping
function wrappingPrice(){ //wrappingPrice() adds to the price of wrapping if checkbox is selected
    var wrapPrice=0; //the price starts at 0
    var theForm = document.forms["merchform"];
    var includewrapping = theForm.elements["includewrapping"];
	
    if(includewrapping.checked==true)//If the check box is checked it will set it to 3
        wrapPrice=3;
    return wrapPrice;//The wrapPrice is returnt
}

//Calculate       
function calculateTotal(){// Here the price is caculated based on previous choices 
    var merchPrice = getmerchStickerPrice() + getmerchSticker2Price() + getmerchSticker3Price() + getmerchSticker4Price() + wrappingPrice(); // The price of the first sticker+sticker2+sticker3+sticker4 and wrapping i added together 
    var priceresult = document.getElementById('totalPrice'); //displays the result
    priceresult.style.display='block';
    priceresult.innerHTML = "Total Price $"+merchPrice; //price is shown in the HTML file 

}

//Hiddin on loade of HTML
function hideTotal(){ //price is hidden upon lode of the page, the tag is found the the body tag of the HTML file
    var priceresult = document.getElementById('totalPrice');//this is what is hidden until its called upon
    priceresult.style.display='none'; 

}


//Paymet
function validatepayment(){
  var payment=10; //The variabel is sat to 10, therefore you can only withdraw 10
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var postalcode = document.getElementById("postalcode").value;
  var cardname = document.getElementById("cardname").value;
  var cardnumber = document.getElementById("cardnumber").value;
  var expiration = document.getElementById("expiration").value;
  var securitycode = document.getElementById("securitycode").value;
  
  var error_message = document.getElementById("error_message");

  var text;
  if(fullname.length < 1){ // This if-statement checks if the name is shorther than 1
    text = "Insert your full name"; // The text that shows up if filled incorectly
    error_message.innerHTML = text; // Inserts the text in HTML
	error_message.className = 'alert-pay mb-1'; // The error-message gets an alert background, we have styled more on it in css
	payment--; // If not filed correctly it will withdraw 1 from payment
	return false; 
	}
	
  if(email.indexOf("@") == -1 || email.length < 6){ //This if-statement checks if the name is shorther than 6 and includes a @
	text = "Insert your email";
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1';
	payment--;
	return false;
	}
	
	if(country.length < 1){ 
    text = "Insert your country"; 
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1';
	payment--; 
	return false; 
	}

	if(address.length < 1){ 
    text = "Insert address"; 
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1'; 
	payment--; 
	return false; 
	}
	
	if(city.length < 1){
    text = "Insert city";
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1'; 
	payment--; 
	return false; 
	}
	
	if(isNaN(postalcode) || postalcode.length < 4){//You can only answar with numbers
	text = "Insert postal code";	
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1';
	payment--;
	return false;
	}

	if(cardname.length < 1){ 
    text = "Insert name on card"; 
    error_message.innerHTML = text; 
	error_message.className = 'alert-pay mb-1'; 
	payment--; 
	return false; 
	}
	
	if(isNaN(cardnumber) || cardnumber.length < 16){
    text = "Insert card number";
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1';
	payment--;
	return false;
	}
	
	if(isNaN(expiration) || expiration.length != 4 ){
    text = "Insert expiration date";
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1';
	payment--;
	return false;
	}
	
	if(isNaN(securitycode) || securitycode.length != 3){//You can only answar with numbers and there has to be 3 numbers
    text = "Insert security code";
    error_message.innerHTML = text;
	error_message.className = 'alert-pay mb-1';
	payment--;
	return false;
	}
	if (payment==10) {// If all fields are filled in it runs an alert.
		error_message.innerHTML = ""; // Makes the error message dissapear when all is filled
		alert("Thank you for your order. We're looking forward to shipping it to you!");
	}
}