(function($){
    'use strict';

    function random(array) {
        return array[Math.floor(array.length * Math.random())];
    }

    $(function() {
        var Mustache = window.Mustache;
        var things = window.things;
        var quips = window.quips;

        var classComingIn = 'flipInY';
        var classGoingOut = 'flipOutY';

        var $current, $old;
        var $frames = $('#frames');
        var frame_template = $('#frame_template').html();

        function next_frame(){
            $old = $($current);

            var thing = random(things);

            var text = thing.text;
            var src = thing.src;
            var quip = random(quips);

            // set up next frame
            $current = $(Mustache.render(frame_template, {
                text: text,
                footnote: src,
                quip: quip
            })).appendTo($frames);

            $old.removeClass(classComingIn);
            $old.addClass(classGoingOut);

            setTimeout(function(){
                $current.removeClass(classComingIn);

                setTimeout(function(){
                    $old.remove();
                }, 3000);
            }, 3000);
        }

        $frames.delegate('a.quip', 'click', function(){
            next_frame();
        });

        next_frame();
    });

})(window.jQuery);