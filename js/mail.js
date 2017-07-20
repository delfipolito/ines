$(document).ready(function(){


	$('#mailgun-submit').click(function(e){
		$.ajax('https://api.mailgun.net/v3/sandbox16f273610ec04fe6a5631b9f9592d499.mailgun.org/messages', {
			headers: {"Authorization": "Basic api:key-6ee7203e08b83093db942c2986443e8d"},
			type:"POST",
			data:JSON.stringify({
				"html": `<h1>TITLE-HERE</h1>`,
				"subject": 'hola',
				"from": "User<user@example.com>",
				"to": "<delfipolito@hotmail.com>"
			}),

			complete: function(res) {
				console.log("end");
				console.log(res);
			},
			success: function(a,b,c) {
				window.location = "./gracias.html";
			}.bind(this),
			error: function(xhr, status, errText) {
				window.location = "./error.html";
				console.log('mail sent failed: ', xhr.responseText, xhr, status, errText);
			},
		})
	});

});
