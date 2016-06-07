

$(document).ready(function() {

	//append the total dollars display under activities and hide it until clicked
	var $ActivityError = $('<div></div>');
	var $TotalDollars = 0;
	var $TotalDollarsDisplay = $('<div></div>');
	$('.activities').append($TotalDollarsDisplay);
	$($TotalDollarsDisplay).hide();

	//append activity error after the register for activities legend
	$("input[name='all']").before($ActivityError);
	console.log($("input[name='all']"));


	function updateTotal() { 
    
    var total = $(".activities input:checkbox:checked")
       
      // Get the text from the parent
      .map(function(idx, el) {
          return $(el).parent().text();
      })

      // convert the jquery object to an array
      .toArray()

      // extract the value from the string using regex
      .map(function(item) {
          var match = item.match(/\$(\d+)/);
          return parseInt(match[1]);
      })

      // calculate the total with reduce
      .reduce(function(cur, next) {
          return cur + next;
      });
    
    $TotalDollarsDisplay.text("Total:" + "$" + '' + total);
    $TotalDollarsDisplay.show();
}

	//checkbox needs to show unique dates and times and disable duplicates
	$(".activities").find("input:checkbox").change(function() {

	//variables for activity input names
		var $jsFrameworks = $("input[name='js-frameworks']");
		var $Express = $("input[name='express']");
		var $jsLibs = $("input[name='js-libs']");
		var $Node = $("input[name='node']");
		var $MainConf = $("input[name='all']");
		var $Npm = $("input[name='npm']");
		var $BuildTools = $("input[name='build-tools']");
		var $CheckedActivities = $(".activities").find('input:checkbox:checked');

        var checked = $(".activities input:checked").length > 0;
        if (!checked){
        $($TotalDollarsDisplay).hide();
        return false;
		console.log($CheckedActivities);
	}


	//Disable duplicate times scheduled
			if (($jsFrameworks).is(':checked')) {
				($Express).prop('disabled', true);
			} else  {
				($Express).prop('disabled', false);
			} 
			if (($Express).is(':checked')) { 
				($jsFrameworks).prop('disabled', true);
			} else {
				($jsFrameworks).prop('disabled', false);
			}
			if (($jsLibs).is(':checked')) {
				($Node).prop('disabled', true);
			} else  {
				($Node).prop('disabled', false);
			} 

			if (($Node).is(':checked')) { 
				($jsLibs).prop('disabled', true);
			} else {
				($jsLibs).prop('disabled', false);
			}
	    //add up the total dollars for each activity
		 updateTotal();
		});
//Hide the last 2 paragraphs on page load, make sure the credit card field is showing.
$("p:contains('Paypal')").hide();
$("p:contains('Bitcoin')").hide();
$("#credit-card").show();

//Changing the payment options hides other divs
			$("#payment").change(function() {
			      alert($(this).val());
			if ($(this).val() == 'credit card') {
			    		$("#credit-card").show();
				        $("p:contains('Paypal')").hide();
				        $("p:contains('Bitcoin')").hide();

			} else if ($(this).val() == 'paypal') {
						$("#credit-card").hide();
				        $("p:contains('Paypal')").show();
				        $("p:contains('Bitcoin')").hide();
			
			} else if ($(this).val() == 'bitcoin') {
						$("#credit-card").hide();
				        $("p:contains('Paypal')").hide();
				        $("p:contains('Bitcoin')").show();
				    }
	});


//when the submit button is clicked validate the forms.
	$('button').on("click", function(e) {
//prevent default styles from being applied when the submit button is pressed, thank you @Thuy!
        
     	if ($('#name').val() === '') {
     	  $('#name').prev().css("color", "red");
     	  $('#name').prev().html("Name: (please enter a name)");
     	  e.preventDefault();
     	} else {
     		$('#name').prev().css("color", "black");
     	  $('#name').prev().html("Name:");
     	}


//if the credit card forms are empty change to red, if not stay black.
//Use prevent default if the forms are empty to override the default styles and prevent the submit button from working
     if ($('#cc-num').val() === '') {
     	 $('#cc-num').prev().css("color", "red");
		e.preventDefault();

	} else {
		$('#cc-num').prev().css("color", "black");
	}

	if ($('#zip').val() === '') {
		  $('#zip').prev().css("color", "red");
		  e.preventDefault();

	} else {
		 $('#zip').prev().css("color", "black");
	}

	if ($('#cvv').val() === '') {
		  $('#cvv').prev().css("color", "red");
		e.preventDefault();

	 } else {
	 	$('#cvv').prev().css("color", "black");
	 }

//When the submit button is clicked make sure the user has selected at least one activity

     var checkedsubmit = $(".activities input:checked").length > 0;
      if (!checkedsubmit) {
      	($ActivityError).html('<div style="margin-top:-22px;color:red">please choose an activity</div>');
      	($ActivityError).show();
      	e.preventDefault();
      } else {
      	($ActivityError).hide();
      }

//check that a valid email address is provided - StackOverflow
  function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

	if (!isEmail($("#mail").val())) {
			$("#mail").prev().html('<div style="color:red">Email: (please provide a valid email address)</div>');
			e.preventDefault();
		} else {
			$("#mail").prev().html('<div style="color:black">Email:</div>');
		}

//check to see if the user selected a shirt, we do this by checking if the design option selected contains a value
// if not add CSS to make the shirt info area red, otherwise keep it black.
if ($('#design option:not([value])').is(':selected')) {
	$('.shirt > legend').css("color", "red");
	e.preventDefault();
} else {
	$('.shirt > legend').css("color", "inherit");
}
 

 });

  });





