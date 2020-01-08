/*start-result-page-progress-bar*/
$(document).ready(function() {
  var total = 0;
$(".metar-inner").each(function() {  
  var $bar = $(this).find(".bar");
  var $bar1 = $(this).find(".baseBarLine");
  var $val = $(this).find("span");
  var $val1 = $(this).find("span#baseLineVal");
  var perc = parseInt( $val.text())* 10;
  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
	  
	  $bar1.css({
        transform: "rotate("+ (45+(total*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
	  var val = p/10;	  
      $val.text(val|0);
	  $val1.text(total|0);
    }
  });
  total = parseInt( $val.text()) + parseInt(total);
});
/*end-result-page-progress-bar*/
    
    
	//Set the carousel options
	$('#quote-carousel').carousel({
		pause: true,
		interval: 4000,
	});

	/**
	 * This object controls the nav bar. Implement the add and remove
	 * action over the elements of the nav bar that we want to change.
	 *
	 * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
	 */
	var myNavBar = {
		flagAdd: true,
		elements: [],
		init: function(elements) {
			this.elements = elements;
		},
		add: function() {
			if (this.flagAdd) {
				for (var i = 0; i < this.elements.length; i++) {
					document.getElementById(this.elements[i]).className += " fixed-theme";
				}
				this.flagAdd = false;
			}
		},

		remove: function() {
			for (var i = 0; i < this.elements.length; i++) {
				document.getElementById(this.elements[i]).className =
					document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
			}
			this.flagAdd = true;
		}
	};

	/**
	 * Init the object. Pass the object the array of elements
	 * that we want to change when the scroll goes down
	 */
	myNavBar.init([
		"header",
		"header-container"
	]);

	/**
	 * bind to the document scroll detection
	 */
	window.onscroll = function(e) {
		offSetManager();
	}
	
	/**
	 * Function that manage the direction
	 * of the scroll
	 */
	function offSetManager() {
		var yOffset = 0;
		var currYOffSet = window.pageYOffset;

		if (yOffset < currYOffSet) {
			myNavBar.add();
		} else if (currYOffSet == yOffset) {
				myNavBar.remove();
			}
	}

	/**
	 * We have to do a first detectation of offset because the page
	 * could be load with scroll down set.
	 */
	offSetManager();

	 
	
	$(".albery-container").albery({
		speed: 500,
		imgWidth: 657,
	});
	
	// tabbed content
	// http://www.entheosweb.com/tutorials/css/tabs.asp
	$(".tab_content").hide();
	$(".tab_content:first").show();
	
	$('.d_active').find('.plus-icon').hide();
	$('.d_active').find('.plus-icon1').show();
	
	/* if in tab mode */
	$("ul.tabs li").click(function() {
		$('.plus-icon').show();
		$('.plus-icon1').hide();
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();

		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");

		$(".tab_drawer_heading").removeClass("d_active");
		$(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
		$('.d_active').find('.plus-icon').hide();
		$('.d_active').find('.plus-icon1').show();
	});
	
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
		$('.plus-icon').show();
		$('.plus-icon1').hide();
		$(".tab_content").hide();
		var d_activeTab = $(this).attr("rel");
		$("#" + d_activeTab).fadeIn();

		$(".tab_drawer_heading").removeClass("d_active");
		$(this).addClass("d_active");
		
		$('.d_active').find('.plus-icon').hide();
		$('.d_active').find('.plus-icon1').show();
		$("ul.tabs li").removeClass("active");
		$("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
	});

	/* Extra class "tab_last" 
	to add border to right side
	of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	
});


/*----start-accordion-----*/
$(document).ready(function() {
  /*$(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-right");
    } else {
      $(".set > a i")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-right");
      $(this)
        .find("i")
        .removeClass("fa-angle-right")
        .addClass("fa-angle-down");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });*/
    
$(".setProd a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".setProd a i")
        .removeClass("glyphicon-chevron-down")
        .addClass("glyphicon-chevron-right");
    } else {
      $(".setProd a i")
        .removeClass("glyphicon-chevron-down")
        .addClass("glyphicon-chevron-right");
      $(this)
        .find("i")
        .removeClass("glyphicon-chevron-right")
        .addClass("glyphicon-chevron-down");
      $(".setProd a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
    
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
	
	//Products page
	$('.panel-groupFirst').on('hidden.bs.collapse', toggleIcon);
    $('.panel-groupFirst').on('shown.bs.collapse', toggleIcon);
	
	$('.panel-groupSecond').on('hidden.bs.collapse', toggleIcon);
    $('.panel-groupSecond').on('shown.bs.collapse', toggleIcon);
	
	$('.panel-groupThird').on('hidden.bs.collapse', toggleIcon);
    $('.panel-groupThird').on('shown.bs.collapse', toggleIcon);
	
	$('.panel-groupFourth').on('hidden.bs.collapse', toggleIcon);
    $('.panel-groupFourth').on('shown.bs.collapse', toggleIcon);
});
/*----end-accordion-----*/

/*----start-faq-accordion-----*/

function test(key) {
    
}
function toggleIcon(e) {
	$(e.target)
        .prev('.left-tab-row')
        .find(".fa-angle")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');    
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less1")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less22")
        .toggleClass('glyphicon-plus glyphicon-minus');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less2")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less-faq")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less-faq1")
        .toggleClass('fa-angle-right fa-angle-down');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less-faq2")
        .toggleClass('fa-angle-right fa-angle-down');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less-icon")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less-formula")
        .toggleClass('glyphicon-plus glyphicon-minus');
	$(e.target)
        .prev('.panel-heading')
        .find(".more-less-product-mob")
        .toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
		
}
   
/*----end-faq-accordion-----*/
/*----start-nav-addclass-----*/
$(function() {
  $('.main-menu-inner a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active-nav');
    if ( window.location.pathname == '/' ){
      $('.main-menu-inner a').removeClass('active-nav');
      $('#firstmanu').addClass('active-nav');
    }
});
/*----END-nav-addclass-----*/

/*----START-INGREDIENT-FIX-LEFTBAR-----*/
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("#ingredient-bluestrip").offset().top;
    var div_top = $('#sticky-anchor').offset().top;
    var div_height = $('.left-tab-row').height();
    
    var padding = 120;  // tweak here or get from margins etc
    
    if (window_top + div_height > footer_top - padding)
        $('.left-tab-row').css({top: (window_top + div_height - footer_top + padding) * -1})
    else if (window_top > div_top) {
        $('.left-tab-row').addClass('stick');
        $('.left-tab-row').css({top: 0})
    } else {
        $('.left-tab-row').removeClass('stick');
    }
}

$(function () {
	if("ingredient" == location.pathname.split("/")[1]) {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	}
});
/*----END-INGREDIENT-FIX-LEFTBAR-----*/

$('document').ready(function(){
    $('.readmore').click(function(){
       $('.mob-tab-racetams').slideToggle('');
    });
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".topscroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function() {
    $("#rotateIcon1").click(function(){
        $("#iRotateIcon1").toggleClass("down");
    });

    $("#rotateIcon2").click(function(){
        $("#iRotateIcon2").toggleClass("down");
    });

    $("#rotateIcon3").click(function(){
        $("#iRotateIcon3").toggleClass("down");
    });

    /* $('.navbar-toggle').click(function(){
	  $(this).toggleClass('active');
	}); */

   /* $("button.active").click(function () {
		console.log('here ', $("#wrapper").hasClass("in"));
		if($(this).hasClass("active")) {
			$(this).addClass("active");
		} else {
				$(this).removeClass("active");
			//}
	}); */
});

// add active class on click on buton
$(document).on('mouseup touchstart', function (e) {
	var clickover = $(e.target);
	var _opened = $("#wrapper").hasClass("collapse in");
	//alert('Testing in progess')
	if (_opened === true && !clickover.hasClass("navbar-toggle")) {
		$("button.navbar-toggle").click();
	}
});

/*$(document).ready(function(){
  $(".navbar-toggle").click(function(){
    $(this).toggleClass("active");
  });
}); */

/* $(document).click(function(e) {
    var container = $(".toggled");

	console.log("called 1> ", e.target);
	
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
		//$("#wrapper").toggleClass('toggled');
		$('#menu-toggle-rl').toggleClass('active');
		console.log('called');
    }
}); */


/*--start-product-page-click-review--*/
$(document).ready(function(){
    $("#reviews-inner").click(function(){
        $(".tab_last").click()
    });
});
/*--end-product-page-click-review--*/