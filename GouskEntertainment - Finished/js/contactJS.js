function initMap() {
  var uluru = {lat: 40.711966, lng: -74.007678};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}