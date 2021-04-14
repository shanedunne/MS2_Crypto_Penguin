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

