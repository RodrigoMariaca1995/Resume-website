function success(){
  swal({
      title: "Success!",
      text: "Message sent successfully!",
      icon: "success",
      button: "close",
  });
}

function errors(){
  swal({
      title: "Uh Oh!",
      text: "There was a problem sending your message",
      icon: "error",
      button: "close",
  });
}

function sendMail(form){
    console.log("sendMail");
    event.preventDefault()
    form.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
    if(grecaptcha.getResponse() == "") {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
    }
    else{
        emailjs.sendForm('cv_services', 'cv_services', form)
        .then(function() {
            success();
            console.log('SUCCESS!');
            
        }, function(error) {
            errors();
            console.log('FAILED...', error);
            
        });
        grecaptcha.reset();
    }
    
}

function validate(){
  var form = document.querySelector('.needs-validation')
  
      form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          console.log("wrong");
      }
      else{
          console.log("validated");
          sendMail(form);     
      }

      form.classList.add('was-validated')
      
      }, false)

      
}
 
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}

validate();



