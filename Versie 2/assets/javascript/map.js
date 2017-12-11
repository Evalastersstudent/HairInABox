function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.245, lng: 4.76},
    zoom: 10,
    disableDefaultUI: true,
    zoomControl: true,
    scaleControl: false,
    rotateControl: false,
    cursor: 'context-menu'
  });

  var verkooppunten = [
    ['Froe Loe', 51.32, 5.08, 1, 'Kerkstraat 52, 2370 Arendonk', '+32 472 64 29 22'],
    ['Kapsalon Pascale', 51.32, 5.07, 2, 'Kuiperkensstraat 48, 2370 Arendonk', '+32 478 82 90 75'],
    ['Kapsalon Exclusief', 51.14, 4.76, 3, 'Vlakke Velden 41, 2270 Herenthout', '+32 14 51 22 71'],
    ['Ronny &#39;T Kapperke', 51.14 ,4.44, 4, 'Molenstraat 43, 2550 Kontich', '+32 34 58 34 15'],
    ['Monkey&#39;s', 51.22, 4.46, 5, 'Turnhoutsebaan 36, 2100 Deurne', '+32 33 44 43 04'],
  ];

  for (var i = 0; i < verkooppunten.length; i++) {
        var verkooppunt = verkooppunten[i];
        var contentString = '<h1 id="title">'+verkooppunt[0]+'</h1>'+'<p id="address">'+verkooppunt[4]+'<br>'+verkooppunt[5]+'</p>'+'<p id="phonenumber">'+verkooppunt[6]+'</p>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
  }

  function setMarkers(map, marker) {
    var image = 'assets/Fotos/Marker.png';
    for (var i = 0; i < verkooppunten.length; i++) {
      var verkooppunt = verkooppunten[i];
      var marker = new google.maps.Marker({
        position: {lat: verkooppunt[1], lng: verkooppunt[2]},
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
        title: verkooppunt[0],
        zIndex: verkooppunt[3]
      });
    }
    marker.addEventListener("click", function() {
      infowindow.open(map, marker);
    });
  }

  setMarkers(map);
}
