$(window).scroll(function () {
	if ($(window).width() >= 601) {
		$(window).scroll(function () {
		    $(".home-head").css("background-position","top "+($(this).scrollTop() / 2) +"px right 50%");
		});
	} else {
    	$(".home-head").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
    }
});

