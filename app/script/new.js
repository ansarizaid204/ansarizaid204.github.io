
$(document).ready(function() {

	$("#p1").hide();
	$("#p2").hide();
	$("#p3").hide();

	$("#btn").click(function(e){

		var correct = {
			"email":"faisal",
			"password":"rawal"
		}

		var email = $("#email")[0].value;
		var pass = $("#pass")[0].value;

		if(email == correct.email && pass ==correct.password ){
			$("#msg").html('<div class="alert alert-success" role="alert">Valid</div>')
			// $(location).attr('href', 'index.html')
		}else {
			$("#msg").html('<div class="alert alert-danger" role="alert">Invalid</div>')
		}

		// console.log()

	});

	
	
	// setInterval(function(){
	// 	var dt = new Date();
	// 	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	// 	$("#time")[0].outerText = time
	// },1000)
		
	console.log($("#time"))

});