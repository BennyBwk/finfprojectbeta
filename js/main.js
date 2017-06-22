$(document).ready(function () {
	var offset = 0
    var offsetabout = 300;
	
	$('#ParentContainer').scroll(function() { 
		$('#draggable3').css('top', $(this).scrollTop());
	});
	
	$('#homeBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.jumbotron').offset().top
		}, 'slow');
	});
    
    $('#jumbotronBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.jumbotron').offset().top
		}, 'slow');
	});
    
    $('#welcomeBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.welcome').offset().top + offsetabout
		}, 'slow');
	});
    
    $('#productDivBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.productDiv').offset().top
		}, 'slow');
	});
    
    $('#contactDivBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.contactDiv').offset().top 
		}, 'slow');
	});
    
    $('.topnav a').click(function() {
        if (!$(this).hasClass("icon")) {
            var x = document.getElementById("myTopnav");
            var y = document.getElementById("draggable3");
            x.className = "topnav";
            y.className -= " noshow";
        }
    });
    
    $(window).on("scroll", function() {
        if($("#myTopnav").hasClass("responsive")){
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if($(window).scrollTop() > $(window).height()) {
            $(".navWrapper").addClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if ($(window).scrollTop() > ($(window).height() * 0.8)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").addClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if ($(window).scrollTop() > ($(window).height() * 0.5)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").addClass("headeractive30");
        } else {
           $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        }
    });
    
    $('.icon').click(function() {
        if($("#myTopnav").hasClass("responsive")){
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if($(window).scrollTop() > $(window).height()) {
            $(".navWrapper").addClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if ($(window).scrollTop() > ($(window).height() * 0.8)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").addClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if ($(window).scrollTop() > ($(window).height() * 0.5)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").addClass("headeractive30");
        }
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("draggable3");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " noshow";
    } else {
        x.className = "topnav";
        y.className -= " noshow";
    }
}