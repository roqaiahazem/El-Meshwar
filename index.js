// Import functions needed from the SDKs needed
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue, push
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

//constraining map to Egypt bounds
let map;
const Cairo_BOUNDS = {
  north: 30.698613784827117,
  south: 29.67076334280161,
  west: 30.17080053626919,
  east: 30.174607938427343,
};
const SADAT = { lat: 30.069007903411094, lng: 31.32448783406444 };

// add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUnLmr_-vhvcYhvhaQe2JZNzi1160rX8c",
  authDomain: "el-meshwar.firebaseapp.com",
  databaseURL: "https://el-meshwar-default-rtdb.firebaseio.com",
  projectId: "el-meshwar",
  storageBucket: "el-meshwar.appspot.com",
  messagingSenderId: "643077991151",
  appId: "1:643077991151:web:36282f622e21e15309891a",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize realtime database and get a reference to the service
const database = getDatabase(app);

// create a firebase database reference to the "markers" node
var markersRef = ref(database, "markers");

// initialize and add the map
function initMap() {

  //call the cairo map bounds
  map = new google.maps.Map(document.getElementById("map"), {
    center: SADAT,
    restriction: {
      latLngBounds: Cairo_BOUNDS,
      strictBounds: false,
    },
    zoom: 7,
  });

  // map options
  var myOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 10.5,
    center: { lat: 30.0444, lng: 31.2357 }, // Cairo's coordinates
    disableDefaultUI: true,
    styles: [
      // add any stylers needed
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          { visibility: "off" },
        ],
      },
      // add more stylers 
      {
        featureType: "landscape.man_made",
        stylers: [
          {visibility: "off"},
        ]
      },
      {
        featureType: "landscape.man_made",
        stylers: [
          {color: "#CFCFCF"},
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {visibility: "off"},
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {visibility: "off"},
        ]
      },
      {
        featureType: "road.arterial",
        stylers: [
          {visibility: "off"},
        ]
      },
      // {
      //   featureType: "road.highway",
      //   stylers: [
      //     {visibility: "off"},
      //   ]
      // },
    ],
  };

  // create map
  var map = new google.maps.Map(document.getElementById("map"), myOptions);

  // metro lines and station coordinates
  var lines = [
    {
      name: "Line 1",
      color: "#045195",
      stations: [
        {
          name: "Helwan",
          coords: { lat: 29.84027778, lng: 31.33416667 },
        },
        { name: "Ain Helwan", coords: { lat: 29.86277778, lng: 31.325 } },
        {
          name: "Helwan University",
          coords: { lat: 29.86888889, lng: 31.32027778 },
        },
        {
          name: "Wadi Hof",
          coords: { lat: 29.87944444, lng: 31.31333333 },
        },
        {
          name: "Hadayek Helwan",
          coords: { lat: 29.89722222, lng: 31.30416667 },
        },
        {
          name: "El-Maasara",
          coords: { lat: 29.90611111, lng: 31.29972222 },
        },
        {
          name: "Tora El-Asmant",
          coords: { lat: 29.92583333, lng: 31.28777778 },
        },
        {
          name: "Kozzika",
          coords: { lat: 29.93611111, lng: 31.28166667 },
        },
        {
          name: "Tora El-Balad",
          coords: { lat: 29.94638889, lng: 31.27361111 },
        },
        {
          name: "Sakanat El-Maadi",
          coords: { lat: 29.95277778, lng: 31.26333333 },
        },
        { name: "Maadi", coords: { lat: 29.95972222, lng: 31.25805556 } },
        {
          name: "Hadayek El-Maadi",
          coords: { lat: 29.97, lng: 31.25055556 },
        },
        {
          name: "Dar El-Salam",
          coords: { lat: 29.98194444, lng: 31.24222222 },
        },
        {
          name: "El Zahraa",
          coords: { lat: 29.99527778, lng: 31.23166667 },
        },
        {
          name: "Mar Girgis",
          coords: { lat: 30.00583333, lng: 31.22944444 },
        },
        {
          name: "El Malek El Saleh",
          coords: { lat: 30.01694444, lng: 31.23083333 },
        },
        {
          name: "Sayeda Zeinab",
          coords: { lat: 30.02916667, lng: 31.23527778 },
        },
        {
          name: "Saad Zaghloul",
          coords: { lat: 30.03666667, lng: 31.23805556 },
        },
        { name: "Sadat", coords: { lat: 30.04444444, lng: 31.23555556 } },
        {
          name: "Gamal Abdel Nasser",
          coords: { lat: 30.05361111, lng: 31.23888889 },
        },
        { name: "Orabi", coords: { lat: 30.0575, lng: 31.2425 } },
        {
          name: "Al-Shohadaa",
          coords: { lat: 30.06194444, lng: 31.24611111 },
        },
        {
          name: "Ghamra",
          coords: { lat: 30.06888889, lng: 31.26472222 },
        },
        {
          name: "El Demerdash",
          coords: { lat: 30.07722222, lng: 31.27777778 },
        },
        {
          name: "Manshyet El Sadr",
          coords: { lat: 30.08222222, lng: 31.28777778 },
        },
        {
          name: "Kobry El Qubba",
          coords: { lat: 30.08694444, lng: 31.29388889 },
        },
        {
          name: "Hammamat El Qubba",
          coords: { lat: 30.09027778, lng: 31.29805556 },
        },
        {
          name: "Saray El Qubba",
          coords: { lat: 30.09805556, lng: 31.30472222 },
        },
        {
          name: "Hadayek El-Zaitoun",
          coords: { lat: 30.10527778, lng: 31.31 },
        },
        {
          name: "Helmeyet El-Zaitoun",
          coords: { lat: 30.11444444, lng: 31.31388889 },
        },
        {
          name: "Mattareya",
          coords: { lat: 30.12138889, lng: 31.31388889 },
        },
        {
          name: "Ain Shams",
          coords: { lat: 30.13111111, lng: 31.31916667 },
        },
        {
          name: "Ezbet El Nakhl",
          coords: { lat: 30.13916667, lng: 31.32444444 },
        },
        {
          name: "El Marg",
          coords: { lat: 30.15222222, lng: 31.33555556 },
        },
        {
          name: "New El Marg",
          coords: { lat: 30.16333333, lng: 31.33833333 },
        },
      ],
    },
    {
      name: "Line 2",
      color: "#c22e3a",
      stations: [
        {
          name: "El-Mounib",
          coords: { lat: 29.98138889, lng: 31.21194444 },
        },
        {
          name: "Sakyet Mekky",
          coords: { lat: 29.99555556, lng: 31.20861111 },
        },
        {
          name: "Omm El-Masryeen",
          coords: { lat: 30.00527778, lng: 31.20805556 },
        },
        { name: "Giza", coords: { lat: 30.01055556, lng: 31.20694444 } },
        {
          name: "Faysal",
          coords: { lat: 30.01722222, lng: 31.20388889 },
        },
        {
          name: "Cairo University",
          coords: { lat: 30.02611111, lng: 31.20111111 },
        },
        {
          name: "El Behoos",
          coords: { lat: 30.03583333, lng: 31.20027778 },
        },
        { name: "Dokki", coords: { lat: 30.03833333, lng: 31.21194444 } },
        { name: "Opera", coords: { lat: 30.04194444, lng: 31.22527778 } },
        { name: "Sadat", coords: { lat: 30.04444444, lng: 31.23555556 } },
        {
          name: "Mohamed Naguib",
          coords: { lat: 30.04527778, lng: 31.24416667 },
        },
        { name: "Attaba", coords: { lat: 30.0525, lng: 31.24694444 } },
        {
          name: "Al-Shohadaa",
          coords: { lat: 30.06194444, lng: 31.24611111 },
        },
        { name: "Massara", coords: { lat: 30.07111111, lng: 31.245 } },
        {
          name: "Rod El Farag",
          coords: { lat: 30.08055556, lng: 31.24555556 },
        },
        {
          name: "Saint Theresa",
          coords: { lat: 30.08833333, lng: 31.24555556 },
        },
        {
          name: "El Khalafawy",
          coords: { lat: 30.09805556, lng: 31.24527778 },
        },
        {
          name: "El Mezallat",
          coords: { lat: 30.105, lng: 31.24666667 },
        },
        {
          name: "Koleyet El Zeraa",
          coords: { lat: 30.11388889, lng: 31.24861111 },
        },
        {
          name: "Shubra El Kheima",
          coords: { lat: 30.1225, lng: 31.24472222 },
        },
      ],
    },
    {
      name: "Line 3",
      color: "#00ab94",
      stations: [
        // unopened stations
        // { name: 'Airport', coords: { lat: , lng:  } },
        // { name: 'Ahmed Galal', coords: { lat: , lng:  } },

        {
          name: "Adly Mansour",
          coords: { lat: 30.14694444, lng: 31.42138889 },
        },
        {
          name: "El Haykestep",
          coords: { lat: 30.14388889, lng: 31.40472222 },
        },
        {
          name: "Omar Ibn El Khattab",
          coords: { lat: 30.14055556, lng: 31.39416667 },
        },
        { name: "Qubaa", coords: { lat: 30.13472222, lng: 31.38388889 } },
        {
          name: "Hesham Barakat",
          coords: { lat: 30.13111111, lng: 31.37277778 },
        },
        { name: "El Nozha", coords: { lat: 30.12833333, lng: 31.36 } },
        {
          name: "El Shams Club",
          coords: { lat: 30.12222222, lng: 31.34388889 },
        },
        {
          name: "Alf Maskan",
          coords: { lat: 30.11805556, lng: 31.33972222 },
        },
        {
          name: "Heliopolis",
          coords: { lat: 30.10805556, lng: 31.33805556 },
        },
        {
          name: "Haroun",
          coords: { lat: 30.10111111, lng: 31.33277778 },
        },
        {
          name: "El Ahram",
          coords: { lat: 30.09138889, lng: 31.32638889 },
        },
        {
          name: "Kolleyet El Banat",
          coords: { lat: 30.08361111, lng: 31.32888889 },
        },
        { name: "Stadium", coords: { lat: 30.07305556, lng: 31.3175 } },
        {
          name: "Fair Zone",
          coords: { lat: 30.07333333, lng: 31.30111111 },
        },
        {
          name: "El Abassiya",
          coords: { lat: 30.06972222, lng: 31.28083333 },
        },
        {
          name: "Abdou Pasha",
          coords: { lat: 30.06472222, lng: 31.27472222 },
        },
        {
          name: "El Geish",
          coords: { lat: 30.06194444, lng: 31.26694444 },
        },
        {
          name: "Bab El Shaariya",
          coords: { lat: 30.05388889, lng: 31.25611111 },
        },
        { name: "Attaba", coords: { lat: 30.0525, lng: 31.24694444 } },
        {
          name: "Gamal Abdel Nasser",
          coords: { lat: 30.05361111, lng: 31.23888889 },
        },
        {
          name: "Maspero",
          coords: { lat: 30.05555556, lng: 31.23222222 },
        },
        { name: "Safaa Hegazy", coords: { lat: 30.0625, lng: 31.2225 } },
        {
          name: "Kit-Kat",
          coords: { lat: 30.06666667, lng: 31.21305556 },
        },

        // more unopened stations
        // { name: 'Sudan', coords: { lat: , lng:  } },
        // { name: 'Imbaba', coords: { lat: , lng:  } },
        // { name: 'El-Bohy', coords: { lat: , lng:  } },
        // { name: 'El-Qawmia', coords: { lat: , lng:  } },
        // { name: 'Ring Road', coords: { lat: , lng:  } },
        // { name: 'Rod El Farag Corr.', coords: { lat: , lng:  } },
        // { name: 'Tawfikia', coords: { lat: , lng:  } },
        // { name: 'Wady El Nile', coords: { lat: , lng:  } },
        // { name: 'Gamet El Dowel', coords: { lat: , lng:  } },
        // { name: 'Boulak El Dakrour', coords: { lat: , lng:  } },
      ],
    },
    {
      name: "LRT",
      color: "#9f1b30",
      stations: [
        {
          name: "Adly Mansour",
          coords: { lat: 30.14694444, lng: 31.42138889 },
        },
        { name: "El-Obour", coords: { lat: 30.16301, lng: 31.48163 } },
        { name: "Future", coords: { lat: 30.1731, lng: 31.5542 } },
        { name: "El-Shorouk", coords: { lat: 30.17968, lng: 31.60559 } },
        {
          name: "New Heliopolis",
          coords: { lat: 30.18435, lng: 31.65273 },
        },
        { name: "Badr", coords: { lat: 30.17549, lng: 31.71587 } },
        {
          name: "Industrial Park",
          coords: { lat: 30.16807, lng: 31.75247 },
        },
        {
          name: "Knowledge City",
          coords: { lat: 30.20579, lng: 31.71527 },
        },

        //unopened stations
        // { name: 'West of Ramadan', coords: { lat: , lng:  } },
        // { name: '10th of Ramadan', coords: { lat: , lng:  } },
        // { name: 'City Center', coords: { lat: , lng:  } },

        { name: "El-Robaiky", coords: { lat: 30.17218, lng: 31.75304 } },
        {
          name: "Hadayek El-Assema",
          coords: { lat: 30.13826, lng: 31.80682 },
        },
        {
          name: "Capital Airport",
          coords: { lat: 30.07661, lng: 31.78254 },
        },
        {
          name: "Arts and Culture City",
          coords: { lat: 30.01689, lng: 31.72426 },
        },

        // more unopened stations
        // { name: 'Nativity Cathedral', coords: { lat: , lng:  } },
        // { name: 'Octagon', coords: { lat: , lng:  } },
        // { name: 'International Sport City', coords: { lat: , lng:  } },
        // { name: 'Central Capital', coords: { lat: , lng:  } },
      ],
    },
  ];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    // get coordinates for each station
    var lineCoords = line.stations.map(function (station) {
      return station.coords;
    });
    // draw line on map
    var metroLine = new google.maps.Polyline({
      path: lineCoords,
      geodesic: true,
      strokeColor: line.color,
      strokeOpacity: 1.0,
      strokeWeight: 4,
    });
    metroLine.setMap(map);
  }

  // add markers and info windows for each station
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
          strokeColor: "#fff",
          strokeWeight: 1,
          scale: 8,
        },
      });

      (function (marker, station) {
        var infoWindow = new google.maps.InfoWindow({
          content: station.name,
        });

        marker.addListener("click", function () {
          infoWindow.open(map, marker);
        });
      })(marker, station);
    }
  }
  // initialize realtime database and get a reference to the service
  const database = getDatabase(app);
  // create a firebase database reference to the "markers" node
  var markersRef = ref(database, "markers");

  // add event listener for dropping pins
  google.maps.event.addListener(map, "click", function (event) {
    var marker = new google.maps.Marker({
      position: event.latLng,
      map: map,
      draggable: true,
    });
    var infowindow = new google.maps.InfoWindow({
      content:
        '<input type="text" placeholder="Tell us about a little anecdote!" id="label" /> <br><br> <button id="savebtn" onclick="saveMarker()">Save</button>',
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, "dragend", function () {
      var pos = marker.getPosition();
      infowindow.setContent(
        '<input type="text" placeholder="Tell us about a little anecdote!" id="label" /> <br><br> <button id="savebtn" onclick="saveMarker()">Save</button>'
      );
      infowindow.setPosition(pos);
      infowindow.open(map, marker);
    });
    window.saveMarker = function () {
      var label = document.getElementById("label").value;
      if (label !== "") {
        marker.setDraggable(false);
        marker.setTitle(label);

        // save marker to Firebase database
        const markersListRef = ref(database, "markers");
        const newMarkerRef = push(markersListRef);
        set(newMarkerRef, {
          label: label,
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng(),
        });

        infowindow.close();
      }
    };
  });

  // retrieve all markers from the database and display them on the map
  onValue(markersRef, function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      var marker = new google.maps.Marker({
        position: { lat: childData.lat, lng: childData.lng },
        map: map,
        title: childData.label,
        draggable: false,
      });
      
      // create and open an info window with the label as its content when the marker is clicked
       marker.addListener("click", function () {
        var infoWindow = new google.maps.InfoWindow({
          content: childData.label,
        });
        infoWindow.open(map, marker);
      });
    });
  });
  
}

window.initMap = initMap;