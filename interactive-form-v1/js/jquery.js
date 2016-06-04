

$(document).ready(function() {
	//append the total dollars display under activities and hide it until clicked
	var $TotalDollars = 0;
	var $TotalDollarsDisplay = $('<div></div>');
	$('.activities').append($TotalDollarsDisplay);
	$($TotalDollarsDisplay).hide();
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
		var $CheckedActivities = $(".activities").find('input:checkbox:checked').length;
		console.log($CheckedActivities);
	//Disable duplicate times scheduled
			if (($jsFrameworks).is(':checked')) {
				($Express).prop('disabled', true);
				($TotalDollarsDisplay).html('<div>Total:' + '' + '$' + $TotalDollars + '</div>');
			} else  {
				($Express).prop('disabled', false);
			} 
			if (($Express).is(':checked')) { 
				($jsFrameworks).prop('disabled', true);
				($TotalDollarsDisplay).html('<div>Total:' + '' + '$' + $TotalDollars + '</div>');
			} else {
				($jsFrameworks).prop('disabled', false);
			}
			if (($jsLibs).is(':checked')) {
				($Node).prop('disabled', true);
				($TotalDollarsDisplay).html('<div>Total:' + '' + '$' + $TotalDollars + '</div>');
			} else  {
				($Node).prop('disabled', false);
			} 

			if (($Node).is(':checked')) { 
				($jsLibs).prop('disabled', true);
				($TotalDollarsDisplay).html('<div>Total:' + '' + '$' + $TotalDollars + '</div>');
			} else {
				($jsLibs).prop('disabled', false);
			}
	//add up the total dollars for each activity
		//Adding the non duplicate workshops to the total
			for (i = 0; i < $CheckedActivities; i++) {
				$($TotalDollarsDisplay).html('<div>Total:' + '' + '$' + $TotalDollars * i + '</div>')
			}
			$($TotalDollarsDisplay).show();
		});



});




// else if $("input[name='express']").is(':checked') {
// 				$("input[name='js-frameworks']").prop('disabled', true);