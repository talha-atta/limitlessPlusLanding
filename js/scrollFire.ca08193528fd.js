function makeVisible(i, e) {
    e || (e = "flipInX"), $(i).addClass("animated " + e), $(i).css("visibility", "visible")
}
$(document).ready(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var i = $(this.hash);
            if (i = i.length ? i : $("[name=" + this.hash.slice(1) + "]"), i.length) return $("html,body").animate({
                scrollTop: i.offset().top
            }, 1e3), !1
        }
    });
    var i = [{
        selector: "#info-pic1",
        offset: 200,
        callback: 'makeVisible("#info-pic1", "bounceInLeft")'
    }, {
        selector: "#info-pic2",
        offset: 200,
        callback: 'makeVisible("#info-pic2", "bounceInUp")'
    }, {
        selector: "#info-pic3",
        offset: 200,
        callback: 'makeVisible("#info-pic3", "bounceInRight")'
    }, {
        selector: "#info-pic4",
        offset: 200,
        callback: 'makeVisible("#info-pic4", "flipInX")'
    }];
    Materialize.scrollFire(i), $("#textarea1").trigger("autoresize")
}); 


