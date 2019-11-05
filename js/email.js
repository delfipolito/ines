$(document).ready(function(){
  $('#mailgun-submit').click(function(e) {
    e.preventDefault();

    emailjs.send("mailgun","email",{
      "reply_to": $('#email').val(),
      "from_name": $('#name').val(),
      "message_html":$('#message').val(),
    })
      .then(
        function(response) {
          console.log("SUCCESS", response);
          window.location = "./gracias.html";
        },
        function(error) {
          console.log("FAILED", error);
          window.location = "./error.html";
        }
      );
  });
});
