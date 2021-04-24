// Google Maps API documentation tutorial

function initMap() {
    const galway = { lat: 53.270188186752506, lng: -9.054206447042363 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: galway,
    });
    const marker = new google.maps.Marker({
      position: galway,
      map: map,
    });
  }


  // Send email function

  function sendMail(contactForm) {
    emailjs.send("service_tdedqih","crypto_penguin", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.enquiry.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Thank you for getting in touch. Someone will get back to you soon');
            $('#myForm')[0].reset();
        },
        function(error) {
            console.log("ERROR SENDING", error)
        }
    )
    return false;
  }

