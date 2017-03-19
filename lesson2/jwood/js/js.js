$(document).ready(function(){
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".scroll-down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(function(){
(function($) {
$.fn.blockInheart = function(speed, pause) {
    function vis(el) {
        var top = $(el).offset().top,
            height = $(window).height(),
            scroll = $(window).scrollTop();
        return scroll > top - height && scroll < top + height
    }
    this.each(function(indx, el) {
        var hide = true,
            timer;
        $(window).scroll(function() {
            window.clearTimeout(timer);
            if (!vis(el)) hide = true;
            timer = window.setTimeout(function(event) {
                if (vis(el) && hide) $("body, html").animate({
                    scrollTop: $(el).offset().top
                }, speed, function() {
                    hide = false
                })
            }, pause)
        })
    });
    return this
}
})(jQuery);
 $(".hot").blockInheart(800,50)
   })
