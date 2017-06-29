$(document).ready(function () {
    $(window).scrollTop(0);
    
    $(".contactFormDiv").css({'zoom': $(window).width()*0.0008});
    
    $( window ).resize(function() {
        if ($(window).width() > 1250) {
            $(".contactFormDiv").css({'zoom': $(window).width()*0.0008});
        } else {
            $(".contactFormDiv").css({'zoom': 1 });
        }
    });
    
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
    var el = document.getElementById("beveragesIcon");
    fadeIn(el);
}

function hideBeverages() {
    var ela = document.getElementById("beveragesIcon");
    fadeOut(ela);
}

function showCannedFood() {
    var el2 = document.getElementById("cannedfoodIcon");
    fadeIn2(el2);
}

function hideCannedFood() {
    var el2a = document.getElementById("cannedfoodIcon");
    fadeOut2(el2a);
}

function showDesserts() {
    var el3 = document.getElementById("dessertsIcon");
    fadeIn3(el3);
}

function hideDesserts() {
    var el3a = document.getElementById("dessertsIcon");
    fadeOut3(el3a);
}

function showSnacks() {
    var el4 = document.getElementById("snacksIcon");
    fadeIn4(el4);
}

function hideSnacks() {
    var el4a = document.getElementById("snacksIcon");
    fadeOut4(el4a);
}

function showFruits() {
    var el5 = document.getElementById("fruitsIcon");
    fadeIn5(el5);
}

function hideFruits() {
    var el5a = document.getElementById("fruitsIcon");
    fadeOut5(el5a);
}

function showSeafood() {
    var el6 = document.getElementById("seafoodIcon");
    fadeIn6(el6);
}

function hideSeafood() {
    var el6a = document.getElementById("seafoodIcon");
    fadeOut6(el6a);
}

function showCommodities() {
    var el7 = document.getElementById("commoditiesIcon");
    fadeIn7(el7);
}

function hideCommodities() {
    var el7a = document.getElementById("commoditiesIcon");
    fadeOut7(el7a);
}

function showPromos() {
    var el8 = document.getElementById("promotionsIcon");
    fadeIn8(el8);
}

function hidePromos() {
    var el8a = document.getElementById("promotionsIcon");
    fadeOut8(el8a);
}

function fadeIn(el) {
  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.05;

    if (+el.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el); }, 3);
    }
  };

  tick();
}

function fadeOut(ela) {
var tick2 = function() {
    ela.style.opacity = +ela.style.opacity - 0.05;

    if (+ela.style.opacity > 0) {
      setTimeout(function(){ fadeOut(ela); }, 3);
    }
  };

  tick2();
}

function fadeIn2(el2) {
  var tick = function() {
    el2.style.opacity = +el2.style.opacity + 0.05;

    if (+el2.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el2); }, 3);
    }
  };

  tick();
}

function fadeOut2(el2a) {
var tick2 = function() {
    el2a.style.opacity = +el2a.style.opacity - 0.05;

    if (+el2a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el2a); }, 3);
    }
  };

  tick2();
}

function fadeIn3(el3) {
  var tick = function() {
    el3.style.opacity = +el3.style.opacity + 0.05;

    if (+el3.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el3); }, 3);
    }
  };

  tick();
}

function fadeOut3(el3a) {
var tick2 = function() {
    el3a.style.opacity = +el3a.style.opacity - 0.05;

    if (+el3a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el3a); }, 3);
    }
  };

  tick2();
}

function fadeIn4(el4) {
  var tick = function() {
    el4.style.opacity = +el4.style.opacity + 0.05;

    if (+el4.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el4); }, 3);
    }
  };

  tick();
}

function fadeOut4(el4a) {
var tick2 = function() {
    el4a.style.opacity = +el4a.style.opacity - 0.05;

    if (+el4a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el4a); }, 3);
    }
  };

  tick2();
}

function fadeIn5(el5) {
  var tick = function() {
    el5.style.opacity = +el5.style.opacity + 0.05;

    if (+el5.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el5); }, 3);
    }
  };

  tick();
}

function fadeOut5(el5a) {
var tick2 = function() {
    el5a.style.opacity = +el5a.style.opacity - 0.05;

    if (+el5a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el5a); }, 3);
    }
  };

  tick2();
}

function fadeIn6(el6) {
  var tick = function() {
    el6.style.opacity = +el6.style.opacity + 0.05;

    if (+el6.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el6); }, 3);
    }
  };

  tick();
}

function fadeOut6(el6a) {
var tick2 = function() {
    el6a.style.opacity = +el6a.style.opacity - 0.05;

    if (+el6a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el6a); }, 3);
    }
  };

  tick2();
}

function fadeIn7(el7) {
  var tick = function() {
    el7.style.opacity = +el7.style.opacity + 0.05;

    if (+el7.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el7); }, 3);
    }
  };

  tick();
}

function fadeOut7(el7a) {
var tick2 = function() {
    el7a.style.opacity = +el7a.style.opacity - 0.05;

    if (+el7a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el7a); }, 3);
    }
  };

  tick2();
}

function fadeIn8(el8) {
  var tick = function() {
    el8.style.opacity = +el8.style.opacity + 0.05;

    if (+el8.style.opacity < 1) {
      setTimeout(function(){ fadeIn(el8); }, 3);
    }
  };

  tick();
}

function fadeOut8(el8a) {
var tick2 = function() {
    el8a.style.opacity = +el8a.style.opacity - 0.05;

    if (+el8a.style.opacity > 0) {
      setTimeout(function(){ fadeOut(el8a); }, 3);
    }
  };

  tick2();
}