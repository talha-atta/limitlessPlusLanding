(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      $('.corporate-jumbo').css({
        'background-position': '0px -'+(top/3).toFixed(2)+'px'
      });
      if(top > 50)
        $('.navbar').removeClass('navbar-transparent');
      else
        $('.navbar').addClass('navbar-transparent');
  }).trigger('scroll');
})();


$(document).ready(function(){   
  $('.parallax').parallax();    
});   
  $(document).ready(function(){    
  $('.slider').slider();    
  $('.slider').css('height', '100%');   
 });

// Lazy loading function for images
function loadImgs() {
  // console.log('loading images...')
  var imgs = document.getElementsByClassName('lazy');
  var indicator = $('.imgIndicator')

  // Safeguard in case there isn't an indicator
  var fileType = 'jpg'
  if( indicator.length > 0 ){
    fileType = indicator[0].currentSrc.split(".").pop()
  }
  // console.log(fileType)
  var ext = 'src'
  if( fileType == 'webp' ){
    ext = 'webp'
  }

  for( var i = 0; i < imgs.length; i++ ){
    imgs[i].setAttribute('src',imgs[i].getAttribute('data-'+ext))
  }
}

// Defer materialize, bootstrap, deferred page styling for on pageload
function loadCSS() {
  // console.log('loading css...')
  var sources = document.getElementById('css-srcs')
  var head = document.getElementsByTagName("head")
  var defer = document.getElementsByClassName('defer');

  var bootCSS = document.createElement('link');
  bootCSS.rel = 'stylesheet'
  bootCSS.href = sources.getAttribute('data-bootstrap')
  bootCSS.type = 'text/css'
  head[0].appendChild(bootCSS);

  var materializeCSS = document.createElement('link');
  materializeCSS.rel = 'stylesheet'
  materializeCSS.href = sources.getAttribute('data-materialize')
  materializeCSS.type = 'text/css'
  head[0].appendChild(materializeCSS);

  var mainCSS = document.createElement('link');
  mainCSS.rel = 'stylesheet'
  mainCSS.href = sources.getAttribute('data-main')
  mainCSS.type = 'text/css'
  head[0].appendChild(mainCSS);

  var gFonts = document.createElement('link');
  gFonts.rel = 'stylesheet'
  gFonts.href = sources.getAttribute('data-material-icons')
  gFonts.type = 'text/css'
  head[0].appendChild(gFonts);

  // Load deferred css files after materialize and bootstrap so og formatting order is followed
  for( var i = 0; i < defer.length; i++ ){
    var deferCSS = document.createElement('link');
    deferCSS.rel = 'stylesheet'
    deferCSS.href = defer[i].getAttribute('data-href')
    deferCSS.type = 'text/css'
    // console.log(deferCSS)
    head[0].appendChild(deferCSS);
  }

  $('.delayed-enable').css('pointer-events', 'auto');
}

// Asynchronous function that waits for proper CSS to be loaded before removing critical CSS
async function removeCSS() {
  await loadCSS();

  // Wait to remove old CSS because new CSS takes a little bit to apply
  setTimeout( function() {
    // console.log('start removing old css')
    $('.remove').remove()
  },1000)
}

document.onreadystatechange = function() {
  // If the css-srcs element exists, criticalStatic is active, so load the deferred CSS files
  if( document.getElementById('css-srcs') != null ){
    if( document.readyState == 'interactive') {
      $('.delayed-enable').css("pointer-events", "none");
    } else if( document.readyState == 'complete') {
      removeCSS();
    }
  }
}

window.onload = loadImgs();