$(document).ready(function(){

// Resize Map

var width = $(window).innerWidth();
$("#googleMap").css("height", width*.5625);

$(window).resize(function(){
	var width = $(window).innerWidth();
	$("#googleMap").css("height", width*.5625);
});

// Map Variables

var bankstown=new google.maps.LatLng(42.3774286,-71.1307125);

var locations = [
      ['Puff', 42.382616,-71.1276707, 18],
      ['Neiko', 42.387118,-71.1100757, 17],
      ['Griff', 42.38096,-71.1088837, 16],
      ['Ferruccio', 42.375006, -71.0910887, 15],
      ['Clementine', 42.386367, -71.1070777, 14],
      ['Churchill', -33.919098,151.031545, 13],
      ['pet', -33.9186035,151.031194, 12],
      ['pet', -33.917857,151.034384, 11],
      ['pet', -33.919757,151.031267, 10],
      ['pet', -33.9179715,151.0336998, 9],
      ['pet', -33.922032,151.037845, 8],
      ['pet', -33.9178765,151.0392744, 7],
      ['pet', -33.913179,151.032556, 6],
      ['pet', -33.9166147,151.0380159,17],
      ['pet', -33.764191,150.911529, 4],
      ['pet', -33.914945,151.03476, 3],
      ['pet', -33.877649,150.986159, 2],
      ['pet', -33.919373,151.035949, 1],
      ['pet', -33.921505,151.0319167, 17],
			['pet', -33.918126,151.03095, 19],
			['pet', -33.76785,150.8137313, 15],
			['pet', -33.918245,151.033423, 19],
			['pet', -33.918401,151.031202, 19]
    ];

var image = ["'logo1.png'", "'images/wide/glamour1.jpg'", "'logo1.pgn'", "'images/wide/glamour1.jpg'", "'logo1.pgn'"];

var contentString = [
 '<div class="mapContainer">'+'<img class="pics" src="../images/puff.jpg">'+'<h1 class="mapTitle"><a class="black" href="puff.html">Puff</a></h1>'+'<span class="time_left">6 days left</span>'+'<p>Puff is a gentleman who would love to spend the day hanging by your side! His vision isnt great, but that doesnt mean he wont see how much you love him! ...</p>'+'</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/neiko.jpg">'+'<h1 class="mapTitle"><a class="black" href="neiko.html">Neiko</a></h1>'+'<span class="time_left">14 days left</span>'+'<p>Neiko is sweeter than nectar. This playful dog loves his naptime but also enjoys short burts of activities. If you\'re looking for a laid back buddy, neiko is your pal! ...</p>'+'</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/griff.jpg">'+'<h1 class="mapTitle"><a class="black" href="griff.html">Griff</a></h1>'+'<span class="time_left">3 days left</span>'+'<p>This little guy may not be an ideal jogging partner, but he may be your new BFF! He\'d appreciate a cozy place to sleep and a family who understands him...</p>'+'</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/ferruccio.jpg">'+'<h1 class="mapTitle"><a class="black" href="ferruccio.html">Ferruccio</a></h1>'+'<span class="time_left">21 days left</span>'+'<p>Ferrucio\'s eyes hold the secret to the universe! This lad may be a senior, but he sure has spirit! If you\'re looking for a laid back kitty, Bingo\'s your gal!</p>'+'</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/bingo.jpg">'+'<h1 class="mapTitle"><a class="black" href="bingo.html">Bingo</a></h1>'+'<span class="time_left">9 days left</span>'+'<p>Bingo\'s eyes hold the secret to the universe! This lady may be a senior, but she sure has spirit! She loves her naptime, but walk by her with food and she\'s sure to perk right up. If you\'re looking for a laid back kitty, Bingo\'s your gal!</p>'+'</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/dilemma.jpg">'+'<h1 class="mapTitle"><a class="black" href="dilemma.html">VIETNAMESE SHOPS</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/poem.jpg">'+'<h1 class="mapTitle"><a class="black" href="poem-for-a-film.html">BANKSTOWN ARTS CENTER</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/transition.png">'+'<h1 class="mapTitle"><a class="black" href="transition-zones.html">BANKSTOWN RAILWAY STATION</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/palestine.jpg">'+'<h1 class="mapTitle"><a class="black" href="timeinpalestine.html">EL BAHSA &amp; SONS SWEETS</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/saigon.png">'+'<h1 class="mapTitle"><a class="black" href="paradise-found.html">SAIGON PLACE</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/murray1.jpg">'+'<h1 class="mapTitle"><a class="black" href="sierraleonerefugee.html">PERCY STREET</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/jasmine.jpg">'+'<h1 class="mapTitle"><a class="black" href="jasminebakery.html">JASMINE &amp; SINBAD BAKERY</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/benny.jpg">'+'<h1 class="mapTitle"><a class="black" href="bennyhiphop.html">HYBRID FORMZ ACADEMY</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/designer1.jpg">'+'<h1 class="mapTitle"><a class="black" href="islamicfashion.html">BANKSTOWN CENTRAL</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/blacktown.jpg">'+'<h1 class="mapTitle"><a class="black" href="puff.html">BLACKTOWN AFGHAN MOSQUE</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/banktown.jpg">'+'<h1 class="mapTitle"><a class="black" href="bankstownpoetryslam.html">KHALIL GIBRAN STATUE</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/villawood.jpg">'+'<h1 class="mapTitle"><a class="black" href="villawood.html">THREE WAVES OF VILLAWOOD</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/glamours.jpg">'+'<h1 class="mapTitle"><a class="black" href="theglamoursisters.html">RAYMOND STREET</a></h1>'+
      '</div>',

      '<div class="mapContainer">'+'<img class="pics" src="../images/domestic.jpg">'+'<h1 class="mapTitle"><a class="black" href="domesticviolence.html">BANKSTOWN PUBLIC SCHOOL</a></h1>'+
      '</div>',

			'<div class="mapContainer">'+'<img class="pics" src="../images/grid/4e.jpg">'+'<h1 class="mapTitle"><a class="black" href="4e.html">HIP HOP IN THE BURBS</a></h1>'+
      '</div>',

			'<div class="mapContainer">'+'<img class="pics" src="../images/grid/struggle1.jpg">'+'<h1 class="mapTitle"><a class="black" href="4e.html">STRUGGLE STREET REVIEW</a></h1>'+
      '</div>',

			'<div class="mapContainer">'+'<img class="pics" src="../images/grid/neighbours1.jpg">'+'<h1 class="mapTitle"><a class="black" href="neighbours.html">PEOPLE THAT YOU MEET IN THE NEIGHBOURHOOD</a></h1>'+
      '</div>',

			'<div id="iw-container">'+'<div class="mapContainer">'+'<img class="pics" src="../images/grid/kyf2.jpg">'+'<h1 class="mapTitle"><a class="black" href="kyf.html">KOORI YOUTH FORUM</a></h1>'+
      '</div>'+'</div>',
   ]

var infowindow = new google.maps.InfoWindow({

});
var marker = [];
var i;

// start ex



// end ex




//Initialize function

function initialize() {

// Styles

var styles = [
    {

    }
  ];

// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

var mapProp = {
  center:bankstown,
  zoom:13,
  disableDefaultUI:true,
  zoomControl:true,
  zoomControlOptions: {
  style:google.maps.ZoomControlStyle.LARGE,
  position:google.maps.ControlPosition.TOP_RIGHT},
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');

// start here


// end here

for (i = 0; i < locations.length; i++) {
	marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    icon:"../images/logos/marker.png",
    animation: google.maps.Animation.Drop,
    });

    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
    return function() {
    infowindow.setContent(contentString[i]);
    infowindow.open(map, marker);
    }
    })(marker, i));
    };

}


google.maps.event.addDomListener(window, 'load', initialize);

});
