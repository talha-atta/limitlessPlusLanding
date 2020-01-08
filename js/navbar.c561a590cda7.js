var lastPercent = 0
function sendScrollData(percent) {
	if (typeof thisPage === 'undefined') {
		thisPage = "Unknown"
	}

	action = thisPage.concat(" Scroll")
	

}

function sendButtonClick(g_label, g_action) {
	if (typeof thisPage === 'undefined') {
		thisPage = "Unknown"
	}

    if (g_action == "start") {
        g_category = "quiz"
    }
    else {
        g_category = "site"
    }
    data_layer_tag = g_category.concat("_").concat(g_action).toLowerCase()
    data_to_push = {
      'event_category': g_category,
      'event_action': g_action,
      'event_label': g_label,
      'event': data_layer_tag
    }
    data_to_push[data_layer_tag] = g_label

    dataLayer.push(
      data_to_push
    );

	action = thisPage.concat(" Button Click")
    btn = g_label.concat(" ").concat(g_action)
	sendEvent(action, btn)
}


function testScroll(ev){
	var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

	  var scrollPercent = Math.round((s / (d - c)) * 100);
	  if (scrollPercent % 10 == 0 && lastPercent != scrollPercent) {
	  	//sendScrollData(scrollPercent);	
	  	lastPercent = scrollPercent;
	  }
    if(window.pageYOffset>10) {
        $("#navbar-id").removeClass("navbar-init-abs");
        $("#navbar-id").addClass("navbar-after-fixed");

        $("#promoblob").removeClass("promoblobbig");
        $("#promoblob").addClass("promoblobsmall");
    }
    else {
        $("#navbar-id").addClass("navbar-init-abs");
        $("#navbar-id").removeClass("navbar-after-fixed");  

         $("#promoblob").removeClass("promoblobsmall");
         $("#promoblob").addClass("promoblobbig"); 
    }
}
window.onscroll=testScroll
