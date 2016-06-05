

$(document).ready(function() {
	//append the total dollars display under activities and hide it until clicked
	var $TotalDollars = 0;
	var $TotalDollarsDisplay = $('<div></div>');
	$('.activities').append($TotalDollarsDisplay);
	$($TotalDollarsDisplay).hide();

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
$("p:contains('Bitcoin')").show();
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
   $('button').on("click", function() {
		if ($('#name').val() === '') {
		$('#name').prev().css("color", "red");
		}

    });


});


//Make event handler so when submit button is pressed form validation takes place
// $('button').on("click", function() {
// 		if ($('#name').val() === '') {
// 		$('#name').prev().css("color", "red")
// 		}

// });


// else if $("input[name='express']").is(':checked') {
// 				$("input[name='js-frameworks']").prop('disabled', true);