function generate_random_number()
{
	var number_1 = 1;
	var number_2 = 50;
	var random_number = (parseInt(number_2) - parseInt(number_1)) + 1;
	var random_1 = Math.floor(Math.random()*random_number)+parseInt(number_1);
	var random_2 = Math.floor(Math.random()*random_number)+parseInt(number_1);
	$("#random_number_1").html(random_1);
	$("#random_number_2").html(random_2);
}

$(document).ready(function(){

	$("#regenerate").click(function(){
		generate_random_number();
	});

	$("#submit").click(function(){

		var predicted_total = parseInt($('#random_number_1').html())+parseInt($('#random_number_2').html());
		var calculated_total = $('#total').val();

		if(predicted_total!=calculated_total)
		{
			alert("Wrong sum Entered");
			$('#total').val('').focus();
			generate_random_number();
			return false;
		}
		else
		{
			alert("sum Entered Correctly");
		}

	});

	generate_random_number();
});