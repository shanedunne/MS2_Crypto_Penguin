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

  const contentString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="mapMarkerHeading" class="firstHeading">Crypto Penguin in Galway</h1>' +
  '<div id="bodyContent">' +
  "<p><b>Crypto Penguin</b> is located in Galway City in the west of Ireland</p>" +
  "</div>" +
  "</div>";

const infowindow = new google.maps.InfoWindow({
  content: contentString,
});


marker.addListener("click", () => {
  infowindow.open(map, marker);
});
}


// Send email function

function sendMail(contactForm) {
  emailjs.send("service_tdedqih", "crypto_penguin", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "message": contactForm.enquiry.value
  })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        alert('Thank you for getting in touch. Someone will get back to you soon');
        $('#myForm')[0].reset();
      },
      function (error) {
        console.log("ERROR SENDING", error);
        alert('Sorry an arror has occured. Please try again later')
      }
    )
  return false;
}

