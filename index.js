var stylesArray = [
  {
    featureType: '',
    elementType: '',
    stylers: [
      {color: ''},
      {visibility: ''},
      // Add any stylers you need.
    ]
  },
  {
    featureType: '',
    // Add the stylers you need.
  }
]
function initMap() {
  // Map options
  var myOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 12,
    center: { lat: 30.0444, lng: 31.2357 } // Cairo's coordinates
  };
  
  // Create map
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  
  // Metro lines
  var lines = [
    { name: 'Line 1', color: '#e20c00', stations: [
      { name: 'Helwan', coords: { lat: 29.8419, lng: 31.3008 } },
      { name: 'Ain Helwan', coords: { lat: 29.8554, lng: 31.3132 } },
      { name: 'Helwan University', coords: { lat: 29.8696, lng: 31.3207 } },
      { name: 'Wadi Hof', coords: { lat: 29.8838, lng: 31.3246 } },
      { name: 'Maadi', coords: { lat: 29.9636, lng: 31.2576 } },
      { name: 'Sakanat El-Maadi', coords: { lat: 29.9747, lng: 31.2607 } },
      { name: 'Tora El-Balad', coords: { lat: 29.9787, lng: 31.2677 } },
      { name: 'Kozzika', coords: { lat: 29.9882, lng: 31.2755 } },
      { name: 'Tora El-Asmant', coords: { lat: 30.0001, lng: 31.2773 } },
      { name: 'El-Maasara', coords: { lat: 30.0213, lng: 31.2831 } },
      { name: 'Hadayek El-Maadi', coords: { lat: 30.0385, lng: 31.2971 } },
      { name: 'Thakanat El-Maadi', coords: { lat: 30.0473, lng: 31.3027 } },
      { name: 'Dar El-Salam', coords: { lat: 30.0604, lng: 31.3094 } },
      { name: 'Hadayek El-Zaitoun', coords: { lat: 30.0792, lng: 31.3217 } },
      { name: 'Saray El-Qobba', coords: { lat: 30.0907, lng: 31.3277 } },
      { name: 'Hammamat El-Qobba', coords: { lat: 30.1001, lng: 31.3297 } },
      { name: 'Kobri El-Qobba', coords: { lat: 30.1132, lng: 31.3355 } },
      { name: 'Manshiet El-Sadr', coords: { lat: 30.1168, lng: 31.3491 } },
      { name: 'El-Marg', coords: { lat: 30.1291, lng: 31.3435 } },
      { name: 'Ain Shams', coords: { lat: 30.1236, lng: 31.3316 } },
      { name: 'El-Matareyya', coords: { lat: 30.1182, lng: 31.3076 } },
      { name: 'Helmeyet El-Zaitoun', coords: { lat: 30.1117, lng: 31.2953 } },
      { name: 'Hadayek El-Kobba', coords: { lat: 30.1097, lng: 31.2833 } },
      { name: 'Ard El-Maared', coords: { lat: 30.1007, lng: 31.2747 } },
      { name: 'Abbassiya', coords: { lat: 30.0906, lng: 31.2651 } },
      { name: 'Al-Shohadaa', coords: { lat: 30.0774, lng: 31.2484 } },
      { name: 'Ataba', coords: { lat: 30.0591, lng: 31.2455 } },
      { name: 'Mohamed Naguib', coords: { lat: 30.0518, lng: 31.2411 } },
      { name: 'Sadat', coords: { lat: 30.0448, lng: 31.2386 } },
      { name: 'Gamal Abdel Nasser', coords: { lat: 30.0372, lng: 31.2326 } },
      { name: 'El-Shohadaa', coords: { lat: 30.0265, lng: 31.2315 } },
      { name: 'Attaba', coords: { lat: 30.0159, lng: 31.2326 } },
      { name: 'Masarra', coords: { lat: 30.0046, lng: 31.2384 } },
      { name: 'Rod El-Farag', coords: { lat: 30.0129, lng: 31.2483 } },
      { name: 'Shubra El-Kheima', coords: { lat: 30.0624, lng: 31.2498 } }
  ]},
    { name: 'Line 2', color: '#0057b7', stations: [
      { name: 'Shobra El-Kheima', coords: { lat: 30.1286, lng: 31.2586 } },
      { name: 'Koliet El-Zeraa', coords: { lat: 30.1269, lng: 31.2712 } },
      { name: 'Mezallat', coords: { lat: 30.1236, lng: 31.2854 } },
      { name: 'Khalafawy', coords: { lat: 30.1199, lng: 31.2972 } },
      { name: 'Sakiat Mekki', coords: { lat: 30.1159, lng: 31.3103 } },
      { name: 'Kobri El-Qobba', coords: { lat: 30.1132, lng: 31.3355 } },
      { name: 'Hamamat El-Qobba', coords: { lat: 30.1001, lng: 31.3297 } },
      { name: 'Saray El-Qobba', coords: { lat: 30.0907, lng: 31.3277 } },
      { name: 'Al-Shohadaa', coords: { lat: 30.0774, lng: 31.2484 } },
      { name: 'Ataba', coords: { lat: 30.0591, lng: 31.2455 } },
      { name: 'Mohamed Naguib', coords: { lat: 30.0518, lng: 31.2411 } },
      { name: 'Sadat', coords: { lat: 30.0448, lng: 31.2386 } },
      { name: 'Opera', coords: { lat: 30.0361, lng: 31.2351 } },
      { name: 'Dokki', coords: { lat: 30.0233, lng: 31.2155 } },
      { name: 'El-Bohooth', coords: { lat: 30.0126, lng: 31.2056 } },
      { name: 'Cairo University', coords: { lat: 30.0227, lng: 31.2107 } },
      { name: 'Faisal', coords: { lat: 30.0231, lng: 31.1976 } },
      { name: 'Giza', coords: { lat: 30.0131, lng: 31.2089 } },
      { name: 'Omm El-Sid Hill', coords: { lat: 30.0137, lng: 31.1957 } },
      { name: 'Sakiat Mekki', coords: { lat: 30.0057, lng: 31.1844 } },
      { name: 'El-Monib', coords: { lat: 29.9976, lng: 31.1733 } },
      { name: 'El-Mounib', coords: { lat: 29.9976, lng: 31.1733 } },
      { name: 'Sudan', coords: { lat: 29.9919, lng: 31.1651 } },
      { name: 'Imbaba', coords: { lat: 29.9796, lng: 31.2351 } },
  ]}]

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    // Get coordinates for each station
    var lineCoords = line.stations.map(function(station) {
      return station.coords;
    });
    // Draw line on map
    var metroLine = new google.maps.Polyline({
      path: lineCoords,
      geodesic: true,
      strokeColor: line.color,
      strokeOpacity: 1.0,
      strokeWeight: 5
    });
    metroLine.setMap(map);
  }

  // Add markers and info windows for each station
  for (var i = 0; i < lines.length; i++) {
		var stations = lines[i].stations;
		var lineColor = lines[i].color;
		for (var j = 0; j < stations.length; j++) {
			var station = stations[j];
			var marker = new google.maps.Marker({
			position: station.coords,
			map: map,
			title: station.name,
			icon: {
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: lineColor,
				fillOpacity: 1,
				strokeColor: '#fff',
				strokeWeight: 1,
				scale: 8
			}
			});
			var infoWindow = new google.maps.InfoWindow({
			content: station.name
			});
			marker.addListener('click', function() {
			infoWindow.open(map, marker);
			});}
		}

    // Add event listener for dropping pins
    google.maps.event.addListener(map, 'click', function(event) {
      var marker = new google.maps.Marker({
        position: event.latLng,
        map: map,
        draggable: true
      });
      var infowindow = new google.maps.InfoWindow({
        content: '<input type="text" placeholder="Label" id="label" /><br /><button onclick="saveMarker()">Save</button>'
      });
      infowindow.open(map, marker);
      google.maps.event.addListener(marker, 'dragend', function() {
        var pos = marker.getPosition();
        infowindow.setContent('<input type="text" placeholder="Label" id="label" /><br /><button onclick="saveMarker()">Save</button>');
        infowindow.setPosition(pos);
        infowindow.open(map, marker);
      });
      window.saveMarker = function() {
        var label = document.getElementById('label').value;
        if (label !== '') {
          marker.setDraggable(false);
          marker.setTitle(label);
          infowindow.close();
        }
      };
    });
  }
  
function initialize() {
  // init map
  var myOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  // init directions service
  var dirService = new google.maps.DirectionsService();
  var dirRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
  dirRenderer.setMap(map);

  // highlight a street
  var request = {
      origin: "48.1252,11.5407",
      destination: "48.13376,11.5535",
      travelMode: google.maps.TravelMode.DRIVING
  };
  dirService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
          dirRenderer.setDirections(result);
      }
  });
}