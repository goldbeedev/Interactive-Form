var textInput;
var fieldsetget;
var Name;
var Email;

//focus the first input field on pageload
window.onload = function(){
	var input = document.getElementById("name").focus()
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


//get the design option values into a variable
var tShirts = document.getElementById("design");

console.log(tShirts);

//get the color option values into a variable
var ShirtColors = document.getElementById("color");

//group the shirt types into arrays with corresponding color types.
var Shirtdata = {
	"jspuns":["Cornflower Blue (JS Puns shirt only):value1","Dark Slate Grey (JS Puns shirt only):value2","Gold (JS Puns shirt only):value3"],
	"heartjs":["Tomato (I &#9829; JS shirt only):value4","Steel Blue (I &#9829; JS shirt only):value5","Dim Grey (I &#9829; JS shirt only):value6"]
};

//make the default shirt color selection please select a theme on pageload.
window.onload = function() {
	ShirtColors.innerHTML = "<option value='NoSelected'>Please Select a Theme</option>";
}



//function for the value of the design selection to change the corresponding color selector menu.
tShirts.onchange = function() {
	ShirtColors.innerHTML = "<option value='NoSelected'>Please Select a Theme</option>";
	var selectedValue = tShirts.value.split(' ').join('');
	if(!Shirtdata[selectedValue])
		return;
//loop through the data to create option values and display text.
	for(var i = 0; i < Shirtdata[selectedValue].length; i++){
		var option = document.createElement('option');
	option.value = Shirtdata[selectedValue][i].split(':')[1];
	option.innerHTML = Shirtdata[selectedValue][i].split(':')[0];
	ShirtColors.appendChild(option);
	}
}





