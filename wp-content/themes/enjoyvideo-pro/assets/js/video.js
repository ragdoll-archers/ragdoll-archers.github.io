
(function($){ //create closure so we can safely use $ as alias for jQuery

    $(document).ready(function(){

        "use strict";

        $('.entry-content .wp-block-video').eq(0).addClass('first-video').end();        
        $('.entry-content .wp-block-embed').eq(0).addClass('first-video').end();
        $('.entry-content .wp-video').eq(0).addClass('first-video').end();
        $('.entry-content iframe').eq(0).addClass('first-video').end();
        $('.entry-content video').eq(0).addClass('first-video').end();
        $('.entry-content .wp-block-embed iframe').eq(0).removeClass('first-video').end();
        $('.entry-content .first-video').eq(1).removeClass('first-video').end();

        var video_height = $('.first-video').height();
        $('article.has-embed').css('padding-top',video_height+25);

        var video_height = $('.wp-video').height();
        $('article.has-embed').css('padding-top',video_height+25);

        var video_height = $('.wp-block-video').height();
        $('article.has-embed').css('padding-top',video_height+25);

        $(window).on('resize', function() {

            var video_height_r = $('.first-video').height();
            $('article.has-embed').css('padding-top',video_height_r+25);

            var video_height_r = $('.wp-video').height();
            $('article.has-embed').css('padding-top',video_height_r+25);   

            var video_height_r = $('.wp-block-video').height();
            $('article.has-embed').css('padding-top',video_height_r+25);   

        });                               

    });

})(jQuery);