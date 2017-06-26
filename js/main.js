$(document).ready(function () {
    $(window).scrollTop(0);
    
    $("#navLogo").hide();
    
    $('#jumbotron').css({opacity : 0});
    $('#jumbotron').animate({'opacity': 1}, 2800);
    
    $(".productDiv .leftDiv").css({'height':($(".productDiv .container").height()+'px')});
    $(".productDiv .rightDiv").css({'height':($(".productDiv .container").height()+'px')});
    
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
        if ($( window ).width() > 767){
            $('html, body').animate({
			scrollTop: $('.welcome').offset().top + 30
		  }, 'slow');
        } else {
            $('html, body').animate({
			scrollTop: $('.welcome h2').offset().top - 115
		  }, 'slow');
        }
	});
    
    $('#productDivBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.productDiv h1').offset().top - 115
		}, 'slow');
	});
    
    $('#contactDivBtn').click(function () {
		$('html, body').animate({
			scrollTop: $('.contactDiv h1').offset().top - 115
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
    
    $('#welcome h2').css({opacity : 0});
    $('#welcome p').css({opacity : 0});
    
    $(window).on("scroll", function() {
        if ($("#myTopnav").hasClass("responsive")) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
            $(".navWrapper img").show();
        } else if ($(window).scrollTop() > $(window).height()) {
            $(".navWrapper").addClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
            $("#navLogo").show();
        } else if ($(window).scrollTop() > ($(window).height() * 0.8)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").addClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
            $("#navLogo").hide();
            $('#welcome h2').animate({ opacity: 1 }, { duration: 1200 });
            $('#welcome p').animate({ opacity: 1 }, { duration: 1200 });
        } else if ($(window).scrollTop() > ($(window).height() * 0.5)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").addClass("headeractive30");
            $("#navLogo").hide();
        } else {
           $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
            $("#navLogo").hide();
        }
    });
    
    $('.icon').click(function() {
        if($("#myTopnav").hasClass("responsive")){
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
            $(".navWrapper img").show();
        } else if($(window).scrollTop() > $(window).height()) {
            $(".navWrapper").addClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
        } else if ($(window).scrollTop() > ($(window).height() * 0.8)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").addClass("headeractive20");
            $(".navWrapper").removeClass("headeractive30");
            $(".navWrapper img").hide();
        } else if ($(window).scrollTop() > ($(window).height() * 0.5)) {
            $(".navWrapper").removeClass("headeractive");
            $(".navWrapper").removeClass("headeractive20");
            $(".navWrapper").addClass("headeractive30");
            $(".navWrapper img").hide();
        } else {
            $(".navWrapper img").hide();
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