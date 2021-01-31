

//Email Validation Function
function validate() {

//Declare variables;
var emailvalue     = document.getElementById('email').value;
var emailfield     = document.getElementById('email');
var emailformat    = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var emailerror     = document.getElementById('emailError');
var emailerrorsvg  = document.getElementById('errorSvg');

//Check if Email Address is valid conditional statement
if(emailvalue.match(emailformat)) {
	return true;
}

else  {
	emailerror.innerHTML = "Please provide a valid email";
	emailfield.classList.add('emailErrBrdr');
	emailfield.style.border = "1.5px solid red";
	emailerrorsvg.style.display = "initial";

	setTimeout(function() {

		emailfield.style.border = "";
		emailError.innerHTML = "";
    emailerrorsvg.style.display = "none";

	},5000)

	return false;

}

}
