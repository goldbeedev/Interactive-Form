var textInput;
var fieldsetget;
var Name;
var Email;

//focus the first input field on pageload
window.onload = function(){
	var input = document.getElementById("name").focus();
}
//get the jobs option values into a variable
var jobs = document.getElementById("title");


console.log(jobs);


//if the value of jobs changes to "other" append a text form
jobs.onchange = function() {
	if (jobs.value == "other") {
		textInput = document.createElement('div');
		textInput.setAttribute("id", "other-title")
		textInput.innerHTML = '<input type = "text" value="Your Title" class="textfield"></input>';
		fieldsetget = document.getElementsByTagName("fieldset")[0];
		fieldsetget.appendChild(textInput);
	} else {
		textInput.innerHTML = '';
	}
}

//T-shirt info - if the user selects "Theme- JS Puns" then the color menu should only display "Cornflower Blue [0]", "Dark Slate Grey [1]," and "Gold[2]"
//T-shirt info - if the user selects "Theme - I <3 JS" then the color menu should only display "Tomato," "Steel Blue" and "Dim Grey"

//get the design option values into a variable
var tShirts = document.getElementById("design");

//get the color option values into a variable
var ShirtColors = document.getElementById("color");

//function for the value of the design selection to change the corresponding color selector menu.
tShirts.onchange = function() {
	if (tShirts.value == "js puns") {
		ShirtColors.selectedIndex = 0;
		ShirtColors[3].style.display = "none";
		ShirtColors[4].style.display = "none";
		ShirtColors[5].style.display = "none";
		ShirtColors[0].style.display = "initial";
		ShirtColors[1].style.display = "initial";
		ShirtColors[2].style.display = "initial";
	} else if (tShirts.value == "heart js") {
		ShirtColors.selectedIndex = 3;
		ShirtColors[3].style.display = "initial";
		ShirtColors[4].style.display = "initial";
		ShirtColors[5].style.display = "initial";
		ShirtColors[0].style.display = "none";
		ShirtColors[1].style.display = "none";
		ShirtColors[2].style.display = "none";
	}
}




