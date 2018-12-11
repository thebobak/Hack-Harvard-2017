$(document).ready(function(){

var $carouselCaption = $(".carousel-caption");
var $carimg = $(".carouselimg");
var $square1 = $(".g1");
var $square3 = $(".g3");
var $square4 = $(".g4");
var $square5 = $(".g5");
var $square6 = $(".g6");
var $square7 = $(".g7");
var $square8 = $(".g8");
var $square9 = $(".g9");
var $square10 = $(".g10");
var $square11 = $(".g11");
var $square12 = $(".g12");
var $square13 = $(".g13");
var $square14 = $(".g14");
var $square15 = $(".g15");
var $square16 = $(".g16");
var $square17 = $(".g17");
var $square18 = $(".g18");
var $square19 = $(".g19");
var $square20 = $(".g20");
var $square21 = $(".g21");
var $square22 = $(".g22");
var $img1 = $("#img1");
var $img3 = $("#img3");
var $img4 = $("#img4");
var $img5 = $("#img5");
var $img6 = $("#img6");
var $img7 = $("#img7");
var $img8 = $("#img8");
var $img9 = $("#img9");
var $img10 = $("#img10");
var $img11 = $("#img11");
var $img12 = $("#img12");
var $img13 = $("#img13");
var $img14 = $("#img14");
var $img15 = $("#img15");
var $img16 = $("#img16");
var $img17 = $("#img17");
var $img18 = $("#img18");
var $img19 = $("#img19");
var $img20 = $("#img20");
var $img21 = $("#img21");
var $img22 = $("#img22");

var $showmore = $(".pmore");
var $hiddens = $(".showm");

var $call = $("#call");
var innerCe = $(".gridcontainer").innerWidth();

$call.css("height", innerCe*.5625);

$(window).resize(function(){
	var innerC = $(".gridcontainer").innerWidth();
	$call.css("height", innerC*.5625);
})

$carouselCaption.mouseenter(function() {
$carimg.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$carouselCaption.mouseleave(function() {
$carimg.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square1.mouseenter(function() {
$img1.css({"opacity": "0.5", "-moz-transform": "scale(1.06)", "-webkit-transform": "scale(1.06)", "-ms-transform": "scale(1.06)" });
});

$square1.mouseleave(function() {
$img1.css({"opacity": "1.0", "-moz-transform": "scale(1.00)", "-webkit-transform": "scale(1.00)", "-ms-transform": "scale(1.00)"});
});

$square3.mouseenter(function() {
$img3.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square3.mouseleave(function() {
$img3.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square4.mouseenter(function() {
$img4.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square4.mouseleave(function() {
$img4.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square5.mouseenter(function() {
$img5.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square5.mouseleave(function() {
$img5.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square6.mouseenter(function() {
$img6.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square6.mouseleave(function() {
$img6.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square7.mouseenter(function() {
$img7.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square7.mouseleave(function() {
$img7.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square8.mouseenter(function() {
$img8.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square8.mouseleave(function() {
$img8.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square9.mouseenter(function() {
$img9.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square9.mouseleave(function() {
$img9.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square10.mouseenter(function() {
$img10.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square10.mouseleave(function() {
$img10.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square11.mouseenter(function() {
$img11.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square11.mouseleave(function() {
$img11.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square12.mouseenter(function() {
$img12.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square12.mouseleave(function() {
$img12.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square13.mouseenter(function() {
$img13.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square13.mouseleave(function() {
$img13.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square14.mouseenter(function() {
$img14.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square14.mouseleave(function() {
$img14.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square15.mouseenter(function() {
$img15.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square15.mouseleave(function() {
$img15.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square16.mouseenter(function() {
$img16.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square16.mouseleave(function() {
$img16.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square17.mouseenter(function() {
$img17.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square17.mouseleave(function() {
$img17.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square18.mouseenter(function() {
$img18.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square18.mouseleave(function() {
$img18.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square19.mouseenter(function() {
$img19.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square19.mouseleave(function() {
$img19.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square20.mouseenter(function() {
$img20.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square20.mouseleave(function() {
$img20.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square21.mouseenter(function() {
$img21.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square21.mouseleave(function() {
$img21.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$square22.mouseenter(function() {
$img22.css({"opacity": "0.5", "transform": "scale(1.06)"});
});

$square22.mouseleave(function() {
$img22.css({"opacity": "1.0", "transform": "scale(1.00)"});
});

$showmore.click(function(){
$hiddens.fadeIn(1000);
$(".more").fadeOut(200);
})

});
