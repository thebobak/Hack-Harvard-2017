$(document).ready(function(){

var $video = $(".aboutvideo");
var $biohovk = $(".biohovk");
var $biohovt = $(".biohovt");
var $biohovd = $(".biohovd");
var $biohovg = $(".biohovg");
var $biohovc = $(".biohovc");
var $biohovf = $(".biohovf");
var $biohove = $(".biohove");
var $biohovj = $(".biohovj");
var $biohovv = $(".biohovv");
var $biohovk = $(".biohovk");

var $kavita = $(".kavita");
var $tim = $(".tim");
var $dhyan = $(".dhyan");
var $kavita = $(".kavita");
var $tim = $(".tim");
var $george = $(".george");
var $chris = $(".chris");
var $fred = $(".fred");
var $emma = $(".emma");
var $james = $(".james");
var $vyvienne = $(".vyvienne");
var $kevin = $(".kevin");

var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}


$biohovk.mouseover(function(){
	$kavita.css("transform", "scale(1.17)");
})

$biohovk.mouseout(function(){
	$kavita.css("transform", "scale(1.0)");
})

$biohovt.mouseover(function(){
	$tim.css("transform", "scale(1.17)");
})

$biohovt.mouseout(function(){
	$tim.css("transform", "scale(1.0)");
})

$biohovd.mouseover(function(){
	$dhyan.css("transform", "scale(1.17)");
})

$biohovd.mouseout(function(){
	$dhyan.css("transform", "scale(1.0)");
})

$biohovg.mouseover(function(){
  $george.css("transform", "scale(1.17)");
})

$biohovg.mouseout(function(){
  $george.css("transform", "scale(1.0)");
})

$biohovc.mouseover(function(){
  $chris.css("transform", "scale(1.17)");
})

$biohovc.mouseout(function(){
  $chris.css("transform", "scale(1.0)");
})

$biohovf.mouseover(function(){
  $fred.css("transform", "scale(1.17)");
})

$biohovf.mouseout(function(){
  $fred.css("transform", "scale(1.0)");
})

$biohove.mouseover(function(){
  $emma.css("transform", "scale(1.17)");
})

$biohove.mouseout(function(){
  $emma.css("transform", "scale(1.0)");
})

$biohovj.mouseover(function(){
  $james.css("transform", "scale(1.17)");
})

$biohovj.mouseout(function(){
  $james.css("transform", "scale(1.0)");
})

$biohovv.mouseover(function(){
  $vyvienne.css("transform", "scale(1.17)");
})

$biohovv.mouseout(function(){
  $vyvienne.css("transform", "scale(1.0)");
})

$biohovk.mouseover(function(){
  $kevin.css("transform", "scale(1.17)");
})

$biohovk.mouseout(function(){
  $kevin.css("transform", "scale(1.0)");
})












var widthStart = $(window).innerWidth();
$video.css("height", (widthStart*.5625));

$(window).resize(function(){
	var width = $(window).innerWidth();
	$video.css("height", (width*.5625));
})

$('.watchvid').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});






});