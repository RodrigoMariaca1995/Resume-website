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
      emailjs.sendForm('cv_services', 'cv_services', form)
          .then(function() {
              success();
              console.log('SUCCESS!');
              
          }, function(error) {
              errors();
              console.log('FAILED...', error);
              
          });
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
validate();