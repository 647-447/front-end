var map;
var myLatLng = {lat: 37.5497, lng: -122.0811};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
          lat: 37.5497,
          lng: -122.0811
        },
    zoom: 12,
    disableDefaultUI: true,
    fullscreenControl: true,
    styles: styles
  });

  var cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.1,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: myLatLng,
    radius: 500
  });

  google.maps.event.addListener(map, 'click', function(event) {
           placeCircle(event.latLng);
        });

        var temp = 1;
        function placeCircle(location) {
          if(temp > 5) return;
          temp++;
          var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.1,
            strokeWeight: 0,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: location,
            radius: 200
          });
        }
}