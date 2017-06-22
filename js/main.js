$(document).ready(function () {
	var offset = 0
	
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
			scrollTop: $('.welcome h2').offset().top - 112
		}, 'slow');
	});
    
    $('#productDivBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.productDiv h1').offset().top - 112
		}, 'slow');
	});
    
    $('#contactDivBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.contactDiv h1').offset().top - 112
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

function showBeverages() {
    document.getElementById("beveragesIcon").style.display = "block";
}

function hideBeverages() {
    document.getElementById("beveragesIcon").style.display = "none";
}

function showCannedFood() {
    document.getElementById("cannedfoodIcon").style.display = "block";
}

function hideCannedFood() {
    document.getElementById("cannedfoodIcon").style.display = "none";
}

function showDesserts() {
    document.getElementById("dessertsIcon").style.display = "block";
}

function hideDesserts() {
    document.getElementById("dessertsIcon").style.display = "none";
}

function showSnacks() {
    document.getElementById("snacksIcon").style.display = "block";
}

function hideSnacks() {
    document.getElementById("snacksIcon").style.display = "none";
}





function showFruits() {
    document.getElementById("fruitsIcon").style.display = "block";
}

function hideFruits() {
    document.getElementById("fruitsIcon").style.display = "none";
}

function showSeafood() {
    document.getElementById("seafoodIcon").style.display = "block";
}

function hideSeafood() {
    document.getElementById("seafoodIcon").style.display = "none";
}

function showCommodities() {
    document.getElementById("commoditiesIcon").style.display = "block";
}

function hideCommodities() {
    document.getElementById("commoditiesIcon").style.display = "none";
}

function showPromos() {
    document.getElementById("promotionsIcon").style.display = "block";
}

function hidePromos() {
    document.getElementById("promotionsIcon").style.display = "none";
}